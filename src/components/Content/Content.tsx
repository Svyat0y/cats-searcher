import React             from 'react'
import s                 from './Content.module.scss'
import { Route, Routes } from 'react-router-dom'

import { Preview } from '../Preview'
import { Voting }  from '../Voting'


const Content: React.FC = () => {
	return (
		<div className={ s.wrapper }>
			<div className={ s.wrapper__container }>
				<Routes>
					<Route path='/' element={ <Preview/> }/>
					<Route path='/voting' element={ <Voting/> }/>
				</Routes>
			</div>
		</div>
	)
}

export default Content
