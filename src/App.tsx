import { FC, useEffect, useState } from 'react'

import { AppDispatch, useAppDispatch } from './redux/store'

import { getLSTheme }    from './services/localStorage/theme'
import { getLsMessages } from './services/localStorage/infoMessageLS'

import { DesktopLayout }  from './components'
import { getNickNameLS }  from './services/localStorage/nickNameLs'
import { useSelector }    from 'react-redux'
import { uploadingSlice } from './redux/Upload/selectors'


const App: FC = () => {
	const dispatch: AppDispatch = useAppDispatch()
	const { showModal } = useSelector(uploadingSlice)
	const [ fadeIn, setFadeIn ] = useState(false)

	useEffect(() => {
		getLSTheme(dispatch)
		getLsMessages(dispatch)
		getNickNameLS(dispatch)
	}, [])

	useEffect(() => {
		setTimeout(() => {
			setFadeIn(true)
		}, 1500)
	}, [])

	return (
		<>
			<main className={ `App ${ fadeIn ? 'fadeIn' : '' } ${ showModal ? 'overlay' : '' }` }>
				<DesktopLayout/>
			</main>
		</>
	)
}

export default App