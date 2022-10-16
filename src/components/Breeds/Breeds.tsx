import React, { useEffect }                                                from 'react'
import { createSearchParams, Route, Routes, useLocation, useSearchParams } from 'react-router-dom'

import { useAppDispatch } from '../../redux/store'
import { setActiveBtn }   from '../../redux/voting/slice'
import { fetchSearch }    from '../../redux/Search/asyncActions'

import { SearchedItems, SingleBreedInfo } from '../index'
import BreedLayout                        from './BreedLayout'


const Breeds = () => {
	const dispatch = useAppDispatch()
	const location = useLocation()

	const [ , setSearchParams ] = useSearchParams()

	useEffect(() => {
		if (!location.search) {
			setSearchParams(
				createSearchParams({ q: 'All breeds', limit: '5' })
			)
			dispatch(fetchSearch({ value: 'All breeds', limit: '5' }))
		}
	}, [ location.search ])

	useEffect(() => {
		dispatch(setActiveBtn('Breeds'))
	}, [])

	return (
		<>
			<Routes>
				<Route path='/' element={ <BreedLayout/> }>
					<Route index element={ <SearchedItems dispatch={ dispatch }/> }/>
					<Route path='description' element={ <SingleBreedInfo/> }/>
				</Route>
			</Routes>
		</>
	)
}

export default Breeds