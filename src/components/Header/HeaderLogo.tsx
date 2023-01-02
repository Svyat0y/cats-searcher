import { FC }          from 'react'
import s               from './Header.module.scss'
import { Link }        from 'react-router-dom'
import { THeaderLogo } from './types'

import logoLight from '../../assets/images/main/logoLight.webp'
import logoDark  from '../../assets/images/main/logoDark.webp'


const HeaderLogo: FC<THeaderLogo> = ({ theme }) => {

	return (
		<Link className={ s.logo } to='/'>
			<img src={ theme === 'light' ? logoLight : logoDark } alt='logo'/>
		</Link>
	)
}

export default HeaderLogo