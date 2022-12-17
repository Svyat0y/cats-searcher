import React             from 'react'
import { TDataObj }      from '../../redux/voting/types'
import { TDislikeItems } from './types'


const DislikeItems: React.FC<TDislikeItems> = ({ data }) => {

	return (
		<div className='items'>
			{ data?.map((el: TDataObj) => {
				return (
					<div className='itemsImg_wr unHoverClass' key={ el?.id }>
						<img src={ el?.url } alt='image'/>
					</div>
				)
			}) }
		</div>
	)
}

export default DislikeItems