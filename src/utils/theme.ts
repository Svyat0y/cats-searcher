import { changeTheme } from '../redux/theme/slice'
import { AppDispatch } from '../redux/store'


export const onDarkTheme = () => {
	document.documentElement.setAttribute('data-theme', 'dark')
}
export const onLightTheme = () => {
	document.documentElement.setAttribute('data-theme', 'light')
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
