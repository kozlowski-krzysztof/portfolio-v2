import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import { analyzer } from 'vite-bundle-analyzer'

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	server: {
		port: 4321,
		host: (() => {
			if (process.env.IN_DEVCONTAINER === "true") {
				return true;
			} else {
				return false;
			}
		})(),
	},

	vite: {
		plugins: [analyzer()],
		server: {
			watch: { usePolling: true },
		},
	},
});
