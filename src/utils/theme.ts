export const onDarkTheme = () => {
	document.body.style.setProperty('--bg_color', '#1D1D1D')
	document.body.style.setProperty('--bg_content_color', '#282828')
	document.body.style.setProperty('--title_color', '#FFFFFF')
	document.body.style.setProperty('--bg_icon', '#282828')
	document.body.style.setProperty('--btn_bg', '#282828')
}
export const onLightTheme = () => {
	document.body.style.setProperty('--bg_color', '#F8F8F7')
	document.body.style.setProperty('--bg_content_color', '#FFFFFF')
	document.body.style.setProperty('--title_color', '#000000')
	document.body.style.setProperty('--bg_icon', '#FFFFFF')
	document.body.style.setProperty('--btn_bg', '#FFFFFF')
}
