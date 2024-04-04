/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			logo: ['Covered By Your Grace', 'sans-serif'],
			main: ['Poppins', 'sans-serif'],
			hello: ['Orbitron Variable', 'sans-serif']
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
