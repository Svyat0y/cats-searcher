import { FC } from 'react'
import s      from './Header.module.scss'

import HeaderLogo     from './HeaderLogo'
import ThemeSwitcher  from '../shared/ThemeSwitcher/ThemeSwitcher'
import CustomNickName from './CustomNickName/CustomNickName'


const Header: FC = () => {
	return (
		<header className={ s.wrapper }>
			<HeaderLogo/>
			<CustomNickName/>
			<ThemeSwitcher/>
		</header>
	)
}

export default Header
