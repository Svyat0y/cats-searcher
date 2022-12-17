import React, { useEffect } from 'react'
import { Route, Routes }    from 'react-router-dom'
import { TVoting }          from '../../Voting/types'

import { useAppDispatch }  from '../../../redux/store'
import { setToSearchData } from '../../../redux/Search/slice'

import { VotingImage }                 from '../../Voting'
import VotingLayout                    from './VotingLayout'
import VotingDataContainer             from '../../hoc/VotingDataContainer'
import { Dislikes, Favourites, Likes } from '../../index'


const Voting: React.FC<TVoting> = ({ voteImgData, favData, likesData, dislikesData }) => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		return () => {
			dispatch(setToSearchData(null))
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
