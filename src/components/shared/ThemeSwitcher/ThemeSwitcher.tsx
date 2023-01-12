import { FC } from 'react'
import s      from './ThemeSwitcher.module.scss'

import eyeOpen  from '../../../assets/images/main/eyeOpen.webp'
import eyeClose from '../../../assets/images/main/eyeClose.webp'

import { useAppDispatch } from '../../../redux/store'
import { setLSTheme }     from '../../../services/localStorage/theme'
import { useSelector }    from 'react-redux'
import { themeFilter }    from '../../../redux/theme/selectors'


const ThemeSwitcher: FC = () => {
	const { theme } = useSelector(themeFilter)
	const dispatch = useAppDispatch()

	const onChangeTheme = () => {
		setLSTheme(theme, dispatch)
	}

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

export default ThemeSwitcher