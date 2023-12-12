/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				sapphire: "#209fb5",
				lavender: "#7287fd",
				maroon: "#e64553",
				red: "#d20f39",
				yellow: "#df8e1d",
				peach: "#fe640b",

				text: "#4c4f69",
				subtext1: "#5c5f77",
				subtext0: "#6c6f85",
				overlay2: "#7c7f93",
				overlay1: "#8c8fa1",
				overlay0: "#9ca0b0",
				surface2: "#acb0be",
				surface1: "#bcc0cc",
				surface0: "#ccd0da",
				base: "#eff1f5",
				mantle: "#e6e9ef",
				crust: "#dce0e8",

				dark_text: "#cdd6f4",
				dark_subtext1: "#bac2de",
				dark_subtext0: "#a6adc8",
				dark_overlay1: "#7f849c",
				dark_overlay0: "#6c7086",
				dark_surface2: "#585b70",
				dark_surface1: "#45475a",
				dark_surface0: "#313244",
				dark_base: "#1e1e2e",
				dark_mantle: "#181825",
				dark_crust: "#11111b"
			},
			fontFamily: {
				text: ["Poppins"],
				code: ["JetBrains Mono", "monospace"]
			}
		},
		screens: {
			"sm": "375px",
			"md": "768px",
			"lg": "1024px",
			"xl": "1280px",
			"2xl": "1536px",
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require("daisyui")
	],
}
