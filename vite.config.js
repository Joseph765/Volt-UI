import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			// The docs layout imports the version from package.json
			allow: ['package.json']
		}
	},
	build: {
		// Set the limit to 1024 kB (1MB)
		chunkSizeWarningLimit: 1024
	}
});
