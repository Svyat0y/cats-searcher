import { FC }            from 'react'
import { TDataObj }      from '../../../redux/voting/types'
import { TDislikeItems } from './types'


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