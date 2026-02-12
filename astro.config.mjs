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
				{ label: 'Home', slug: 'guides/home' },
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
					collapsed: true,
					items: [
						{
							label: 'Viper',
							badge: { text: 'depricated', variant: 'danger'},
							collapsed: true,
							autogenerate: { directory: 'guides/viper' }
						}
					],
				},
				{
					label: 'Libraries',
					collapsed: true,
					items: [
						// Each item here is one entry in the navigation menu.
						// { label: 'Viper', slug: 'guides/viper' },
					],
				},
			],
		}),
	],
});
