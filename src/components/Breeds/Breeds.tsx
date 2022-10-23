import React, { useEffect } from 'react'
import { Route, Routes }    from 'react-router-dom'

import { useAppDispatch } from '../../redux/store'
import { setActiveBtn }   from '../../redux/voting/slice'

import { SearchedItems, SingleBreedInfo } from '../index'
import BreedLayout                        from './BreedLayout'
import { fetchSearch }                    from '../../redux/Search/asyncActions'
import { useSelector }                    from 'react-redux'
import { selectBreeds }                   from '../../redux/Breeds/selectors'


const Breeds = () => {
	const dispatch = useAppDispatch()
	const { value, limit, order } = useSelector(selectBreeds)

	useEffect(() => {
		dispatch(setActiveBtn('Breeds'))
		dispatch(fetchSearch())
	}, [ value, limit, order ])

	return (
		<>
			<Routes>
				<Route path='/' element={ <BreedLayout/> }>
					<Route path='' element={ <SearchedItems dispatch={ dispatch }/> }/>
					<Route path='description' element={ <SingleBreedInfo/> }/>
				</Route>
			</Routes>
		</>
	)
}

export default Breeds