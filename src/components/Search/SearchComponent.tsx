import React, { useEffect }                            from 'react'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'


import { useAppDispatch } from '../../redux/store'
import { setActiveBtn }   from '../../redux/voting/slice'
import { setSearchValue } from '../../redux/Search/slice'
import { setToValue }     from '../../redux/Breeds/slice'
import { fetchSearch }    from '../../redux/Search/asyncActions'

import SearchLayout                       from './SearchLayout'
import { SearchedItems, SingleBreedInfo } from '../../components'


const SearchComponent: React.FC = () => {
	const dispatch = useAppDispatch()
	const location = useLocation()
	const [ searchParams, setSearchParams ] = useSearchParams()

	useEffect(() => {
		dispatch(setActiveBtn('Search'))

		return () => {
			dispatch(setSearchValue(''))
			dispatch(setToValue('All breeds'))
		}
	}, [])

	useEffect(() => {
		if (location.search) {
			const valueParam: any = searchParams.get('q')
			dispatch(setToValue(valueParam))
			dispatch(fetchSearch())
		}
	}, [ location.search ])

	return (
		<Routes>
			<Route path='/' element={ <SearchLayout/> }>
				<Route index element={ <SearchedItems dispatch={ dispatch }/> }/>
				<Route path='description' element={ <SingleBreedInfo/> }/>
			</Route>
		</Routes>
	)
}

export default SearchComponent