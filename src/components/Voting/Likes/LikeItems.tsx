import React          from 'react'
import { TLikeItems } from './types'

import { TLikesData }                                          from '../../../redux/voting/types'
import { setIsLikesMounted, setNextLikePage, setPrevLikePage } from '../../../redux/voting/slice'

import { Pagination } from '../../common'


const LikeItems: React.FC<TLikeItems> = ({ dispatch, likeData, likePage }) => {
	const zeroPage = (likePage - 1) < 0
	const lastPage = likeData && likeData.length < 15

	const onClickNext = () => {
		dispatch(setNextLikePage())
		dispatch(setIsLikesMounted(false))
	}
	const onClickPrev = () => {
		dispatch(setPrevLikePage())
		dispatch(setIsLikesMounted(false))
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