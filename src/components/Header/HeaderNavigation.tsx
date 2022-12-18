import { FC }                from 'react'
import s                     from './Header.module.scss'
import { THeaderNavigation } from './types'

import eyeOpen  from '../../assets/images/main/eyeOpen.webp'
import eyeClose from '../../assets/images/main/eyeClose.webp'


const HeaderNavigation: FC<THeaderNavigation> = ({ theme, onChangeTheme }) => {

	return (
		<div className={ s.header__navigation }>
			<div className={ s.header__img_wr }>
				<img src={ theme === 'light' ? eyeOpen : eyeClose } alt='icon'/>
			</div>
			<div onClick={ onChangeTheme } className={ s.header__switcher }>
				<input
					readOnly
					checked={ theme === 'dark' }
					id='switcher'
					type='checkbox'/>
				<label></label>
			</div>
		</div>
	)
}

export default HeaderNavigation