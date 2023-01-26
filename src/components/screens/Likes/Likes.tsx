import { FC, useEffect } from 'react'
import { TVotingItems }  from '../../Voting/types'

import { setActiveBtn, setToLike } from '../../../redux/voting/slice'

import LikeItems                                   from './LikeItems'
import { NoItemFound, Pagination, SkeletonLoader } from '../../index'
import { RenderItems }                             from '../../../hoc'


const Likes: FC<TVotingItems> = (
	{
		data,
		page,
		lastPage,
		firstPage,
		onClickNext,
		onClickPrev,
		isLoading,
		noItemsBoolean,
		dispatch,
	}) => {

	useEffect(() => {
		dispatch(setActiveBtn('likes'))

		return () => {
			dispatch(setToLike(null))
		}
	}, [])

	const renderPagination = () => (
		page === 0 && lastPage
			? ''
			: <Pagination
				page={ page }
				firstPage={ firstPage }
				lastPage={ lastPage }
				onClickNext={ onClickNext }
				onClickPrev={ onClickPrev }/>
	)

	if (isLoading) return <SkeletonLoader count={ 10 }/>

	return (
		<>
			{ noItemsBoolean && <NoItemFound/> }
			<LikeItems likeData={ data }/>
			{ renderPagination() }
		</>
	)
}

export default RenderItems(Likes)
