import React               from 'react'
import { Route, Routes }   from 'react-router-dom'
import { SingleBreedInfo } from '../SingleBreedInfo'


const Breeds = () => {
	return (
		<Routes>
			<Route path='desc' element={ <SingleBreedInfo/> }/>
		</Routes>
	)
}

export default Breeds