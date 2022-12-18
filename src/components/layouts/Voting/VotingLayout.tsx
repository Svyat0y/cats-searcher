import React      from 'react'
import { Outlet } from 'react-router-dom'

import { ContentBody, ContentHeader } from '../../index'


const VotingLayout: React.FC = () => {

	return (
		<ContentBody>
			<ContentHeader/>
			<Outlet/>
		</ContentBody>
	)
}

export default VotingLayout