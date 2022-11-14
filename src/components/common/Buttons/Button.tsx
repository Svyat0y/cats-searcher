import React       from 'react'
import s           from './Button.module.scss'
import { TButton } from './types'


const Button: React.FC<TButton> = ({ name, isActive, onclick, disabled, breadCrumbs }) => {
	
	return (
		<button
			onClick={ onclick }
			className={ `${ s.btn } ${ isActive && s.btnActive } ${ disabled ? s.btnNoActive : '' } ${ breadCrumbs ? s.breadCrumbs : '' }` }>
			{ name }
		</button>
	)
}

export default Button
