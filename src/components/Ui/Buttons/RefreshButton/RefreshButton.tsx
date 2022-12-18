import { FC }             from 'react'
import s                  from './RefreshButton.module.scss'
import { TRefreshButton } from './types'

import refreshImg from '../../../../assets/images/gallery/refreshImg.webp'


const RefreshButton: FC<TRefreshButton> = ({ onclick, status }) => {

	return (
		<button disabled={ status === 'pending' } onClick={ onclick } className={ s.refreshBtn }>
			<img src={ refreshImg } alt=''/>
		</button>
	)
}

export default RefreshButton