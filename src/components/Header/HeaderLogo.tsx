import { FC }   from 'react'
import s        from './Header.module.scss'
import { Link } from 'react-router-dom'

import { useSelector }      from 'react-redux'
import { useAppDispatch }   from '../../redux/store'
import { themeFilter }      from '../../redux/theme/selectors'
import { setIsOpen }        from '../../redux/MobileMenu/slice'
import { selectMobileMenu } from '../../redux/MobileMenu/selectors'

import logoLight from '../../assets/images/main/logoLight.webp'
import logoDark  from '../../assets/images/main/logoDark.webp'


const HeaderLogo: FC = () => {
	const dispatch = useAppDispatch()
	const { theme } = useSelector(themeFilter)
	const { isOpen } = useSelector(selectMobileMenu)

	const closeMenu = () => {
		isOpen && dispatch(setIsOpen(false))
	}

	return (
		<Link onClick={ closeMenu } className={ s.logo } to='/'>
			<img src={ theme === 'light' ? logoLight : logoDark } alt='logo'/>
		</Link>
	)
}

export default HeaderLogo