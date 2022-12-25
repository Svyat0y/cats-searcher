import { FC }            from 'react'
import { Route, Routes } from 'react-router-dom'

import ContentWrapperLayout                                                   from './ContentWrapperLayout'
import { Breeds, Gallery, Preview, SearchComponent, SingleBreedInfo, Voting } from '../../index'
import ErrorBoundary                                                          from '../../shared/ErrorBoundary/ErrorBoundary'


const ContentWrapper: FC = () => {

	return (
		<Routes>
			<Route path='/*' element={ <ContentWrapperLayout/> }>
				<Route index element={ <Preview/> }/>
				<Route path='voting/*' element={ <Voting/> }/>
				<Route path='breeds/*' element={
					<ErrorBoundary>
						<Breeds/>
					</ErrorBoundary>
				}/>
				<Route path='search/*' element={
					<ErrorBoundary>
						<SearchComponent/>
					</ErrorBoundary>
				}/>
				<Route path='description' element={
					<ErrorBoundary>
						<SingleBreedInfo/>
					</ErrorBoundary>
				}/>
				<Route path='gallery/*' element={
					<ErrorBoundary>
						<Gallery/>
					</ErrorBoundary>
				}/>
			</Route>
		</Routes>
	)
}

export default ContentWrapper
