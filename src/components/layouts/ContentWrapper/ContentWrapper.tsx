import { FC }                      from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import { Breeds, Gallery, MainNavigation, Preview, SearchComponent, SingleBreedInfo, Voting } from '../../index'
import ContentWrapperLayout                                                                   from './ContentWrapperLayout'

import ErrorBoundary       from '../../shared/ErrorBoundary/ErrorBoundary'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import InDesktopVisible    from '../../../hoc/InDesktopVisible'
import InMobileVisible     from '../../../hoc/InMobileVisible'


const ContentWrapper: FC = () => {
	const viewportWidth = useWindowDimensions()

	console.log(viewportWidth)

	return (
		<Routes>
			<Route path='/' element={ <ContentWrapperLayout/> }>
				<Route index element={
					<>
						<InDesktopVisible><Preview/></InDesktopVisible>
						<InMobileVisible><MainNavigation/></InMobileVisible>
					</>
				}/>
				<Route path='voting/*' element={ <Voting/> }/>
				<Route path='breeds/*' element={ <ErrorBoundary> <Breeds/></ErrorBoundary> }/>
				<Route path='search/*' element={ <ErrorBoundary> <SearchComponent/> </ErrorBoundary> }/>
				<Route path='description' element={ <ErrorBoundary> <SingleBreedInfo/> </ErrorBoundary> }/>
				<Route path='gallery/*' element={ <ErrorBoundary> <Gallery/></ErrorBoundary> }/>
				<Route path='*' element={ <Navigate to={ '/' }/> }/>
			</Route>
		</Routes>
	)
}

export default ContentWrapper
