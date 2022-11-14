import React              from 'react'
import s                  from './RefreshButton.module.scss'
import { TRefreshButton } from './types'

import refreshImg from '../../../assets/images/common/refreshImg.webp'


const RefreshButton: React.FC<TRefreshButton> = ({ onclick }) => {
	
	return (
		<button onClick={ onclick } className={ s.refresh_wr }>
			<img src={ refreshImg } alt=''/>
		</button>
	)
}

export default RefreshButton