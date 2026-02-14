// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://viper-guild.com',
	integrations: [
		starlight({
			title: 'Viper Docs',
			social: [
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/qCgGUKhX7m' },
				{ icon: 'github', label: 'GitHub', href: 'https://git.viper-guild.com/Viper' }
			],
			sidebar: [
				{ label: 'Home', slug: 'docs/home' },
				{
					label: 'Guides',
					collapsed: false,
					items: [
						// Each item here is one entry in the navigation menu.
						// { label: 'Viper', slug: 'guides/viper' },
					],
				},
				{
					label: 'Tools',
					collapsed: false,
					items: [
						{
							label: 'Viper',
							badge: { text: 'depricated', variant: 'danger'},
							collapsed: true,
							autogenerate: { directory: 'docs/viper' }
						},
						{
							label: 'X',
							collapsed: true,
							autogenerate: { directory: 'docs/X' }
						}
					],
				},
				{
					label: 'Libraries',
					collapsed: false,
					items: [
						{
							label: 'GSSE',
							collapsed: true,
							autogenerate: { directory: 'docs/gsse' }
						}
					],
				},
			],
		}),
	],
});
