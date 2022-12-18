import React      from 'react'
import { Outlet } from 'react-router-dom'

import { ContentBody, ContentHeader } from '../../index'


const BreedsLayout = () => {
	return (
		<ContentBody>
			<ContentHeader/>
			<Outlet/>
		</ContentBody>
	)
}

export default BreedsLayout