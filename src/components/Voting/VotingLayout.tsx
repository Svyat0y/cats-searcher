import React      from 'react'
import { Outlet } from 'react-router-dom'

import { ContentHeader } from '../common'


const VotingLayout: React.FC = () => {
	
	return (
		<div className='content'>
			<div className='content__body'>
				<ContentHeader/>
				<Outlet/>
			</div>
		</div>
	)
}

export default VotingLayout