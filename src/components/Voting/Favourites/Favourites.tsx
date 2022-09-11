import React, { useEffect } from 'react'
import s                    from './Favourites.module.scss'

import { fetchGetFavourites } from '../../../redux/voting/asyncActions'
import { TFavouritesData }    from '../../../redux/voting/types'
import { TFavourites }        from './types'

import emptyImage        from '../../../assets/images/voting/empty_img.png'
import { VotingMessage } from '../VotingMessages'


const Favourites: React.FC<TFavourites> = ({ dispatch, favoritesData, infoMessage, status }) => {

	useEffect(() => {
		dispatch(fetchGetFavourites())
	}, [])

	const noItemsBoolean = (favoritesData.length === 0 && status === 'success')

	return (
		<>
			{ noItemsBoolean && <div className='noItemFound '><span>No item found</span></div> }
			<div className={ s.favourites }>
				{ favoritesData?.map((el: TFavouritesData, i) => {
					return (
						<div className={ s.favourites__img_wr } key={ el?.id }>
							<img src={ el?.image?.url ? el?.image?.url : emptyImage } alt='image'/>
						</div>
					)
				}) }
			</div>
			<div className={ s.voting__messages }>
				{ infoMessage.map((el, i) => <VotingMessage key={ i } { ...el }/>).reverse() }
			</div>
		</>
	)
}

export default Favourites
