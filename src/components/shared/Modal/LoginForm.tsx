import { FC }         from 'react'
import s              from './LoginModal.module.scss'
import { TLoginForm } from './types'

import { Button } from '../../Ui'


const LoginForm: FC<TLoginForm> = ({ onChangeName, onClickSubmit, localName }) => {
	return (
		<form className={ s.formWrapper } onSubmit={ onClickSubmit }>
			<label htmlFor='login'> Your personal username: </label>
			<input onChange={ onChangeName } id='login' type='text' value={ localName } placeholder='example: Alex'/>
			<Button name='enter'/>
		</form>
	)
}

export default LoginForm