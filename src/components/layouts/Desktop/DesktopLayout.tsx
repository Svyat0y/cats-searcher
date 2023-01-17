import { FC } from 'react'
import s      from './DesktopLayout.module.scss'

import { ContentWrapper, MainNavigation } from '../../index'
import InDesktopVisible                   from '../../../hoc/InDesktopVisible'


const DesktopLayout: FC = () => {

	return (
		<div className={ s.wrapper }>
			<InDesktopVisible><MainNavigation/></InDesktopVisible>
			<ContentWrapper/>
		</div>
	)
}

export default DesktopLayout
