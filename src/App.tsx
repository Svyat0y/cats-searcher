import { FC, useEffect } from 'react'

import { AppDispatch, useAppDispatch } from './redux/store'

import { getLSTheme }    from './services/localStorage/theme'
import { getLsMessages } from './services/localStorage/infoMessageLS'

import { Overlay }       from './components/Ui'
import { DesktopLayout } from './components'


const App: FC = () => {
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

// refactoring  code
// catch errors