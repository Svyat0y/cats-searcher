import React, { useEffect } from 'react'
import DesktopLayout        from './components/layouts/DesktopLayout'

import { changeTheme }               from './redux/theme/slice'
import { onDarkTheme, onLightTheme } from './utils/theme'
import { useAppDispatch }            from './redux/store'


const App: React.FC = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
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

	}, [])

	return (
		<main className='App'>
			<DesktopLayout/>
		</main>
	)
}

export default App
