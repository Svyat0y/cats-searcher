import { FC, useRef, useState } from 'react'
import s                        from './CustomNickName.module.scss'

import { useSelector } from 'react-redux'

import FormPopup       from './FormPopup'
import NickName        from './NickName'
import { selectLogin } from '../../../redux/Login/selectors'


const CustomNickName: FC = () => {
	const { userId } = useSelector(selectLogin)
	const [ visiblePopup, setVisiblePopup ] = useState(false)
	const [ animVisible, setAnimVisible ] = useState(false)
	const popupRef = useRef<HTMLDivElement>(null)
	const duration = 200

	const onClickShow = () => {
		if (visiblePopup) {
			setAnimVisible(false)
			setTimeout(() => setVisiblePopup(!visiblePopup), duration)
		}
		else setVisiblePopup(!visiblePopup)
	}

	return (
		<div ref={ popupRef } className={ s.nickNameWrapper }>
			<NickName onClickShow={ onClickShow } userId={ userId }/>
			{
				visiblePopup && <FormPopup
					popupRef={ popupRef }
					setVisiblePopup={ setVisiblePopup }
					userId={ userId }
					animVisible={ animVisible }
					setAnimVisible={ setAnimVisible }
					duration={ duration }/>
			}
		</div>
	)
}

export default CustomNickName