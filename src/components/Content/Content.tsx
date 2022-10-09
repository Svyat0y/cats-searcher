import React                          from 'react'
import s                              from './Content.module.scss'
import { Route, Routes, useLocation } from 'react-router-dom'

import { Breeds, Preview, SearchComponent, SearchPanel, Voting } from '../../components'


const Content: React.FC = () => {
	const location = useLocation()

	return (
		<div className={ s.wrapper }>
			<div className={ s.wrapper__container }>
				{ location.pathname !== '/' && <SearchPanel/> }
				<Routes>
					<Route path='search' element={ <SearchComponent/> }/>
					<Route path='voting/*' element={ <Voting/> }/>
					<Route path='breeds/*' element={ <Breeds/> }/>
					<Route path='gallery' element={ <div>Gallery! (in development)</div> }/>
					<Route index element={ <Preview/> }/>
				</Routes>
			</div>
		</div>
	)
}

export default Content
