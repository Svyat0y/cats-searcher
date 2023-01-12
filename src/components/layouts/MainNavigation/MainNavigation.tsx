import { FC } from 'react'
import s      from './MainNavigation.module.scss'

import { Header, MainNavCards } from '../../index'


const MainNavigation: FC = () => {
	return (
		<div className={ s.wrapper }>
			<div className={ s.container }>
				<Header/>
				<MainNavCards/>
			</div>
		</div>
	)
}

export default MainNavigation
