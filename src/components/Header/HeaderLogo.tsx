import React    from 'react'
import s        from './Header.module.scss'
import { Link } from 'react-router-dom'

import logoLight       from '../../assets/images/logoLight.webp'
import logoDark        from '../../assets/images/logoDark.webp'
import { THeaderLogo } from './types'


const HeaderLogo: React.FC<THeaderLogo> = ({ theme }) => {
	return (
		<Link to='/'>
			<div className={ s.header__logo }>
				<img src={ theme === 'light' ? logoLight : logoDark } alt='logo'/>
			</div>
		</Link>
	)
}

export default HeaderLogo