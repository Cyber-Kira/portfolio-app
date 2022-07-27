export const setTheme = (theme: 'dark' | 'light') => {
	localStorage.setItem('theme', theme)

	if (localStorage.theme === 'dark') {
		document.documentElement.classList.add('dark')
		document.body.classList.add('darkMode')
	} else {
		document.documentElement.classList.remove('dark')
		document.body.classList.remove('darkMode')
	}
}
