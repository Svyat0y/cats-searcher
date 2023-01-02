import { FC }      from 'react'
import s           from './Header.module.scss'
import { THeader } from './types'

import HeaderLogo       from './HeaderLogo'
import HeaderNavigation from './HeaderNavigation'
import CustomNickName   from './CustomNickName/CustomNickName'


const Header: FC<THeader> = ({ theme, onChangeTheme }) => {

	return (
		<header className={ s.wrapper }>
			<HeaderLogo theme={ theme }/>
			<CustomNickName/>
			<HeaderNavigation theme={ theme } onChangeTheme={ onChangeTheme }/>
		</header>
	)
}

export default Header
