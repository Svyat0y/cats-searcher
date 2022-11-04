import React, { useEffect } from 'react'
import { Route, Routes }    from 'react-router-dom'
import { TVoting }          from './types'

import VotingLayout                                 from './VotingLayout'
import VotingDataContainer                          from '../hoc/VotingDataContainer'
import { Dislikes, Favourites, Likes, VotingImage } from './index'
import { setToSearchData }                          from '../../redux/Search/slice'
import { useAppDispatch }                           from '../../redux/store'


const Voting: React.FC<TVoting> = ({ voteImgData, favData, likesData, dislikesData }) => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		return () => {
			dispatch(setToSearchData([]))
		}
	}, [])

	return (
		<Routes>
			<Route path='/' element={ <VotingLayout/> }>
				<Route index element={ <VotingImage { ...voteImgData }/> }/>
				<Route path='likes' element={ <Likes { ...likesData }/> }/>
				<Route path='favourites' element={ <Favourites { ...favData }/> }/>
				<Route path='dislikes' element={ <Dislikes { ...dislikesData }/> }/>
			</Route>
		</Routes>
	)
}

export default VotingDataContainer(Voting)
