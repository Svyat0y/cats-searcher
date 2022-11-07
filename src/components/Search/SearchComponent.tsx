import React, { useEffect }                            from 'react'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'


import { useAppDispatch }                              from '../../redux/store'
import { setActiveBtn }                                from '../../redux/voting/slice'
import { setFilters, setSearchValue, setToSearchData } from '../../redux/Search/slice'
import { fetchSearchFromPanel }                        from '../../redux/Search/asyncActions'

import SearchLayout      from './SearchLayout'
import { SearchedItems } from '../../components'


const SearchComponent: React.FC = () => {
	const dispatch = useAppDispatch()
	const location = useLocation()
	const [ searchParams ] = useSearchParams()

	useEffect(() => {
		dispatch(setActiveBtn('Search'))

		return () => {
			dispatch(setToSearchData(null))
			dispatch(setSearchValue(''))
			dispatch(setFilters({
				value: 'All breeds',
				limit: '5',
				order: 'asc',
				page: 0
			}))
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
			dispatch(setSearchValue(valueParam))
			dispatch(fetchSearchFromPanel())
		}
	}, [ location.search ])

	return (
		<Routes>
			<Route path='/' element={ <SearchLayout/> }>
				<Route index element={ <SearchedItems dispatch={ dispatch }/> }/>
			</Route>
		</Routes>
	)
}

export default SearchComponent