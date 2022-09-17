import React       from 'react'
import s           from './Button.module.scss'
import { TButton } from './types'
import { Link }    from 'react-router-dom'


const Button: React.FC<TButton> = ({ name, isActive, linkTo }) => {
	return (
		<Link to={ linkTo } className={ `${ s.btn } ${ isActive && s.btnActive }` }>
			{ name }
		</Link>
	)
}

export default Button
