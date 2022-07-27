/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: 'Montserrat, sans-serif',
				roboto: 'Roboto, sans-serif',
			},
			boxShadow: {
				main: '0px 4px 32px rgba(0, 0, 0, 0.12);',
				mainDark: '0px -4px 32px rgba(255, 255, 255, 0.12);',
			},
		},
		colors: {
			transparent: 'transparent',
			white: '#FFFFFF',
			accent: '#2F80ED',
			primary: '#828282',
			dark: {
				100: '#333333',
				200: '#4F4F4F',
			},
			neutral: {
				100: '#C4C4C4',
				200: '#E0E0E0',
			},
		},
		plugins: [],
	},
}
