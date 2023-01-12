import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import s                                                   from './LoginModal.module.scss'
import { TLoginModal }                                     from './types'

import { setNickNameLS } from '../../../services/localStorage/nickNameLs'

import LoginForm from './LoginForm'


const LoginModal: FC<TLoginModal> = ({ dispatch }) => {
	const [ localName, setLocalName ] = useState('')
	const [ animVisible, setAnimVisible ] = useState(false)

	useEffect(() => {
		setTimeout(() => setAnimVisible(true), 1500)
	}, [])

	const onClickSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		e.stopPropagation()

		if (localName.length > 0) {
			setAnimVisible(false)
			setNickNameLS(localName, dispatch)
		}
	}

	const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setLocalName(value)
	}

	return (
		<div className={ `${ s.wrapper } ${ animVisible ? s.visible : '' }` }>
			<div className={ s.body }>
				<h2>Hi!</h2>
				<p>
					Please enter your personal username. This will be your account and any photos you like or favorites will be associated
					with that name. In the future, you can change this name by clicking on the icon at the top of the application.
				</p>
				<LoginForm localName={ localName } onChangeName={ onChangeName } onClickSubmit={ onClickSubmit }/>
			</div>
		</div>
	)
}

export default LoginModal