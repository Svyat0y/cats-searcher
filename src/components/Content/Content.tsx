import React             from 'react'
import { Route, Routes } from 'react-router-dom'

import ContentLayout                                                 from './ContentLayout'
import Gallery                                                       from '../Gallery/Gallery'
import { Breeds, Preview, SearchComponent, SingleBreedInfo, Voting } from '../../components'


const Content: React.FC = () => {

	return (
		<Routes>
			<Route path='/*' element={ <ContentLayout/> }>
				<Route index element={ <Preview/> }/>
				<Route path='voting/*' element={ <Voting/> }/>
				<Route path='breeds/*' element={ <Breeds/> }/>
				<Route path='search/*' element={ <SearchComponent/> }/>
				<Route path='description' element={ <SingleBreedInfo/> }/>
				<Route path='gallery' element={ <Gallery/> }/>
			</Route>
		</Routes>
	)
}

export default Content
