import React from 'react'

import { TLikesData }                       from '../../../redux/voting/types'
import { setNextLikePage, setPrevLikePage } from '../../../redux/voting/slice'
import { TLikeItems }                       from './types'

import { Pagination } from '../../common'


const LikeItems: React.FC<TLikeItems> = ({ dispatch, likeData, likePage }) => {
	const zeroPage = (likePage - 1) < 0
	const lastPage = likeData && likeData.length < 15

	const onClickNext = () => {
		if (!lastPage) dispatch(setNextLikePage())
	}
	const onClickPrev = () => {
		if (!zeroPage) dispatch(setPrevLikePage())
	}

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
				zeroPage={ zeroPage }
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