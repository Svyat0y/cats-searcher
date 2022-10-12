import React             from 'react'
import { Route, Routes } from 'react-router-dom'
import { TVoting }       from './types'

import { Dislikes, Favourites, Likes, VotingImage } from './index'
import VotingLayout                                 from './VotingLayout'
import VotingDataContainer                          from './VotingDataContainer'


const Voting: React.FC<TVoting> = ({ voteImgData, favData, likesData, dislikesData }) => {

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
