import { FC, useEffect, useState }                     from 'react'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'

import { useSelector }                                                   from 'react-redux'
import { useAppDispatch }                                                from '../../../redux/store'
import { setActiveBtn }                                                  from '../../../redux/voting/slice'
import { setFilters, setIsLoadingData, setSearchValue, setToSearchData } from '../../../redux/Search/slice'
import { fetchSearchFromPanel }                                          from '../../../redux/Search/asyncActions'
import { selectSearch }                                                  from '../../../redux/Search/selectors'

import SearchLayout      from './SearchLayout'
import { SearchedItems } from '../../index'


const SearchComponent: FC = () => {
	const dispatch = useAppDispatch()
	const location = useLocation()
	const [ isMounted, setIsMounted ] = useState(false)
	const [ searchParams ] = useSearchParams()

	const { searchData, status, breedFilters, isLoadingData } = useSelector(selectSearch)

	const firstPage = breedFilters.page === 0
	const lastPage = searchData && searchData.length < Number(breedFilters.limit) || false
	const pageNumberForUI = breedFilters.page + 1

	useEffect(() => {
		dispatch(setActiveBtn('Search'))
		setIsMounted(true)

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
		if (isMounted) {
			if (location.search) {
				const valueParam: string | null = searchParams.get('q')
				dispatch(setFilters({
					value: valueParam,
					limit: '5',
					order: 'asc',
					page: 0
				}))
				dispatch(setSearchValue(valueParam))
				dispatch(fetchSearchFromPanel())
			}
		}
	}, [ location.search, isMounted ])

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>
		if (searchData && searchData?.length >= 0) timeoutId = setTimeout(() => dispatch(setIsLoadingData(false)), 1000)

		return () => clearTimeout(timeoutId)
	}, [ searchData ])

	return (
		<Routes>
			<Route path='/' element={ <SearchLayout/> }>
				<Route index element={
					<SearchedItems
						isLoadingData={ isLoadingData }
						dispatch={ dispatch }
						firstPage={ firstPage }
						lastPage={ lastPage }
						pageNumberForUI={ pageNumberForUI }
						filters={ breedFilters }
						status={ status }
						data={ searchData }/>
				}/>
			</Route>
		</Routes>
	)
}

export default SearchComponent