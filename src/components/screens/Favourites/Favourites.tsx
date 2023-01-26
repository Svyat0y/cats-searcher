import { FC, useEffect } from 'react'
import s                 from './Favourites.module.scss'
import { TVotingItems }  from '../../Voting/types'

import { setActiveBtn, setToFavoritesData } from '../../../redux/voting/slice'

import OnFavItem                                                   from './OnFavItem'
import { ActionMessages, NoItemFound, Pagination, SkeletonLoader } from '../../index'
import { RenderItems }                                             from '../../../hoc'


const Favourites: FC<TVotingItems> = (
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

		return () => {
			dispatch(setToFavoritesData(null))
		}
	}, [])

	const renderPagination = () => (
		(page === 0 && lastPage)
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

			<div className={ s.messages }>
				{ infoMessage?.map((el, i) => <ActionMessages key={ i } { ...el }/>) }
			</div>
		</>
	)
}

export default RenderItems(Favourites)
