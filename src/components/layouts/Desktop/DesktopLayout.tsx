import React from 'react'
import s     from './DesktopLayout.module.scss'

import { ContentWrapper, MainNavigation } from '../../index'


const DesktopLayout: React.FC = () => {

	return (
		<div className={ s.wrapper }>
			<MainNavigation/>
			<ContentWrapper/>
		</div>
	)
}

export default DesktopLayout
