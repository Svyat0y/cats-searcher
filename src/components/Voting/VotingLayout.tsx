import React      from 'react'
import { Outlet } from 'react-router-dom'

import ContentBody   from '../layouts/ContentBody/ContentBody'
import ContentHeader from '../shared/ContentHeader/ContentHeader'


const VotingLayout: React.FC = () => {

	return (
		<ContentBody>
			<ContentHeader/>
			<Outlet/>
		</ContentBody>
	)
}

export default VotingLayout