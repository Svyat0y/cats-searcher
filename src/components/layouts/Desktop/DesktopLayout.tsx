import React from 'react'
import s     from './DesktopLayout.module.scss'

import { MainNavigation } from '../../index'
import ContentWrapper     from '../ContentWrapper/ContentWrapper'


const DesktopLayout: React.FC = () => {

	return (
		<div className={ s.wrapper }>
			<MainNavigation/>
			<ContentWrapper/>
		</div>
	)
}

export default DesktopLayout
