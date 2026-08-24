import { defineConfig } from 'astro/config';

/**
 * Base de despliegue en GitHub Pages (proyecto bajo /Web/).
 * - Validación: /Web/entremontes_v2/  (por defecto)
 * - Cutover final: PAGES_BASE=/Web/entremontes npm run build
 */
const base = process.env.PAGES_BASE ?? '/Web/entremontes_v2';

export default defineConfig({
	site: 'https://lapesquera-cuenca.github.io',
	base,
	build: {
		format: 'file',
	},
});
