import React      from 'react'
import { Outlet } from 'react-router-dom'

import { ContentBody, ContentHeader } from '../../index'


const SearchLayout = () => {

	return (
		<ContentBody>
			<ContentHeader/>
			<Outlet/>
		</ContentBody>
	)
}

export default SearchLayout