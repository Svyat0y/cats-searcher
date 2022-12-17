import React      from 'react'
import { Outlet } from 'react-router-dom'

import ContentHeader from '../../shared/ContentHeader/ContentHeader'
import ContentBody   from '../ContentBody/ContentBody'


const SearchLayout = () => {

	return (
		<ContentBody>
			<ContentHeader/>
			<Outlet/>
		</ContentBody>
	)
}

export default SearchLayout