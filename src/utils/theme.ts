import { changeTheme } from '../redux/theme/slice'
import { AppDispatch } from '../redux/store'


export const onDarkTheme = () => {
	document.body.style.setProperty('--bg_color', '#1D1D1D')
	document.body.style.setProperty('--bg_content_color', '#292929')
	document.body.style.setProperty('--title_color', '#FFFFFF')
	document.body.style.setProperty('--bg_icon', '#292929')
	document.body.style.setProperty('--btn_bg', '#292929')
	document.body.style.setProperty('--input_search_bg', '#543C3D')
	document.body.style.setProperty('--bg_infoColor', '#343434')
	document.body.style.setProperty('--bg_blackWhite', '#1D1D1D')
	document.body.style.setProperty('--bg_vote_btn_border', '#292929')
}
export const onLightTheme = () => {
	document.body.style.setProperty('--bg_color', '#F8F8F7')
	document.body.style.setProperty('--bg_content_color', '#FFFFFF')
	document.body.style.setProperty('--title_color', '#000000')
	document.body.style.setProperty('--bg_icon', '#FFFFFF')
	document.body.style.setProperty('--btn_bg', '#FFFFFF')
	document.body.style.setProperty('--input_search_bg', '#FBE0DC')
	document.body.style.setProperty('--bg_infoColor', '#F8F8F7')
	document.body.style.setProperty('--bg_blackWhite', '#FFFFFF')
	document.body.style.setProperty('--bg_vote_btn_border', '#FFFFFF')
}


export const setLSTheme = (theme: string, dispatch: AppDispatch) => {
	const json = JSON.stringify(theme === 'light' ? 'dark' : 'light')
	localStorage.setItem('theme', json)

	if (theme === 'light') {
		onDarkTheme()
		dispatch(changeTheme('dark'))
	}
	else{
		onLightTheme()
		dispatch(changeTheme('light'))
	}
}

export const getLSTheme = (dispatch: AppDispatch) => {
	const data = localStorage.getItem('theme')
	const theme = data ? JSON.parse(data) : []

	if (String(theme) === 'dark') {
		onDarkTheme()
		dispatch(changeTheme('dark'))
	}
	else{
		onLightTheme()
		dispatch(changeTheme('light'))
	}
}
