import React from 'react'

import { TFavouritesData }                                 from '../../../redux/voting/types'
import { setIsFavMounted, setNextFavPage, setPrevFavPage } from '../../../redux/voting/slice'
import { TFavItems }                                       from './types'

import { NoItemFound, Pagination } from '../../common'
import FavoriteItem                from './FavoriteItem'


const FavItems: React.FC<TFavItems> = ({ dispatch, favoritesData, favPage, status }) => {
	const noItemsBoolean = (favoritesData?.length === 0)
	const zeroPage = (favPage - 1) < 0
	const lastPage = favoritesData && favoritesData?.length < 15

	const onClickNext = () => {
		dispatch(setNextFavPage())
		dispatch(setIsFavMounted(false))
	}
	const onClickPrev = () => {
		dispatch(setPrevFavPage())
		dispatch(setIsFavMounted(false))
	}

	const renderData = () => (
		favoritesData?.map((el: TFavouritesData) =>
			<FavoriteItem
				key={ el?.id }
				el={ el }
				dispatch={ dispatch }
				status={ status }/>)
	)

	const renderPagination = () => (
		(favPage === 0 && lastPage)
			? ''
			: <Pagination
				zeroPage={ zeroPage }
				lastPage={ lastPage }
				onClickNext={ onClickNext }
				onClickPrev={ onClickPrev }/>
	)

	return (
		<>
			{ noItemsBoolean && <NoItemFound noItemsBoolean={ noItemsBoolean } favPage={ favPage }/> }
			<div className='items'>
				{ renderData() }
			</div>
			{ renderPagination() }
		</>
	)
}

export default FavItems