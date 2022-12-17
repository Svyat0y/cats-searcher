import React      from 'react'
import { Outlet } from 'react-router-dom'

import { ContentHeader } from '../common'
import ContentBody       from '../layouts/ContentBody/ContentBody'


const VotingLayout: React.FC = () => {

	return (
		<ContentBody>
			<ContentHeader/>
			<Outlet/>
		</ContentBody>
	)
}

export default VotingLayout