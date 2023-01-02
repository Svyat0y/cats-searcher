import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import s                                                   from './CustomNickName.module.scss'
import { TFormPopup, TPopupClick }                         from './types'

import { useAppDispatch } from '../../../redux/store'

import { setNickNameLS } from '../../../services/localStorage/nickNameLs'
import { Button }        from '../../Ui'


const FormPopup: FC<TFormPopup> = ({ setVisiblePopup, popupRef, animVisible, setAnimVisible, duration }) => {
	const dispatch = useAppDispatch()
	const [ localName, setLocalName ] = useState('')

	useEffect(() => {
		document.body.addEventListener('mousedown', handleClickOutside)
		setAnimVisible(true)

		return () => document.body.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const handleClickOutside = (e: MouseEvent) => {
		const _event = e as TPopupClick
		const path = _event.path || (e.composedPath && e.composedPath())
		
		if (popupRef.current && !path.includes(popupRef.current)) {
			setAnimVisible(false)
			setTimeout(() => setVisiblePopup(false), duration)
		}
	}

	const onclickConfirm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		e.stopPropagation()

		if (localName) {
			setNickNameLS(localName, dispatch)
			setAnimVisible(false)
			setTimeout(() => setVisiblePopup(false), duration)
		}
	}

	const onchangeName = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setLocalName(value)
	}

	return (
		<form className={ `${ s.popupWrapper } ${ animVisible ? s.visible : '' }` } onSubmit={ onclickConfirm }>
			<label htmlFor='nickName'>New user name:</label>
			<input onChange={ onchangeName } id='nickName' type='text' value={ localName }/>
			<Button name='ok'/>
		</form>
	)
}

export default FormPopup


