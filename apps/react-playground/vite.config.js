import { fileURLToPath } from "node:url";
import { defineConfig, searchForWorkspaceRoot } from "vite";
import react from "@vitejs/plugin-react";

const fromRoot = (path) => fileURLToPath(new URL(`../../${path}`, import.meta.url));

export default defineConfig({
	plugins: [react()],
	resolve: {
		// Use the package sources directly, so edits to components and CSS hot-reload without a build.
		alias: [
			{ find: /^moth-ui-react\/css\/(.*)$/, replacement: fromRoot("packages/css/src/$1") },
			{ find: /^moth-ui-react$/, replacement: fromRoot("packages/react/src/index.ts") }
		]
	},
	server: {
		fs: { allow: [searchForWorkspaceRoot(process.cwd())] }
	}
});
