import { defineConfig } from 'astro/config';

/**
 * Base de despliegue en GitHub Pages (proyecto bajo /Web/).
 * Por defecto, la ruta definitiva: /Web/entremontes/
 */
const base = process.env.PAGES_BASE ?? '/Web/entremontes';

export default defineConfig({
	site: 'https://lapesquera-cuenca.github.io',
	base,
	build: {
		format: 'file',
	},
});
