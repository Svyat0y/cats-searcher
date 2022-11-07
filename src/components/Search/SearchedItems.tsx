import React               from 'react'
import qs                  from 'qs'
import { useNavigate }     from 'react-router'
import { useSearchParams } from 'react-router-dom'

import { useSelector }      from 'react-redux'
import { AppDispatch }      from '../../redux/store'
import { fetchSingleBreed } from '../../redux/Breeds/asyncActions'
import { selectSearch }     from '../../redux/Search/selectors'

import { Pagination, SkeletonLoader } from '../common'
import Items                          from './Items'


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
	const pageNumberForUI = filters.page + 1

	const onClickBreedName = (breedId: string, name: string) => {
		const queryString = qs.stringify({
			breed_id: breedId,
			breed_name: name,
		})
		dispatch(fetchSingleBreed(breedId))
		navigate(`/description?${ queryString }`)
	}

	const createParams = (value: string, limit: string, order: string, page: number) => {
		return qs.stringify({
			q: value,
			limit,
			order,
			page,
		})
	}

	const onClickNext = () => {
		setSearchParams(createParams(filters.value, filters.limit, filters.order, pageNumberForUI + 1))
	}
	const onClickPrev = () => {
		setSearchParams(createParams(filters.value, filters.limit, filters.order, pageNumberForUI - 1))
	}

	const renderPagination = () => (
		filters.page === 0 && lastPage
			? ''
			: <Pagination
				firstPage={ firstPage }
				lastPage={ lastPage }
				onClickNext={ onClickNext }
				onClickPrev={ onClickPrev }
			/>
	)

	if (status === 'pending') return <SkeletonLoader count={ 5 }/>

	return (
		<>
			{ emptyData && status === 'success' && <div className='noItemFound'>Nothing found.</div> }
			<Items data={ searchData } onClickBreedName={ onClickBreedName }/>
			{ (emptyData !== null && status === 'success') && renderPagination() }
		</>
	)
}

export default SearchedItems