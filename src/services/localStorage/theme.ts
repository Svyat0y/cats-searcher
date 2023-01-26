import { AppDispatch } from '../../redux/store'
import { changeTheme } from '../../redux/theme/slice'


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

	if (String(theme) === 'light') {
		onLightTheme()
		dispatch(changeTheme('light'))
	}
	else{
		onDarkTheme()
		dispatch(changeTheme('dark'))
	}
}
