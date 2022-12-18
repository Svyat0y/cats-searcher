import { FC }      from 'react'
import s           from './Header.module.scss'
import { THeader } from './types'

import HeaderLogo       from './HeaderLogo'
import HeaderNavigation from './HeaderNavigation'


const Header: FC<THeader> = ({ theme, onChangeTheme }) => {

	return (
		<header className={ s.header }>
			<HeaderLogo theme={ theme }/>
			<HeaderNavigation theme={ theme } onChangeTheme={ onChangeTheme }/>
		</header>
	)
}

export default Header
