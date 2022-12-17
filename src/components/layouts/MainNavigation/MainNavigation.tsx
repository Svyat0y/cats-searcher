import React          from 'react'
import s              from './MainNavigation.module.scss'
import { setLSTheme } from '../../../services/localStorage/theme'

import { useSelector }    from 'react-redux'
import { useAppDispatch } from '../../../redux/store'
import { themeFilter }    from '../../../redux/theme/selectors'


import { Header }       from '../../index'
import { MainNavCards } from '../../MainNavCards'


const MainNavigation: React.FC = () => {
	const { theme } = useSelector(themeFilter)
	const dispatch = useAppDispatch()

	const onChangeTheme = () => {
		setLSTheme(theme, dispatch)
	}

	return (
		<div className={ s.wrapper }>
			<div className={ s.wrapper__container }>
				<Header theme={ theme } onChangeTheme={ onChangeTheme }/>
				<MainNavCards/>
			</div>
		</div>
	)
}

export default MainNavigation
