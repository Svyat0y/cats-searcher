import React       from 'react'
import { TVoting } from '../Voting/types'

import { useSelector }    from 'react-redux'
import { useAppDispatch } from '../../redux/store'
import { selectVoting }   from '../../redux/voting/selectors'


const VotingDataContainer = (Component: React.FC<TVoting>) => () => {
	const dispatch = useAppDispatch()

	const {
		voteData,
		likeData,
		favoritesData,
		unlikeData,
		infoMessage,
		onFavourites,
		status,
		likePage,
		favPage,
	} = useSelector(selectVoting)

	const voteImgData = { dispatch, voteData, onFavourites, infoMessage, status }
	const favData = { dispatch, infoMessage, data: favoritesData, page: favPage, status }
	const likesData = { dispatch, data: likeData, page: likePage }
	const dislikesData = { dispatch, unlikeData }

	return (
		<Component voteImgData={ voteImgData } favData={ favData } likesData={ likesData } dislikesData={ dislikesData }/>
	)
}

export default VotingDataContainer