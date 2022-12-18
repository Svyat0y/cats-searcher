import { FC }     from 'react'
import { Outlet } from 'react-router-dom'

import { ContentBody, ContentHeader } from '../../index'


const SearchLayout: FC = () => {

	return (
		<ContentBody>
			<ContentHeader/>
			<Outlet/>
		</ContentBody>
	)
}

export default SearchLayout