import React, { useEffect } from 'react'
import { Route, Routes }    from 'react-router-dom'

import { useAppDispatch }                 from '../../redux/store'
import { setActiveBtn }                   from '../../redux/voting/slice'
import BreedLayout                        from './BreedLayout'
import { SearchedItems, SingleBreedInfo } from '../index'


const Breeds = () => {
	const dispatch = useAppDispatch()

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