import React, { useEffect } from 'react'
import { useNavigate }      from 'react-router'
import qs                   from 'qs'

import { useSelector }      from 'react-redux'
import { TSearchData }      from '../../redux/Search/types'
import { selectSearch }     from '../../redux/Search/selectors'
import { fetchSearch }      from '../../redux/Search/asyncActions'
import { fetchSingleBreed } from '../../redux/Breeds/asyncActions'

import { Spinner }     from '../Spinner'
import { AppDispatch } from '../../redux/store'


type TSearchedItems = {
	dispatch: AppDispatch
}

const SearchedItems: React.FC<TSearchedItems> = ({ dispatch }) => {
	const { searchData, status } = useSelector(selectSearch)
	const navigate = useNavigate()
	const emptyData = searchData.length === 0
	const params: any = qs.parse(window.location.search.slice(1))

	const onClickBreedName = (breedId: string, name: string) => {
		const queryString = qs.stringify({
			breed_id: breedId,
			breed_name: name,
		})
		dispatch(fetchSingleBreed(breedId))
		navigate(`/breeds/desc?${ queryString }`)
	}

	useEffect(() => {
		if (status === 'success') {
			if (window.location.search) {
				dispatch(fetchSearch(params.q))
			}
		}
	}, [ params.q ])

	return (
		<div>
			{ emptyData && status === 'success' &&
				<div className='noItemFound'>Nothing found, please enter another breed. Example: American, Balinese</div> }
			{
				status === 'pending'
					? <Spinner/>
					: <div className='items'>
						{
							searchData.map((el: TSearchData) => {
								return (
									<div className='itemsImg_wr' key={ el.id }>
										<img src={ el.url } alt='image'/>
										<button onClick={ () => onClickBreedName(el.breedId, el.name) }
												className='hoverBtn'> { el.name }</button>
									</div>
								)
							})
						}
					</div>
			}
		</div>
	)
}

export default SearchedItems