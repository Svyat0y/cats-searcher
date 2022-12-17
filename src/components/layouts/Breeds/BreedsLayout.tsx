import React      from 'react'
import { Outlet } from 'react-router-dom'

import ContentBody   from '../ContentBody/ContentBody'
import ContentHeader from '../../shared/ContentHeader/ContentHeader'


const BreedsLayout = () => {
	return (
		<ContentBody>
			<ContentHeader/>
			<Outlet/>
		</ContentBody>
	)
}

export default BreedsLayout