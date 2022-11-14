import React, { useEffect, useState } from 'react'
import qs                             from 'qs'
import { useSearchParams }            from 'react-router-dom'
import { useNavigate }                from 'react-router'
import { setToSearchData }            from '../../redux/Search/slice'
import { TSearchData }                from '../../redux/Search/types'
import { fetchSingleBreed }           from '../../redux/Breeds/asyncActions'
import { TSearchedItems }             from './types'

import { Pagination, SkeletonLoader } from '../common'

import Item from './Item'


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

	const createParams = (value: string, limit: string, order: string, page: number, type: string) => {
		return qs.stringify({
			q: value,
			limit,
			order,
			page,
			type
		})
	}

	const onClickNext = () => {
		setSearchParams(createParams(filters.value, filters.limit, filters.order, pageNumberForUI + 1, filters.type))
	}
	const onClickPrev = () => {
		setSearchParams(createParams(filters.value, filters.limit, filters.order, pageNumberForUI - 1, filters.type))
	}

	if (status === 'pending') return <SkeletonLoader count={ 5 }/>

	return (
		<>
			{ emptyData && loaded && <div className='noItemFound'>Nothing found.</div> }
			<div className='items'>
				{
					data?.map((el: TSearchData) => {
						return (
							el
								? <Item onClickBreedName={ onClickBreedName } el={ el } dispatch={ dispatch }/>
								: ''
						)
					})
				}
			</div>
			{
				!lastPage && <Pagination
					firstPage={ firstPage }
					lastPage={ lastPage }
					onClickNext={ onClickNext }
					onClickPrev={ onClickPrev }
				/>
			}
		</>
	)
}

export default SearchedItems