import { FC, memo, useEffect, useLayoutEffect, useState } from 'react'
import { useSearchParams }                                from 'react-router-dom'
import qs                                                 from 'qs'
import { TSearchedItems }                                 from './types'

import { useNavigate }                       from 'react-router'
import { setIsLoadingData, setToSearchData } from '../../../redux/Search/slice'
import { fetchSingleBreed }                  from '../../../redux/Breeds/asyncActions'
import { TSearchData }                       from '../../../redux/Search/types'

import Item                                        from './Item'
import { NoItemFound, Pagination, SkeletonLoader } from '../../index'


const SearchedItems: FC<TSearchedItems> = memo((
	{
		dispatch,
		data,
		firstPage,
		lastPage,
		status,
		filters,
		pageNumberForUI,
		onFavourites,
		isLoadingData
	}) => {
	const navigate = useNavigate()
	const [ loaded, setLoaded ] = useState(false)
	const [ _, setSearchParams ] = useSearchParams()
	const emptyData = data === null

	useLayoutEffect(() => {
		dispatch(setIsLoadingData(true))
	}, [ filters.page ])

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

	if (isLoadingData) return <SkeletonLoader count={ 5 }/>

	return (
		<>
			{ emptyData && loaded && <NoItemFound/> }
			<div className='items'>
				{
					data?.map((el: TSearchData) => {
						return (
							el
								? <Item
									status={ status }
									key={ el.id }
									onClickBreedName={ onClickBreedName }
									el={ el }
									dispatch={ dispatch }
									onFavourites={ onFavourites }/>
								: ''
						)
					})
				}
			</div>
			{
				!lastPage && <Pagination
					page={ pageNumberForUI }
					firstPage={ firstPage }
					lastPage={ lastPage }
					onClickNext={ onClickNext }
					onClickPrev={ onClickPrev }
				/>
			}
		</>
	)
})

export default SearchedItems