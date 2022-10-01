/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'c-green': '#00aa96',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
