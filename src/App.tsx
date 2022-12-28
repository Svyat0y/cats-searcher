import { FC, useEffect, useState } from 'react'

import { AppDispatch, useAppDispatch } from './redux/store'

import { getLSTheme }    from './services/localStorage/theme'
import { getLsMessages } from './services/localStorage/infoMessageLS'

import { Overlay }       from './components/Ui'
import { DesktopLayout } from './components'


const App: FC = () => {
	const dispatch: AppDispatch = useAppDispatch()
	const [ fadeIn, setFadeIn ] = useState(false)

	useEffect(() => {
		getLSTheme(dispatch)
		getLsMessages(dispatch)
	}, [])

	useEffect(() => {
		setTimeout(() => {
			setFadeIn(true)
		}, 1500)
	}, [])

	return (
		<>
			<main className={ `App ${ fadeIn ? 'fadeIn' : '' }` }>
				<DesktopLayout/>
			</main>
			<Overlay/>
		</>
	)
}

export default App