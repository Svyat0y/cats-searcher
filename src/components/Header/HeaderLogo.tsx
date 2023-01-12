import { FC }   from 'react'
import s        from './Header.module.scss'
import { Link } from 'react-router-dom'

import logoLight       from '../../assets/images/main/logoLight.webp'
import logoDark        from '../../assets/images/main/logoDark.webp'
import { useSelector } from 'react-redux'
import { themeFilter } from '../../redux/theme/selectors'


const HeaderLogo: FC = () => {
	const { theme } = useSelector(themeFilter)

	return (
		<Link className={ s.logo } to='/'>
			<img src={ theme === 'light' ? logoLight : logoDark } alt='logo'/>
		</Link>
	)
}

export default HeaderLogo