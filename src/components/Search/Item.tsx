import React, { useState }      from 'react'
import { SmallSpinner }         from '../common'
import heartAdded               from '../../assets/images/voting/heartBgRed.webp'
import heartNoAdded             from '../../assets/images/voting/heartBorderRed.webp'
import { useLocation }          from 'react-router-dom'
import { TItem }                from './types'
import { fetchActionFavourite } from '../../redux/voting/asyncActions'


const Item: React.FC<TItem> = ({ onClickBreedName, el, dispatch }) => {
	const [ isFetching, setIsFetching ] = useState(false)
	const location = useLocation()

	console.log(el)

	const locGallery = location.pathname.includes('gallery')

	const made = false

	return (
		<div className='itemsImg_wr' key={ el.id }>
			<img src={ el.url } alt='image'/>
			{
				!locGallery &&
				<button
					className={ 'hoverBtn ' }
					onClick={ () => onClickBreedName(el.breedId, el.name) }>
					{ el.name }
				</button>
			}
			{
				locGallery &&
				<button
					disabled={ false }
					onClick={ () => dispatch((fetchActionFavourite(el))) }
					className='item__hoverIcon'>
					{
						isFetching
							? <SmallSpinner height={ 20 } width={ 40 } color='#FF868E'/>
							: <img src={ made ? heartAdded : heartNoAdded } alt='icon'/>
					}
				</button>
			}
		</div>
	)
}

export default Item