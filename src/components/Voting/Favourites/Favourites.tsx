import React, { useEffect } from 'react'
import s                    from '../Voting.module.scss'

import { setActiveBtn } from '../../../redux/voting/slice'
import { TVotingItems } from '../types'

import { NoItemFound, Pagination, SkeletonLoader } from '../../common'
import FavItems                                    from './FavItems'
import { VotingMessage }                           from '../index'
import RenderItems                                 from '../../hoc/RenderItems'


const Favourites: React.FC<TVotingItems> = (
	{
		infoMessage,
		dispatch,
		data,
		page,
		lastPage,
		firstPage,
		onClickNext,
		onClickPrev,
		isLoading,
		noItemsBoolean,
		status
	}) => {

	useEffect(() => {
		dispatch(setActiveBtn('favourites'))
	}, [])


	const renderPagination = () => (
		(page === 0 && lastPage)
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
			<FavItems
				status={ status }
				dispatch={ dispatch }
				favoritesData={ data }
			/>
			{ renderPagination() }

			<div className={ s.content__messages }>
				{ infoMessage?.map((el, i) => <VotingMessage key={ i } { ...el }/>) }
			</div>
		</>
	)
}

export default RenderItems(Favourites)
