import { FC }         from 'react'
import { TLikeItems } from './types'


const LikeItems: FC<TLikeItems> = ({ likeData }) => {

	return (
		<>
			<div className='items'>
				{ likeData?.map((el) => {
					return (
						<div className='itemsImg_wr unHoverClass' key={ el?.id }>
							<img src={ el?.image.url } alt='image'/>
						</div>
					)
				}) }
			</div>
		</>
	)
}

export default LikeItems