import React, { useEffect, useState } from 'react'
import DesktopLayout                  from './components/layouts/DesktopLayout'

import { useAppDispatch } from './redux/store'
import { getLSTheme }     from './utils/theme'
import Spinner            from './components/Spinner/Spinner'


const stylesForMainSpinner = {
	width: '100%',
	height: '100vh',
	display: 'flex',
	'justify-content': 'center',
	'align-items': 'center',
}

const App: React.FC = () => {
	const dispatch = useAppDispatch()
	const [ isLoading, setIsLoading ] = useState(true)

	useEffect(() => {
		setIsLoading(true)
		getLSTheme(dispatch)
		setTimeout(() => setIsLoading(false), 2000)
	}, [])

	return (
		<main className='App'>
			{ isLoading ? <div style={ stylesForMainSpinner }><Spinner/></div> : <DesktopLayout/> }
		</main>
	)
}

export default App

// new features in development
/*
* voting component
*
* - implement loader
* - highlight active buttons
* - rewrite the styles of the main navigation menu, hover on cards
* - implement hover on the picture in favourites component with the button - action "add to favourites" and "delete from favourites"
*
* */
