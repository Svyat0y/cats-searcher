import React, { useEffect } from 'react'
import { useNavigate }      from 'react-router'
import qs                   from 'qs'

import { useSelector }      from 'react-redux'
import { AppDispatch }      from '../../redux/store'
import { TSearchData }      from '../../redux/Search/types'
import { selectSearch }     from '../../redux/Search/selectors'
import { fetchSingleBreed } from '../../redux/Breeds/asyncActions'

import { SkeletonLoader }     from '../common'
import { fetchSearch }        from '../../redux/Search/asyncActions'
import { setIsSearchMounted } from '../../redux/Search/slice'


type TSearchedItems = {
	dispatch: AppDispatch
}

const SearchedItems: React.FC<TSearchedItems> = ({ dispatch }) => {
	const { searchData, status, isSearchMounted } = useSelector(selectSearch)
	const navigate = useNavigate()
	const emptyData = searchData?.length === 0

	useEffect(() => {
		dispatch(setIsSearchMounted(true))
		if (!isSearchMounted) {
			if (window.location.search) {
				const params: any = qs.parse(window.location.search.slice(1))
				dispatch(fetchSearch({ value: params.q, limit: params.limit }))
			}
		}
	}, [])

	const onClickBreedName = (breedId: string, name: string) => {
		const queryString = qs.stringify({
			breed_id: breedId,
			breed_name: name,
		})
		dispatch(fetchSingleBreed(breedId))
		navigate(`description?${ queryString }`)
	}

	const renderData = () => (
		searchData && searchData[0]
			? <div className='items'>
				{
					searchData?.map((el: TSearchData) => {
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
			: <div className='noItemFound'><span>No breed found.</span></div>
	)

	return (
		<>
			{
				emptyData && status === 'success' &&
				<div className='noItemFound'>Nothing found.</div>
			}
			{
				status === 'pending'
					? <SkeletonLoader count={ 5 }/>
					: renderData()
			}
		</>
	)
}

export default SearchedItems