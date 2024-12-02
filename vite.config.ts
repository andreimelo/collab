import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
	plugins:
		[
			react(),
			tsConfigPaths(),
		],
	resolve:
		{
			alias:
				{
					// Ensure alias is defined correctly
					'@assets': '/src/assets',
					'@library': '/src/library',
					'@routes': '/src/routes',
					'@store': '/src/store',
				},
		},
});
