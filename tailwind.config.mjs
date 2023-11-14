/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				text: "#4c4f69",
				subtext1: "#5c5f77",
				overlay1: "#8c8fa1",
				surface0: "#ccd0da",
				base: "#eff1f5",
				mantle: "#e6e9ef",

				dark_text: "#cdd6f4",
				dark_subtext1: "#bac2de",
				dark_overlay1: "#7f849c",
				dark_surface0: "#313244",
				dark_base: "#1e1e2e",
				dark_mantle: "#181825",
			},
			fontFamily: {
				text: ["Poppins"],
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
