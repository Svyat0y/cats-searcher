import { FC }                from 'react'
import s                     from './Header.module.scss'
import { THeaderNavigation } from './types'

import eyeOpen  from '../../assets/images/main/eyeOpen.webp'
import eyeClose from '../../assets/images/main/eyeClose.webp'


const HeaderNavigation: FC<THeaderNavigation> = ({ theme, onChangeTheme }) => {

	return (
		<div className={ s.navigation }>
			<div className={ s.imgWrapper }>
				<img src={ theme === 'light' ? eyeOpen : eyeClose } alt='icon'/>
			</div>
			<label className={ s.switcher } onClick={ onChangeTheme }>
				<button></button>
				<input
					readOnly
					checked={ theme === 'dark' }
					id='switcher'
					type='checkbox'/>
				<span></span>
			</label>
		</div>
	)
}

export default HeaderNavigation