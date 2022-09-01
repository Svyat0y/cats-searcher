import React       from 'react'
import s           from './Button.module.scss'
import { TButton } from './types'


const Button: React.FC<TButton> = ({ name }) => {
	return (
		<button className={ s.btn }>
			{ name }
		</button>
	)
}

export default Button
