import { defineConfig } from 'astro/config';

/**
 * Base de despliegue con dominio propio www.elmanco.es.
 * La revista se sirve bajo /entremontes/ (raíz del sitio).
 */
const base = process.env.PAGES_BASE ?? '/entremontes';

export default defineConfig({
	site: 'https://www.elmanco.es',
	base,
	build: {
		format: 'file',
	},
});
