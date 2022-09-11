import React, { useEffect } from 'react'
import s                    from './Favourites.module.scss'

import { fetchGetFavourites } from '../../../redux/voting/asyncActions'
import { TFavouritesData }    from '../../../redux/voting/types'
import { TFavourites }        from './types'


const Favourites: React.FC<TFavourites> = ({ dispatch, favoritesData }) => {

	useEffect(() => {
		dispatch(fetchGetFavourites())
	}, [])

	return (
		<div className={ s.favourites }>
			{ favoritesData?.map((el: TFavouritesData, i) => {
				return (
					<div className={ s.favourites__img_wr } key={ el?.id }>
						<img src={ el?.image?.url } alt='image'/>
					</div>
				)
			}) }
		</div>
	)
}

export default Favourites
