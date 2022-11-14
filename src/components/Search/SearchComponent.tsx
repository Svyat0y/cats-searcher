import React, { useEffect }                            from 'react'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'


import { useAppDispatch }                                                from '../../redux/store'
import { setActiveBtn }                                                  from '../../redux/voting/slice'
import { setFilters, setIsLoadingData, setSearchValue, setToSearchData } from '../../redux/Search/slice'
import { fetchSearchFromPanel }                                          from '../../redux/Search/asyncActions'

import SearchLayout      from './SearchLayout'
import { SearchedItems } from '../../components'
import { useSelector }   from 'react-redux'
import { selectSearch }  from '../../redux/Search/selectors'


const SearchComponent: React.FC = () => {
	const dispatch = useAppDispatch()
	const location = useLocation()
	const [ searchParams ] = useSearchParams()

	const { searchData, status, filters, isLoadingData } = useSelector(selectSearch)

	const firstPage = filters.page === 0
	const lastPage = searchData && searchData.length < Number(filters.limit)
	const pageNumberForUI = filters.page + 1

	useEffect(() => {
		dispatch(setActiveBtn('Search'))

		return () => {
			dispatch(setFilters({
				value: 'All breeds',
				limit: '5',
				order: 'asc',
				page: 0
			}))
			dispatch(setSearchValue(''))
			dispatch(setToSearchData(null))
		}
	}, [])

	useEffect(() => {
		if (location.search) {
			const valueParam: string | null = searchParams.get('q')
			dispatch(setFilters({
				value: valueParam,
				limit: '5',
				order: 'asc',
				page: 0
			}))
			dispatch(setIsLoadingData(true))
			dispatch(setSearchValue(valueParam))
			dispatch(fetchSearchFromPanel())
		}
	}, [ location.search ])

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>
		if (searchData && searchData?.length >= 0) timeoutId = setTimeout(() => dispatch(setIsLoadingData(false)), 1000)

		return () => clearTimeout(timeoutId)
	}, [ searchData ])

	return (
		<Routes>
			<Route path='/' element={ <SearchLayout/> }>
				<Route index element={ <SearchedItems
					isLoadingData={ isLoadingData }
					dispatch={ dispatch }
					firstPage={ firstPage }
					lastPage={ lastPage }
					pageNumberForUI={ pageNumberForUI }
					filters={ filters }
					status={ status }
					data={ searchData }/> }/>
			</Route>
		</Routes>
	)
}

export default SearchComponent