import React       from 'react'
import s           from './Button.module.scss'
import { TButton } from './types'


const Button: React.FC<TButton> = ({ name, isActive }) => {
	return (
		<button className={ `${ s.btn } ${ isActive && s.btnActive }` }>
			{ name }
		</button>
	)
}

export default Button
