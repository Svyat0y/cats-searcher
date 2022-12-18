import { FC }             from 'react'
import s                  from './RefreshButton.module.scss'
import { TRefreshButton } from './types'

import refreshImg from '../../../../assets/images/gallery/refreshImg.webp'


const RefreshButton: FC<TRefreshButton> = ({ onclick }) => {

	return (
		<button onClick={ onclick } className={ s.refresh_wr }>
			<img src={ refreshImg } alt=''/>
		</button>
	)
}

export default RefreshButton