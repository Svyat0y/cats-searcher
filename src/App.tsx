import React, { useEffect } from 'react'
import DesktopLayout        from './components/layouts/DesktopLayout'

import { AppDispatch, useAppDispatch } from './redux/store'

import { getLSTheme }    from './utils/theme'
import { getLsMessages } from './utils/infoMessageLS'

import Overlay from './components/common/Overlay/Overlay'


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