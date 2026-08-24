/**
 * Verifica que todos los enlaces y recursos internos de dist/ existen.
 * Comprueba href/src de los HTML y los destinos #ancla dentro de cada página.
 */
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { dirname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const BASE = process.env.PAGES_BASE ?? '/entremontes';

function walk(dir) {
	return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
		const p = join(dir, e.name);
		return e.isDirectory() ? walk(p) : [p];
	});
}

const files = walk(DIST);
const htmlFiles = files.filter((f) => f.endsWith('.html'));
let broken = [];
let checked = 0;

for (const file of htmlFiles) {
	const html = readFileSync(file, 'utf8');
	const refs = [...html.matchAll(/\b(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
	const relDir = dirname(file);

	for (const raw of refs) {
		const ref = raw
			.replace(/&amp;/g, '&')
			.split('#')[0];
		const anchor = (raw.match(/#(.+)$/) || [])[1];

		if (!ref && anchor) {
			// ancla en la misma página (id= o name=, estilo export de Word)
			if (!new RegExp(`(?:id|name)="${anchor}"`).test(html)) {
				broken.push(`${relPath(file)} -> #${anchor} (ancla inexistente)`);
			}
			checked++;
			continue;
		}
		if (/^(https?:|mailto:|tel:|data:)/.test(ref)) continue;
		if (!ref.trim()) continue;

		checked++;
		let target;
		if (ref.startsWith(BASE + '/')) {
			// URL absoluta generada por Astro con base -> relativa a dist/
			target = normalize(join(DIST, decodeURIComponent(ref.slice(BASE.length + 1))));
		} else if (ref.startsWith('/')) {
			target = normalize(join(DIST, decodeURIComponent(ref)));
		} else {
			target = normalize(join(relDir, decodeURIComponent(ref)));
		}
		if (!existsSync(target) || statSync(target).isDirectory()) {
			broken.push(`${relPath(file)} -> ${raw}`);
		}
	}

	// imágenes con srcset no usado aquí; suficiente para esta web estática
}

function relPath(p) {
	return p.replace(DIST, '');
}

console.log(`Páginas HTML: ${htmlFiles.length}`);
console.log(`Referencias comprobadas: ${checked}`);
if (broken.length) {
	console.log(`\nROTOS (${broken.length}):`);
	console.log(broken.join('\n'));
	process.exit(1);
} else {
	console.log('Sin enlaces rotos.');
}
