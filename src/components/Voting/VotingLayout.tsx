import React from 'react'
import s     from './Voting.module.scss'

import { BreadCrumbs } from '../common'
import { Outlet }      from 'react-router-dom'


const VotingLayout: React.FC = () => {
	return (
		<div className={ s.voting }>
			<div className={ s.voting__body }>
				<BreadCrumbs/>
				<Outlet/>
			</div>
		</div>
	)
}

export default VotingLayout