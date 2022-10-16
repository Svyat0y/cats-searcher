import React, { useEffect } from 'react'

import { useAppDispatch } from '../../redux/store'
import { setActiveBtn }   from '../../redux/voting/slice'

import { SearchedItems, SingleBreedInfo } from '../../components'
import { Route, Routes }                  from 'react-router-dom'
import SearchLayout                       from './SearchLayout'


const SearchComponent: React.FC = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(setActiveBtn('Search'))
	}, [])

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