import { FC }            from 'react'
import { TDislikeItems } from './types'

import { TDataObj } from '../../../redux/voting/types'


const DislikeItems: FC<TDislikeItems> = ({ data }) => {

	return (
		<div className='items'>
			{ data?.map((el: TDataObj) => {
				return (
					<div className='items__imgWrapper unHoverClass' key={ el?.id }>
						<img src={ el?.url } alt='image'/>
					</div>
				)
			}) }
		</div>
	)
}

export default DislikeItems