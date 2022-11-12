import React           from 'react'
import { TSearchData } from '../../redux/Search/types'
import { useLocation } from 'react-router-dom'


type TItems = {
	data: TSearchData[] | null
	onClickBreedName: (breedId: string, name: string) => void
}

const Items: React.FC<TItems> = ({ data, onClickBreedName }) => {
	const location = useLocation()
	const locGallery = location.pathname.includes('gallery')

	return (
		<div className='items'>
			{
				data?.map((el: TSearchData) => {
					return (
						el
							? <div className='itemsImg_wr' key={ el.id }>
								<img src={ el.url } alt='image'/>
								{
									!locGallery && <button
										className={ 'hoverBtn ' }
										onClick={ () => onClickBreedName(el.breedId, el.name) }>
										{ el.name }
									</button>
								}
							</div>
							: ''
					)
				})
			}
		</div>
	)
}

export default Items