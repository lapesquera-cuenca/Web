/**
 * Metadatos centralizados de la revista Entremontes.
 * Cada número: portada, presentación y lista de artículos.
 * Los cuerpos HTML legados viven en src/content/articles/{slug}.html
 */

const docsBase = 'doc/';

export const issues = [
	{
		number: 1,
		title: 'El maquis en Los Isidros (Requena)',
		type: 'index',
		cover: 'images/numero1/entremontes-1-media.jpg',
		blurb:
			'El entorno de la aldea de Los Isidros (Requena) fue habilitado desde finales de 1945 por lo que al año siguiente sería la Agrupación Guerrillera de Levante. Emilio Cardona “Jalisco”, Fulgencio Giménez “Salvador” y Atilano Quintero “Tomás” llegan a Campo Arcís a finales de 1945 y establecen en las cuevas de Ginesitos uno de los primeros asentamientos del maquis en la Serranía.',
		articles: [{ slug: '1.1', title: 'El maquis en Los Isidros (Requena)' }],
		downloads: [{ label: 'PDF', file: 'Entremontes-1.pdf' }],
	},
	{
		number: 2,
		title: 'La casa de la Madre',
		type: 'index',
		cover: 'images/numero2/entremontes-2-media.jpg',
		blurb:
			'En esta segunda entrega comentamos la vida y vigencia del punto de apoyo de la Agrupación Guerrillera de Levante y Aragón conocido como Casa de la Madre. Con fuentes ya citadas en Los guerrilleros de Levante y Aragón y el buen hacer y recordar del hijo mayor de “La Madre”, Paco Molina. Como novedad, recuperamos un estudio antiguo incluido como prólogo en las memorias de Juan Hueso “Chato el Andaluz”, que titulamos “Informe de guerrillas”. Salud y feliz día para todos.',
		articles: [
			{ slug: '2.1', title: 'La casa de la Madre' },
			{
				slug: '2.2',
				title: 'Información, prensa y propaganda en el AGLA',
				note: 'Ponencia leída en las II Jornadas “Historia y gentes: Propaganda ideológica (1936-1975)”, Ainsa (Huesca), junio, 2002.',
			},
		],
		downloads: [{ label: 'PDF', file: 'Entremontes-2.pdf' }],
	},
	{
		number: 3,
		title: 'Un maquis en la cárcel de Cuenca',
		type: 'index',
		cover: 'images/numero3/entremontes-3-medio.jpg',
		blurb:
			'Eulogio Rodríguez González, el guerrillero de La Huerta de Marojales, primer maqui preso en la cárcel de Cuenca y único superviviente de la primera expedición que llegó a los montes del Sistema Ibérico, nos contó con 95 años sus recuerdos. Buena parte de esta entrega se debe a los pasajes hilvanados de aquellas charlas y a nuevos documentos. Salud para ellos y para su encendida memoria.',
		articles: [
			{ slug: '3.1', title: 'El guerrillero desconocido' },
			{ slug: '3.2', title: 'Carácter y vivencias en la AGLA.' },
		],
		downloads: [{ label: 'PDF', file: 'Entremontes-3.pdf' }],
	},
	{
		number: 4,
		title: 'Un año de guerrillas. Los Montes Universales y el maquis.',
		type: 'index',
		cover: 'images/numero4/entremontes-4-medio.jpg',
		blurb:
			'La primavera de 1947 fue la época en la que la guerrilla de la AGL llegó a los Montes Universales de Teruel. Su presencia no resultó ocasional ni tampoco inoportuna. En los pueblos de El Cuervo, Valdecuenca o Bronchales se colaboró, y un importante número de jóvenes vecinos se involucró en la dinámica del monte. La guerra y la posguerra asolaron su territorio, pero queda como remesa una memoria indomable, democrática y social.',
		articles: [
			{ slug: '4.1', title: 'Un año de guerrillas. Los Montes Universales y el maquis.' },
			{ slug: '4.2', title: 'Los maquis en las montañas de San Martín de Boniches.' },
		],
		downloads: [
			{ label: 'PDF', file: 'Entremontes-4.pdf' },
			{ label: 'EPUB', file: 'Entremontes-4.epub' },
		],
	},
	{
		number: 5,
		title: 'El gobernador Gabriel Juliá (Cuenca, 1948-1956)',
		type: 'index',
		cover: 'images/numero5/entremontes-5-medio.jpg',
		blurb:
			'Esta quinta entrega se centra en la figura y el tiempo histórico del gobernador civil de Cuenca Gabriel Juliá Andreu (1948-1956). Dentro del carácter de esta revista, dedicado al estudio del maquis en especial de la AGLA, abordamos aquí la acción guerrillera desde su represión. Juliá fue el segundo gobernador civil de Cuenca, y el último, que tuvo que lidiar con dicha circunstancia.',
		articles: [
			{ slug: '5.1', title: 'El gobernador Gabriel Juliá (Cuenca, 1948-1956): Maquis, Falange, Cultura' },
			{ slug: '5.2', title: 'Una fecha decisiva para la Agrupación Guerrillera de Levante.' },
		],
		downloads: [
			{ label: 'PDF', file: 'Entremontes-5.pdf' },
			{ label: 'EPUB', file: 'Entremontes 5.epub' },
		],
	},
	{
		number: 6,
		title: 'Un camarada formidable, el mejor guía de pasos del PCE',
		type: 'index',
		cover: 'images/numero6/entremontes-6-medio.jpg',
		blurb:
			'Preparando la presentación de Los guerrilleros de Levante y Aragón en el Congreso de los Diputados, un mano a mano histórico entre Santiago Carrillo y José Manuel Montorio, exguerrillero del AGLA, fui recibido en casa del histórico dirigente comunista. Entre las preguntas que me hiciese, y a las que no pude responderle entonces, estaba saber qué había sido de Pradal. A ello se refiere todo lo que sigue.',
		articles: [
			{ slug: '6.1', title: '“Un camarada formidable, el mejor guía de pasos del PCE”' },
			{ slug: '6.2', title: 'El legado de la Guerrilla. El Maquis en cuerpo y alma.' },
		],
		downloads: [
			{ label: 'PDF', file: 'Entremontes-6.pdf' },
			{ label: 'EPUB', file: 'Entremontes 6.epub' },
		],
	},
	{
		number: 7,
		title: 'Guerra y guerrilla antifranquista de Carlos Blanco Manso “Pepito”',
		type: 'index',
		cover: 'images/numero7/entremontes-7-medio.jpg',
		blurb:
			'La guerrilla antifranquista se nutrió de anónimas personas que elevaron su condición de meros ciudadanos a la categoría de héroes. Sin duda. Aun con todas sus circunstancias de mérito y adversidad. No hay santo, sabemos, sin pecado.',
		articles: [
			{ slug: '7.1', title: 'Guerra y guerrilla antifranquista de Carlos Blanco Manso “Pepito”' },
			{ slug: '7.2', title: 'Los guerrilleros que he conocido' },
			{
				slug: '7.3',
				title: 'Médicos, practicantes y Maquis gallego: El apoyo a la guerrilla y a los represaliados en la posguerra.',
			},
		],
		downloads: [
			{ label: 'PDF', file: 'entremontes-7.pdf' },
			{ label: 'EPUB', file: 'entremontes-7.epub' },
		],
	},
	{
		number: 8,
		title: 'Caminos de Memoria que crean vida. Homenaje a Pedro Peinado',
		type: 'index',
		cover: 'images/numero8/entremontes-8-medio.jpg',
		blurb:
			'La temprana ausencia de quien ha sido uno de los mejores activistas de la recuperación de la memoria, Pedro Peinado, con quien tantas horas y sueños hemos compartido, nos lleva a dedicarle este número. Incluimos una larga reseña de convivencias, la biografía de Juliana Martínez y su marido Gerardo, de Fuertescusa (Cuenca), y una parte del estudio sobre las actuaciones del Tribunal de Responsabilidades Políticas del distrito judicial de Carlet, escrito por José S. Olivares.',
		articles: [
			{ slug: '8.1', title: 'Caminos de Memoria que crean vida. Homenaje a Pedro Peinado' },
			{ slug: '8.2', title: 'Desde Fuertescuasa al PSUC, y el destierro.' },
			{ slug: '8.3', title: 'Franquismo y represión: la Causa General' },
		],
		downloads: [
			{ label: 'PDF', file: 'entremontes-8.pdf' },
			{ label: 'EPUB', file: 'entremontes-8.epub' },
		],
	},
	{
		number: 9,
		title: '¡España Viva!',
		type: 'index',
		cover: 'images/numero9/entremontes-9-medio.jpg',
		blurb:
			'La provincia de Cuenca, en los años de la guerra civil, fue zona republicana. Territorio de retaguardia, tránsito entre Madrid y Valencia, espacio de reorganización de unidades, acogida de refugiados, intendencia, hospital y tribunales. Un “muro de Berlín” activo con múltiples agujeros gruyère. Este número se dedica a Vega del Codorno.',
		articles: [{ slug: '9.1', title: '¡España Viva!' }],
		downloads: [
			{ label: 'PDF', file: 'entremontes-9.pdf' },
			{ label: 'EPUB', file: 'entremontes-9.epub' },
		],
	},
	{
		number: 10,
		title: 'El primer Felipe González',
		type: 'index',
		cover: 'images/numero10/entremontes-10-medio.jpg',
		blurb:
			'En el caso de Tragacete, como complemento del número previo, es llamativo que sólo dos de sus máximos representantes a lo largo de toda la Contienda fueran los únicos fusilados, no así los represaliados. Cerramos con un texto sobre el maquis en 1948 y la quema del autobús de la Campichuelense en julio: un artículo pensado para revista en papel que por su extensión no tenía cabida, y que encuentra aquí su mejor acomodo.',
		articles: [
			{ slug: '10.1', title: 'El primer Felipe González' },
			{ slug: '10.2', title: 'Desde Fuertescuasa al PSUC, y el destierro.' },
			{ slug: '10.3', title: 'El Maquis quema el Campichuelense 8/7/1948' },
		],
		downloads: [
			{ label: 'PDF', file: 'entremontes-10.pdf' },
			{ label: 'EPUB', file: 'entremontes-10.epub' },
		],
	},
];

export function getIssue(number) {
	return issues.find((i) => i.number === number);
}

export function getArticle(slug) {
	for (const issue of issues) {
		const found = (issue.articles || []).find((a) => a.slug === slug);
		if (found) return { ...found, issue };
	}
	if (String(issues[0].number) === slug) return { ...issues[0], issue: issues[0] };
	return undefined;
}

/** Todas las rutas del sitio: portada + índices + artículos */
export function getAllSlugs() {
	const slugs = [];
	for (const issue of issues) {
		slugs.push(String(issue.number));
		for (const a of issue.articles || []) slugs.push(a.slug);
	}
	return slugs;
}
