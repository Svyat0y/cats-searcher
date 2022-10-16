import React             from 'react'
import { Route, Routes } from 'react-router-dom'

import { Breeds, Preview, SearchComponent, Voting } from '../../components'
import ContentLayout                                from './ContentLayout'


const Content: React.FC = () => {

	return (
		<Routes>
			<Route path='/' element={ <ContentLayout/> }>
				<Route index element={ <Preview/> }/>
				<Route path='voting/*' element={ <Voting/> }/>
				<Route path='breeds/*' element={ <Breeds/> }/>
				<Route path='search/*' element={ <SearchComponent/> }/>
				<Route path='gallery' element={ <div>Gallery! (in development)</div> }/>
			</Route>
		</Routes>
	)
}

export default Content
