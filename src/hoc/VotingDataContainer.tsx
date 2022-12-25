import { FC }      from 'react'
import { TVoting } from '../components/Voting/types'

import { useSelector }    from 'react-redux'
import { useAppDispatch } from '../redux/store'
import { selectVoting }   from '../redux/voting/selectors'


const VotingDataContainer = (Component: FC<TVoting>) => () => {
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
	const likesData = { dispatch, data: likeData, page: likePage, status }
	const dislikesData = { dispatch, unlikeData }

	return (
		<Component
			voteImgData={ voteImgData } favData={ favData } likesData={ likesData } dislikesData={ dislikesData }/>
	)
}

export default VotingDataContainer