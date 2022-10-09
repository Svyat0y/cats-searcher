import React, { useEffect } from 'react'
import { Route, Routes }    from 'react-router-dom'

import { useAppDispatch } from '../../redux/store'
import { setActiveBtn }   from '../../redux/voting/slice'

import { SingleBreedInfo } from '../../components'


const Breeds = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(setActiveBtn('Breeds'))
	}, [])

	return (
		<>
			<Routes>
				<Route path='desc' element={ <SingleBreedInfo/> }/>
			</Routes>
		</>
	)
}

export default Breeds