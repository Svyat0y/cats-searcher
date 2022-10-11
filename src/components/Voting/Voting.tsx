import React             from 'react'
import { Route, Routes } from 'react-router-dom'

import { useSelector }                     from 'react-redux'
import { useAppDispatch }                  from '../../redux/store'
import { selectVoting }                    from '../../redux/voting/selectors'
import { fetchActionFavourite, fetchVote } from '../../redux/voting/asyncActions'
import { TDataObj }                        from '../../redux/voting/types'

import { Dislikes, Favourites, Likes, VotingImage } from './index'
import VotingLayout                                 from './VotingLayout'


const Voting: React.FC = () => {
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

	const onLike = (imgObj: TDataObj) => {
		if (status === 'success') dispatch(fetchVote([ imgObj, 1 ]))
	}

	const onUnlike = (imgObj: TDataObj) => {
		if (status === 'success') dispatch(fetchVote([ imgObj, 0 ]))
	}

	const onFavourite = (imgObj: TDataObj) => {
		if (status === 'success') dispatch(fetchActionFavourite(imgObj))
	}

	return (
		<Routes>
			<Route path='/' element={ <VotingLayout/> }>
				<Route
					index element={ <VotingImage
					dispatch={ dispatch }
					voteData={ voteData }
					onFavourites={ onFavourites }
					status={ status }
					onLike={ onLike }
					onUnlike={ onUnlike }
					onFavourite={ onFavourite }
					infoMessage={ infoMessage }
				/> }/>
				<Route
					path='likes'
					element={ <Likes
						dispatch={ dispatch }
						likeData={ likeData }
						likePage={ likePage }
						isLikesMounted={ isLikesMounted }/> }/>
				<Route
					path='favourites'
					element={ <Favourites
						dispatch={ dispatch }
						infoMessage={ infoMessage }
						favoritesData={ favoritesData }
						favPage={ favPage }
						status={ status }
						isFavMounted={ isFavMounted }/> }/>
				<Route
					path='dislikes'
					element={ <Dislikes
						dispatch={ dispatch }
						unlikeData={ unlikeData }
						status={ status }
						isDislikesMounted={ isDislikesMounted }/> }/>
			</Route>
		</Routes>

	)
}

export default Voting
