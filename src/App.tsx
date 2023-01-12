import { FC, useEffect, useState } from 'react'

import { AppDispatch, useAppDispatch } from './redux/store'
import { useSelector }                 from 'react-redux'
import { uploadingSlice }              from './redux/Upload/selectors'
import { selectLogin }                 from './redux/Login/selectors'
import { selectMobileMenu }            from './redux/MobileMenu/selectors'

import { getLSTheme }    from './services/localStorage/theme'
import { getLsMessages } from './services/localStorage/infoMessageLS'
import { getNickNameLS } from './services/localStorage/nickNameLs'

import { DesktopLayout, MobileMenu } from './components'
import LoginModal                    from './components/shared/Modal/LoginModal'


const App: FC = () => {
	const dispatch: AppDispatch = useAppDispatch()
	const { showModalUpload } = useSelector(uploadingSlice)
	const { showModalLogin } = useSelector(selectLogin)
	const { isOpen } = useSelector(selectMobileMenu)
	const [ fadeIn, setFadeIn ] = useState(false)

	const isModal = showModalLogin || showModalUpload

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
			<main className={ `App ${ fadeIn ? 'fadeIn' : '' } ${ isModal ? 'overlay' : '' }` }>
				<DesktopLayout/>
				{ showModalLogin && <LoginModal dispatch={ dispatch }/> }
				{ isOpen && <MobileMenu/> }
			</main>
		</>
	)
}

export default App