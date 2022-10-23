import React, { useEffect } from 'react'

import { useAppDispatch } from '../../redux/store'
import { setActiveBtn }   from '../../redux/voting/slice'

import { SearchedItems, SingleBreedInfo } from '../../components'
import { Route, Routes }                  from 'react-router-dom'
import SearchLayout                       from './SearchLayout'
import { useSelector }                    from 'react-redux'
import { selectBreeds }                   from '../../redux/Breeds/selectors'
import { fetchSearch }                    from '../../redux/Search/asyncActions'
import { setToValue }                     from '../../redux/Breeds/slice'
import { setSearchValue }                 from '../../redux/Search/slice'


const SearchComponent: React.FC = () => {
	const dispatch = useAppDispatch()
	const { value } = useSelector(selectBreeds)

	useEffect(() => {
		dispatch(setActiveBtn('Search'))
		dispatch(fetchSearch())

		return () => {
			dispatch(setSearchValue(''))
			dispatch(setToValue('All breeds'))
		}
	}, [ value ])

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