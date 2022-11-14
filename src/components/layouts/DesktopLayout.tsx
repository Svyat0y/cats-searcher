import React from 'react'
import s     from './DesktopLayout.module.scss'

import { Content, MainNavigation } from '../../components'


const DesktopLayout: React.FC = () => {
	
	return (
		<div className={ s.wrapper }>
			<MainNavigation/>
			<Content/>
		</div>
	)
}

export default DesktopLayout
