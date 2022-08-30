import React       from 'react'
import s           from './Header.module.scss'
import { THeader } from './types'

import logoLight from '../../assets/images/logoLight.webp'
import logoDark  from '../../assets/images/logoDark.webp'
import eyeOpen   from '../../assets/images/eyeOpen.webp'
import eyeClose  from '../../assets/images/eyeClose.webp'


const Header: React.FC<THeader> = ({ theme, onChangeTheme }) => {
	return (
		<header className={ s.header }>
			<div className={ s.header__logo }>
				<img src={ theme === 'light' ? logoLight : logoDark } alt='logo'/>
			</div>
			<div className={ s.header__navigation }>
				<div className={ s.header__img_wr }>
					<img src={ theme === 'light' ? eyeOpen : eyeClose } alt='icon'/>
				</div>
				<div onClick={ onChangeTheme } className={ s.header__switcher }>
					<input
						readOnly
						checked={ theme !== 'light' }
						id='switcher'
						type='checkbox'/>
					<label></label>
				</div>
			</div>
		</header>
	)
}

export default Header
