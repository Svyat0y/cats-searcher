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
* - added pagination
* - implement the searching functionality
* - need to fix bug, when reloading the page after click f5 snippet don't offed
*
* */
