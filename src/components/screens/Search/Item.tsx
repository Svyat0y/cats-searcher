import { FC, useEffect, useState } from 'react'
import { useLocation }             from 'react-router-dom'
import { TItem }                   from './types'

import { fetchActionFavourite } from '../../../redux/voting/asyncActions'
import { TSearchData }          from '../../../redux/Search/types'

import { SmallSpinner } from '../../index'

import heartNoAdded from '../../../assets/images/common/heartBorderRed.webp'
import heartAdded   from '../../../assets/images/common/heartBgRed.webp'
import noImg        from '../../../assets/images/common/noImg.svg'


const Item: FC<TItem> = ({ onClickBreedName, el, dispatch, onFavourites, status }) => {
	const [ isFetching, setIsFetching ] = useState(false)
	const location = useLocation()
	const locGallery = location.pathname.includes('gallery')

	const imgInFavourites = onFavourites?.find(obj => obj?.id === el.id)

	const onAddToFavourites = (obj: TSearchData) => {
		if (!imgInFavourites) {
			setIsFetching(true)
			dispatch((fetchActionFavourite(obj)))
		}
	}

	useEffect(() => {
		if (status !== 'pending') setIsFetching(false)
	}, [ status ])


	return (
		<div className='items__imgWrapper'>
			<img src={ el.url ? el.url : noImg } alt='image'/>
			{
				!locGallery &&
				<button
					className={ 'hoverBtn ' }
					onClick={ () => onClickBreedName(el.breedId, el.name) }>
					{ el.name }
				</button>
			}
			{
				(locGallery && el.url) &&
				<button
					disabled={ false }
					onClick={ () => onAddToFavourites(el) }
					className='items__hoverIcon'>
					{
						isFetching
							? <SmallSpinner height={ 17 } width={ 40 } color='#FF868E'/>
							: <img src={ imgInFavourites ? heartAdded : heartNoAdded } alt='icon'/>
					}
				</button>
			}
		</div>
	)
}

export default Item