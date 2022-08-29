import React             from 'react'
import s                 from './Content.module.scss'
import { Route, Routes } from 'react-router-dom'

import { Preview } from '../Preview'


const Content: React.FC = () => {
	return (
		<div className={ s.wrapper }>
			<div className={ s.wrapper__container }>
				<Routes>
					<Route path='' element={ <Preview/> }/>
				</Routes>
			</div>
		</div>
	)
}

export default Content
