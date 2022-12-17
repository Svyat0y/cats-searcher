import React, { useEffect } from 'react'
import DesktopLayout        from './components/layouts/Desktop/DesktopLayout'

import { AppDispatch, useAppDispatch } from './redux/store'

import { getLSTheme }    from './services/localStorage/theme'
import { getLsMessages } from './services/localStorage/infoMessageLS'

import { Overlay } from './components/Ui'


const App: React.FC = () => {
	const dispatch: AppDispatch = useAppDispatch()

	useEffect(() => {
		getLSTheme(dispatch)
		getLsMessages(dispatch)
	}, [])

	return (
		<>
			<main className='App'>
				<DesktopLayout/>
			</main>
			<Overlay/>
		</>
	)
}

export default App

// refactoring the whole project structure
// refactoring the whole project styles