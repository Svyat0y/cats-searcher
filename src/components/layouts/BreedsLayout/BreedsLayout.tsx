import React      from 'react'
import { Outlet } from 'react-router-dom'

import { ContentHeader } from '../../common'
import ContentBody       from '../ContentBody/ContentBody'


const BreedsLayout = () => {
	return (
		<ContentBody>
			<ContentHeader/>
			<Outlet/>
		</ContentBody>
	)
}

export default BreedsLayout