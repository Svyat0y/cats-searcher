import React, { useEffect } from 'react'
import s                    from '../../Voting/Voting.module.scss'
import { TVotingItems }     from '../../Voting/types'

import { setActiveBtn } from '../../../redux/voting/slice'

import RenderItems                                 from '../../hoc/RenderItems'
import { VotingMessage }                           from '../../Voting'
import OnFavItem                                   from './OnFavItem'
import { NoItemFound, Pagination, SkeletonLoader } from '../../index'


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
			<div className='items'>
				{ data?.map((el) =>
					<OnFavItem
						key={ el?.id }
						el={ el }
						dispatch={ dispatch }
						status={ status }
					/>
				) }
			</div>
			{ renderPagination() }

			<div className={ s.content__messages }>
				{ infoMessage?.map((el, i) => <VotingMessage key={ i } { ...el }/>) }
			</div>
		</>
	)
}

export default RenderItems(Favourites)
