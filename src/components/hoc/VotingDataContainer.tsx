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
		isFavMounted,
		isLikesMounted,
		isDislikesMounted,
	} = useSelector(selectVoting)

	const voteImgData = { dispatch, voteData, onFavourites, infoMessage, status }
	const favData = { dispatch, infoMessage, favoritesData, isFavMounted, favPage, status }
	const likesData = { dispatch, likeData, likePage, isLikesMounted }
	const dislikesData = { dispatch, unlikeData, isDislikesMounted }

	return (
		<Component voteImgData={ voteImgData } favData={ favData } likesData={ likesData } dislikesData={ dislikesData }/>
	)
}

export default VotingDataContainer