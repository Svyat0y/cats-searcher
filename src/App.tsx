import React, { useEffect } from 'react'
import DesktopLayout        from './components/layouts/DesktopLayout'

import { useAppDispatch } from './redux/store'
import { getLSTheme }     from './utils/theme'


const App: React.FC = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		getLSTheme(dispatch)
	}, [])

	return (
		<main className='App'>
			<DesktopLayout/>
		</main>
	)
}

export default App

// new features in development
/*
* voting component
*
* - highlight active buttons
* - added pagination
* - rewrite the styles of the main navigation menu, hover on cards
* - implement hover on the picture in favourites component with the button - action "add to favourites" and "delete from favourites"
* - implement the searching functionality
*
* */
