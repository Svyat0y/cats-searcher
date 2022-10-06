import React from 'react'
import s     from './Button.module.scss'

import { TButton } from './types'


const Button: React.FC<TButton> = ({ name, isActive, linkTo, onclick, disabled }) => {
	return (
		<button
			onClick={ onclick }
			className={ `${ s.btn } ${ isActive && s.btnActive } ${ disabled ? s.btnNoActive : '' }` }>
			{ name }
		</button>
	)
}

export default Button
