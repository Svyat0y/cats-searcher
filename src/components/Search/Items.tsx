import React           from 'react'
import { TSearchData } from '../../redux/Search/types'


type TItems = {
	data: TSearchData[] | null,
	onClickBreedName: (breedId: string, name: string) => void
}

const Items: React.FC<TItems> = ({ data, onClickBreedName }) => {
	return (
		<div className='items'>
			{
				data?.map((el: TSearchData) => {
					return (
						el
							? <div className='itemsImg_wr' key={ el.id }>
								<img src={ el.url } alt='image'/>
								<button className='hoverBtn' onClick={ () => onClickBreedName(el.breedId, el.name) }>
									{ el.name }
								</button>
							</div>
							: ''
					)
				})
			}
		</div>
	)
}

export default Items