import React             from 'react'
import s                 from './Content.module.scss'
import { Route, Routes } from 'react-router-dom'

import { Preview }                      from '../Preview'
import { Voting }                       from '../Voting'
import { SearchComponent, SearchPanel } from '../Search'
import Breeds                           from '../Breeds/Breeds'


const Content: React.FC = () => {
	return (
		<div className={ s.wrapper }>
			<div className={ s.wrapper__container }>
				<SearchPanel/>
				<Routes>
					<Route path='search' element={ <SearchComponent/> }/>
					<Route path='voting/*' element={ <Voting/> }/>
					<Route path='breeds/*' element={ <Breeds/> }/>
					<Route path='gallery' element={ <div>Gallery! (in development)</div> }/>
					<Route path='/' element={ <Preview/> }/>
				</Routes>
			</div>
		</div>
	)
}

export default Content
