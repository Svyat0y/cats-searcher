import React         from 'react'
import { TFavItems } from './types'

import { TFavouritesData } from '../../../redux/voting/types'

import FavoriteItem from './FavoriteItem'


const FavItems: React.FC<TFavItems> = ({ dispatch, favoritesData, status }) => {

	return (
		<>
			<div className='items'>
				{ favoritesData?.map((el: TFavouritesData) =>
					<FavoriteItem
						key={ el?.id }
						el={ el }
						dispatch={ dispatch }
						status={ status }
					/>
				) }
			</div>
		</>
	)
}

export default FavItems