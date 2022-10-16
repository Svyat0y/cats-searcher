import React, { useEffect }           from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { useAppDispatch } from '../../redux/store'
import { setActiveBtn }   from '../../redux/voting/slice'
import { fetchSearch }    from '../../redux/Search/asyncActions'

import { SearchedItems, SingleBreedInfo } from '../index'
import BreedLayout                        from './BreedLayout'
import { useNavigate }                    from 'react-router'


const Breeds = () => {
	const dispatch = useAppDispatch()
	const location = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
		if (!location.search) {
			dispatch(fetchSearch({ value: 'All breeds', limit: '5' }))
			navigate('search?q=All breeds&limit=5')
		}
	}, [ location.search ])

	useEffect(() => {
		dispatch(setActiveBtn('Breeds'))
	}, [])

	return (
		<>
			<Routes>
				<Route path='/' element={ <BreedLayout/> }>
					<Route path='search' element={ <SearchedItems dispatch={ dispatch }/> }/>
					<Route path='description' element={ <SingleBreedInfo/> }/>
				</Route>
			</Routes>
		</>
	)
}

export default Breeds