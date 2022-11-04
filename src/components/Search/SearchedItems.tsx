import React               from 'react'
import qs                  from 'qs'
import { useNavigate }     from 'react-router'
import { useSearchParams } from 'react-router-dom'

import { useSelector }      from 'react-redux'
import { AppDispatch }      from '../../redux/store'
import { fetchSingleBreed } from '../../redux/Breeds/asyncActions'
import { selectSearch }     from '../../redux/Search/selectors'
import { setFilters }       from '../../redux/Search/slice'
import { TSearchData }      from '../../redux/Search/types'

import { Pagination, SkeletonLoader } from '../common'


type TSearchedItems = {
	dispatch: AppDispatch
}

const SearchedItems: React.FC<TSearchedItems> = ({ dispatch }) => {
	const navigate = useNavigate()
	const [ _, setSearchParams ] = useSearchParams()
	const { searchData, status, filters } = useSelector(selectSearch)
	const emptyData = searchData === null
	const firstPage = (filters.page - 1) < 0
	const lastPage = searchData && searchData.length < Number(filters.limit)

	const onClickBreedName = (breedId: string, name: string) => {
		const queryString = qs.stringify({
			breed_id: breedId,
			breed_name: name,
		})
		dispatch(fetchSingleBreed(breedId))
		navigate(`description?${ queryString }`)
	}

	const createParams = (value: string, limit: string, order: string, page: number) => {
		return qs.stringify({
			q: value,
			limit,
			order,
			page,
		})
	}

	const createNewFilters = (page?: number) => {
		return {
			value: filters.value,
			limit: filters.limit,
			order: filters.order,
			page
		}
	}

	const onClickNext = () => {
		setSearchParams(createParams(filters.value, filters.limit, filters.order, filters.page + 1))
		dispatch(setFilters(createNewFilters(filters.page + 1)))
	}
	const onClickPrev = () => {
		setSearchParams(createParams(filters.value, filters.limit, filters.order, filters.page - 1))
		dispatch(setFilters(createNewFilters(filters.page - 1)))
	}

	const renderData = () => (
		<>
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
		</>
	)

	const renderPagination = () => (
		filters.page === 0 && lastPage
			? ''
			: <Pagination
				firstPage={ firstPage }
				lastPage={ lastPage }
				onClickNext={ onClickNext }
				onClickPrev={ onClickPrev }/>
	)

	if (status === 'pending') return <SkeletonLoader count={ 5 }/>

	return (
		<>
			{
				emptyData && status === 'success' &&
				<div className='noItemFound'>Nothing found.</div>
			}
			<div className='items'>
				{ renderData() }
			</div>
			{ (!emptyData && status === 'success') && renderPagination() }
		</>
	)
}

export default SearchedItems