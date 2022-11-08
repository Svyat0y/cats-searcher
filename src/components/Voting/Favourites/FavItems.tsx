import React         from 'react'
import { TFavItems } from './types'

import FavoriteItem from './FavoriteItem'


const FavItems: React.FC<TFavItems> = ({ dispatch, favoritesData, status }) => {

	return (
		<>
			<div className='items'>
				{ favoritesData?.map((el) =>
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