import { FC }                      from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import {
	Breeds,
	Gallery,
	MainNavigation,
	Preview,
	SearchComponent,
	SingleBreedInfo,
	Voting
}                           from '../../index'
import ContentWrapperLayout from './ContentWrapperLayout'

import ErrorBoundary                                                                  from '../../shared/ErrorBoundary/ErrorBoundary'
import { InDesktopVisible, InMobileVisible, WithDisData, WithFavData, WithLikesData } from '../../../hoc'


const ContentWrapper: FC = () => {

	return (
		<Routes>
			<Route path='/' element={ <ContentWrapperLayout/> }>
				<Route index element={
					<>
						<InDesktopVisible>
							<Preview/>
						</InDesktopVisible>
						<InMobileVisible>
							<MainNavigation/>
						</InMobileVisible>
					</>
				}/>
				<Route path='likes/' element={ <ErrorBoundary> <WithLikesData/> </ErrorBoundary> }/>
				<Route path='favourites/' element={ <ErrorBoundary> <WithFavData/> </ErrorBoundary> }/>
				<Route path='dislikes/' element={ <ErrorBoundary> <WithDisData/> </ErrorBoundary> }/>
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
