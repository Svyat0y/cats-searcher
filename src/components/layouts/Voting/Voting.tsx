import { FC, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { TVoting }       from '../../Voting/types'

import { useAppDispatch }  from '../../../redux/store'
import { setToSearchData } from '../../../redux/Search/slice'

import { Dislikes, Favourites, Likes, VotingImage } from '../../index'
import VotingLayout                                 from './VotingLayout'
import VotingDataContainer                          from '../../../hoc/VotingDataContainer'
import ErrorBoundary                                from '../../shared/ErrorBoundary/ErrorBoundary'


const Voting: FC<TVoting> = ({ voteImgData, favData, likesData, dislikesData }) => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		return () => {
			dispatch(setToSearchData(null))
		}
	}, [])

	return (
		<Routes>
			<Route path='/' element={ <VotingLayout/> }>
				<Route index element={
					<ErrorBoundary>
						<VotingImage { ...voteImgData }/>
					</ErrorBoundary>
				}/>
				<Route path='likes' element={
					<ErrorBoundary>
						<Likes { ...likesData }/>
					</ErrorBoundary>
				}/>
				<Route path='favourites' element={
					<ErrorBoundary>
						<Favourites { ...favData }/>
					</ErrorBoundary>
				}/>
				<Route path='dislikes' element={
					<ErrorBoundary>
						<Dislikes { ...dislikesData }/>
					</ErrorBoundary>
				}/>
			</Route>
		</Routes>
	)
}

export default VotingDataContainer(Voting)
