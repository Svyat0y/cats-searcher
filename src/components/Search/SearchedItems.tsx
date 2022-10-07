import React, { useEffect } from 'react'
import { useNavigate }      from 'react-router'

import { useSelector }      from 'react-redux'
import { TSearchData }      from '../../redux/Search/types'
import { selectSearch }     from '../../redux/Search/selectors'
import { fetchSingleBreed } from '../../redux/Search/asyncActions'

import { Spinner }     from '../Spinner'
import { AppDispatch } from '../../redux/store'


type TSearchedItems = {
	dispatch: AppDispatch
}

const SearchedItems: React.FC<TSearchedItems> = ({ dispatch }) => {
	const { searchData, status } = useSelector(selectSearch)
	const navigate = useNavigate()
	const emptyData = searchData.length === 0

	const onClickBreedName = (breedId: string, name: string) => {
		dispatch(fetchSingleBreed(breedId))
		navigate(`/breedInfo?breed_name=${ name }`)
	}

	useEffect(() => {
		if (status === 'success' && searchData.length === 0) {
			navigate('/voting')
		}
	}, [])

	return (
		<div>
			{ emptyData && status === 'success' && <div className='noItemFound'>Nothing found, please enter another breed</div> }
			{
				status === 'pending'
					? <Spinner/>
					: <div className='items'>
						{
							searchData.map((el: TSearchData) => {
								return (
									<div className={ `${ 'itemsImg_wr' }` } key={ el.id }>
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