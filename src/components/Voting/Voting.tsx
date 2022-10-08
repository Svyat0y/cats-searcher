import React, { useEffect } from 'react'
import s                    from './Voting.module.scss'
import { Route, Routes }    from 'react-router-dom'

import { useSelector }                                   from 'react-redux'
import { useAppDispatch }                                from '../../redux/store'
import { selectVoting }                                  from '../../redux/voting/selectors'
import { fetchActionFavourite, fetchVote, fetchVoteImg } from '../../redux/voting/asyncActions'
import { TDataObj }                                      from '../../redux/voting/types'

import { VotingImage } from './VotingImage'
import { Likes }       from './Likes'
import { Favourites }  from './Favourites'
import { Dislikes }    from './Dislikes'
import { BreadCrumbs } from '../BreadCrumbs'


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
	} = useSelector(selectVoting)

	useEffect(() => {
		const promise = dispatch(fetchVoteImg())
		return () => promise.abort()
	}, [])

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
		<div className={ s.voting }>
			<div className={ s.voting__body }>
				<BreadCrumbs/>
				<Routes>
					<Route
						path={ '/' } element={ <VotingImage
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
						path={ 'likes' }
						element={ <Likes
							dispatch={ dispatch }
							likeData={ likeData }
							likePage={ likePage }
							status={ status }/> }/>
					<Route
						path={ 'favourites' }
						element={ <Favourites
							dispatch={ dispatch }
							infoMessage={ infoMessage }
							favoritesData={ favoritesData }
							favPage={ favPage }
							status={ status }/> }/>
					<Route
						path={ 'dislikes' }
						element={ <Dislikes
							dispatch={ dispatch }
							unlikeData={ unlikeData }
							status={ status }/> }/>
				</Routes>
			</div>
		</div>
	)
}

export default Voting
