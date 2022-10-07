import React, { useEffect, useState } from 'react'
import { TFavoriteItem }              from './types'

import { TFavouritesData }    from '../../../redux/voting/types'
import { fetchDeleteFromFav } from '../../../redux/voting/asyncActions'

import emptyImage    from '../../../assets/images/voting/empty_img.webp'
import heartBgRedImg from '../../../assets/images/voting/heartBgRed.webp'

import { SmallSpinner } from '../../Spinner'


const FavoriteItem: React.FC<TFavoriteItem> = ({ el, status, dispatch }) => {
	const [ isFetching, setIsFetching ] = useState(false)

	useEffect(() => {
		if (status === 'success') setIsFetching(false)
	}, [ status ])

	const deleteFromFavourites = (obj: TFavouritesData) => {
		setIsFetching(true)
		if (obj) dispatch(fetchDeleteFromFav(obj))
	}

	return (
		<div className='itemsImg_wr' key={ el?.id }>
			<img src={ el?.image?.url ? el?.image?.url : emptyImage } alt='image'/>
			<button disabled={ isFetching } onClick={ () => deleteFromFavourites(el) }
					className='item__hoverIcon'>
				{
					isFetching
						? <SmallSpinner height={ 20 } width={ 40 } color='#FF868E'/>
						: <img src={ heartBgRedImg } alt=''/>
				}
			</button>
		</div>
	)
}

export default FavoriteItem
