import React, { useEffect, useState } from 'react'
import { TFavoriteItem }              from './types'

import { TData }              from '../../redux/voting/types'
import { fetchDeleteFromFav } from '../../redux/voting/asyncActions'

import emptyImage    from '../../assets/images/common/noImg.svg'
import heartBgRedImg from '../../assets/images/common/heartBgRed.webp'

import { SmallSpinner } from '../Ui'


const OnFavItem: React.FC<TFavoriteItem> = ({ el, status, dispatch }) => {
	const [ isFetching, setIsFetching ] = useState(false)

	useEffect(() => {
		if (status !== 'pending') setIsFetching(false)
	}, [ status ])

	const deleteFromFavourites = (obj: TData) => {
		setIsFetching(true)
		obj && dispatch && dispatch(fetchDeleteFromFav(obj))
	}

	return (
		<div className='itemsImg_wr' key={ el?.id }>
			<img src={ el?.image?.url ? el?.image?.url : emptyImage } alt='image'/>
			<button
				disabled={ isFetching }
				onClick={ () => deleteFromFavourites(el) }
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

export default OnFavItem
