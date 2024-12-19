// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.statalytics.net',
	base: '/',
	integrations: [
		react(),
		starlight({
			title: 'Statalytics Docs',
			favicon: './src/assets/logo_transparent.png',
			logo: {
				dark: './src/assets/logo_transparent.png',
				light: './src/assets/logo_light.svg',
			},
			social: {
				github: 'https://github.com/statalytics/docs',
				discord: "https://statalytics.net/discord",
			},
			customCss: [
				"./src/styles/custom.css"
			],
			sidebar: [
				// "index",
				{
					label: 'Start Here',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Quickstart', slug: 'index' },
					],
				},
				{
					label: 'Settings',
					autogenerate: { directory: 'settings' },
				},
				{
					label: 'Features',
					autogenerate: { directory: 'features' },
				},
				{
					label: 'Premium',
					autogenerate: { directory: 'premium' },
				},
				{
					label: 'Misc',
					autogenerate: { directory: 'misc' },
				},
			],
		}),
	],
});
