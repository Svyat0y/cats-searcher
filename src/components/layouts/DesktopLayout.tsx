import React from 'react'
import s     from './DesktopLayout.module.scss'

import { MainNavigation } from '../MainNavigation'
import { Content }        from '../Content'


const DesktopLayout: React.FC = () => {
	return (
		<div className={ s.wrapper }>
			<MainNavigation/>
			<Content/>
		</div>
	)
}

export default DesktopLayout
