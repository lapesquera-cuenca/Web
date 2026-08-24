/**
 * Migra los cuerpos de artículo de la web antigua (../entremontes/*.html)
 * hacia src/content/articles/{slug}.html, normalizando el markup legacy:
 *  - extrae sólo el bloque de contenido (#content)
 *  - elimina cabeceras duplicadas del logotipo y scripts
 *  - convierte atributos presentacionales (align/hspace/vspace/border)
 *  - añade loading=lazy / decoding=async / alt a las imágenes
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(root, '..', 'entremontes');
const OUT = join(root, 'src', 'content', 'articles');
mkdirSync(OUT, { recursive: true });

const SLUGS = [
	'1.1', '2.1', '2.2', '3.1', '3.2', '4.1', '4.2', '5.1', '5.2',
	'6.1', '6.2', '7.1', '7.2', '7.3', '8.1', '8.2', '8.3', '9.1',
	'10.1', '10.2', '10.3',
];

const ALIGN_TEXT = { left: 'left', right: 'right', center: 'center', justify: 'justify', middle: 'center' };

/* Slugs cuyo fichero origen en la web antigua tiene otro nombre */
const SOURCE_ALIAS = { '1.1': '1' };

function addStyle($el, decl) {
	const prev = ($el.attr('style') || '').replace(/;\s*$/, '');
	$el.attr('style', prev ? `${prev}; ${decl}` : decl);
}

let report = [];

	for (const slug of SLUGS) {
	const file = join(SRC, `${SOURCE_ALIAS[slug] ?? slug}.html`);
	const html = readFileSync(file, 'utf8');
	const $ = cheerio.load(html);

	const content = $('#content');
	if (!content.length) {
		report.push(`${slug}: SIN #content — omitido`);
		continue;
	}

	// Limpieza global dentro del contenido
	content.find('script, style, noscript').remove();

	// Cabeceras duplicadas: logo-imagen de la web o título heredado con #logo/#logo2
	content
		.find('header')
		.filter((_, el) => {
			const $el = $(el);
			return (
				$el.find('img[src*="entremontes.jpg"], img[src*="NewEntremontes"]').length > 0 ||
				$el.find('#logo, #logo2').length > 0
			);
		})
		.remove();

	// Envoltorios heredados: los <article> se desenvuelven (evita ids duplicados)
	content.find('article').each((_, el) => {
		const $el = $(el);
		$el.replaceWith($el.contents());
	});

	// Encabezados que sólo envuelven imágenes -> se desenvuelven
	for (const tag of ['h1', 'h2', 'h3', 'h4']) {
		content.find(tag).each((_, el) => {
			const $el = $(el);
			const ownText = $el.clone().children('img').remove().end().text().trim();
			if (!ownText && $el.find('img').length > 0) {
				$el.replaceWith($el.contents());
			}
		});
	}

	// Atributos presentacionales -> clases/estilos modernos
	content.find('[align]').each((_, el) => {
		const $el = $(el);
		const value = ($el.attr('align') || '').toLowerCase();
		$el.removeAttr('align');
		if (el.tagName === 'img') {
			if (value === 'left' || value === 'right') $el.addClass(`image-${value}`);
			else if (value === 'middle' || value === 'center') $el.addClass('centered');
			return;
		}
		const mapped = ALIGN_TEXT[value];
		if (mapped) addStyle($el, `text-align: ${mapped}`);
	});

	content.find('img[hspace], img[vspace]').removeAttr('hspace vspace');
	content.find('img[border]').removeAttr('border');

	// Imágenes: lazy, async y alt garantizado
	let imgFixed = 0;
	content.find('img').each((_, el) => {
		const $el = $(el);
		if (!$el.attr('loading')) {
			$el.attr('loading', 'lazy');
			imgFixed++;
		}
		if (!$el.attr('decoding')) $el.attr('decoding', 'async');
		if (!$el.attr('alt')) $el.attr('alt', '');
		$el.addClass('legacy-img');
	});
	content.find('.legacy-img').removeClass('legacy-img');

	// Párrafos/divs vacíos fuera
	content.find('p, div').each((_, el) => {
		const $el = $(el);
		const txt = $el.clone().children('img, iframe, table, br').remove().end().text().trim();
		if (!txt && !$el.children('img, iframe, table').length && !$el.children().length) {
			$el.remove();
		}
	});

	writeFileSync(join(OUT, `${slug}.html`), content.html().trim() + '\n', 'utf8');
	report.push(`${slug}: ok (${content.find('img').length} imgs, ${imgFixed} lazy añadidas)`);
}

console.log(report.join('\n'));
