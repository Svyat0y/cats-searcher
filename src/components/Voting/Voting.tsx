import React, { useEffect }           from 'react'
import s                              from './Voting.module.scss'
import { Route, Routes, useLocation } from 'react-router-dom'

import { Search }             from '../Search'
import { VotingImage }        from './VotingImage'
import { BackButton, Button } from '../common/Buttons'
import { Likes }              from './Likes'
import { Favourites }         from './Favourites'
import { Dislikes }           from './Dislikes'


import { useSelector }                                   from 'react-redux'
import { useAppDispatch }                                from '../../redux/store'
import { selectVoting }                                  from '../../redux/voting/selectors'
import { fetchActionFavourite, fetchVote, fetchVoteImg } from '../../redux/voting/asyncActions'
import { TDataObj }                                      from '../../redux/voting/types'


const Voting: React.FC = () => {
	const location = useLocation()
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
		activeButton
	} = useSelector(selectVoting)

	const locVoting = location.pathname.includes('voting')

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
			<Search/>
			<div className={ s.voting__body }>
				<div className='breadCrumbs'>
					<BackButton/>
					<Button
						breadCrumbs={ true }
						name={ activeButton }
						isActive={ locVoting }/>
				</div>
				<Routes>
					<Route
						path={ '/*' } element={ <VotingImage
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
						path={ '/likes' }
						element={ <Likes
							dispatch={ dispatch }
							likeData={ likeData }
							likePage={ likePage }
							status={ status }/> }/>
					<Route
						path={ '/favourites' }
						element={ <Favourites
							dispatch={ dispatch }
							infoMessage={ infoMessage }
							favoritesData={ favoritesData }
							favPage={ favPage }
							status={ status }/> }/>
					<Route
						path={ '/dislikes' }
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
