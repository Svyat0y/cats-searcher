import React, { useEffect, useState } from 'react'
import qs                             from 'qs'
import { useNavigate }                from 'react-router'
import { useSearchParams }            from 'react-router-dom'
import { AppDispatch }                from '../../redux/store'
import { fetchSingleBreed }           from '../../redux/Breeds/asyncActions'

import { Pagination, SkeletonLoader } from '../common'
import Items                          from './Items'
import { TFilters, TSearchData }      from '../../redux/Search/types'
import { setToSearchData }            from '../../redux/Search/slice'


type TSearchedItems = {
	data: TSearchData[] | null
	dispatch: AppDispatch
	firstPage: boolean
	lastPage: boolean | null
	status: string
	filters: TFilters
	pageNumberForUI: number
}

const SearchedItems: React.FC<TSearchedItems> = ({ dispatch, data, firstPage, lastPage, status, filters, pageNumberForUI }) => {
	const navigate = useNavigate()
	const [ loaded, setLoaded ] = useState(false)
	const [ _, setSearchParams ] = useSearchParams()
	const emptyData = data === null

	useEffect(() => {
		if (status === 'success') setTimeout(() => setLoaded(true), 0)

		return () => {
			dispatch(setToSearchData(null))
		}
	}, [])

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
			{ emptyData && loaded && <div className='noItemFound'>Nothing found.</div> }
			<Items data={ data } onClickBreedName={ onClickBreedName }/>
			{ (emptyData !== null && status === 'success') && renderPagination() }
		</>
	)
}

export default SearchedItems