import { FC }            from 'react'
import { Route, Routes } from 'react-router-dom'

import ContentWrapperLayout                                                   from './ContentWrapperLayout'
import { Breeds, Gallery, Preview, SearchComponent, SingleBreedInfo, Voting } from '../../index'


const ContentWrapper: FC = () => {

	return (
		<Routes>
			<Route path='/*' element={ <ContentWrapperLayout/> }>
				<Route index element={ <Preview/> }/>
				<Route path='voting/*' element={ <Voting/> }/>
				<Route path='breeds/*' element={ <Breeds/> }/>
				<Route path='search/*' element={ <SearchComponent/> }/>
				<Route path='description' element={ <SingleBreedInfo/> }/>
				<Route path='gallery/*' element={ <Gallery/> }/>
			</Route>
		</Routes>
	)
}

export default ContentWrapper