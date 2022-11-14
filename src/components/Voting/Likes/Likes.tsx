import React, { useEffect } from 'react'
import { TVotingItems }     from '../types'

import { setActiveBtn } from '../../../redux/voting/slice'

import LikeItems                                   from './LikeItems'
import { NoItemFound, Pagination, SkeletonLoader } from '../../common'
import RenderItems                                 from '../../hoc/RenderItems'


const Likes: React.FC<TVotingItems> = (
	{
		data,
		page,
		lastPage,
		firstPage,
		onClickNext,
		onClickPrev,
		isLoading,
		noItemsBoolean,
		dispatch
	}) => {

	useEffect(() => {
		dispatch(setActiveBtn('likes'))
	}, [])

	const renderPagination = () => (
		page === 0 && lastPage
			? ''
			: <Pagination
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
