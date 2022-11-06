import React          from 'react'
import { TLikeItems } from './types'

import { TLikesData } from '../../../redux/voting/types'

import { Pagination } from '../../common'


const LikeItems: React.FC<TLikeItems> = ({ likeData, firstPage, lastPage, likePage, onClickNext, onClickPrev }) => {

	const renderData = () => (
		likeData?.map((el: TLikesData) => {
			return (
				<div className='itemsImg_wr unHoverClass' key={ el.id }>
					<img src={ el.image.url } alt='image'/>
				</div>
			)
		})
	)

	const renderPagination = () => (
		likePage === 0 && lastPage
			? ''
			: <Pagination
				firstPage={ firstPage }
				lastPage={ lastPage }
				onClickNext={ onClickNext }
				onClickPrev={ onClickPrev }/>
	)

	return (
		<>
			<div className='items'>
				{ renderData() }
			</div>
			{ renderPagination() }
		</>
	)
}

export default LikeItems