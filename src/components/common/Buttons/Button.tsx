import React       from 'react'
import s           from './Button.module.scss'
import { TButton } from './types'
import uploadImg   from './../../../assets/images/gallery/upload.png'


const Button: React.FC<TButton> = ({ name, isActive, onclick, disabled, breadCrumbs, upload }) => {

	return (
		<button
			onClick={ onclick }
			className={ `${ s.btn } ${ isActive && s.btnActive } ${ disabled ? s.btnNoActive : '' } ${ breadCrumbs ? s.breadCrumbs : '' }` }>
			{ upload && <img className={ s.uploadImg } src={ uploadImg } alt='upload'/> }
			{ name }
		</button>
	)
}

export default Button
