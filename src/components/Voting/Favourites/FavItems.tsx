import React         from 'react'
import { TFavItems } from './types'

import { TFavouritesData } from '../../../redux/voting/types'

import FavoriteItem   from './FavoriteItem'
import { Pagination } from '../../common'


const FavItems: React.FC<TFavItems> = (
	{ dispatch, favoritesData, favPage, status, onClickNext, onClickPrev, firstPage, lastPage }) => {

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

export default FavItems