import React       from 'react'
import s           from './Button.module.scss'
import { TButton } from './types'
import { Link }    from 'react-router-dom'


const Button: React.FC<TButton> = ({ name, isActive, linkTo, onclick, disabled }) => {
	return (
		<Link
			onClick={ onclick }
			to={ linkTo ? linkTo : '' }
			className={ `${ s.btn } ${ isActive && s.btnActive } ${ disabled ? s.btnNoActive : '' }` }>
			{ name }
		</Link>
	)
}

export default Button
