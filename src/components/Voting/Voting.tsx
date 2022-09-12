import React, { useEffect } from 'react'
import s                    from './Voting.module.scss'
import { Route, Routes }    from 'react-router-dom'

import { Search }             from '../Search'
import { VotingImage }        from './VotingImage'
import { BackButton, Button } from '../common/Buttons'
import { Likes }              from './Likes'
import { Favourites }         from './Favourites'
import { Dislikes }           from './Dislikes'


import { useSelector }                             from 'react-redux'
import { useAppDispatch }                          from '../../redux/store'
import { selectVoting }                            from '../../redux/voting/selectors'
import { fetchFavourite, fetchVote, fetchVoteImg } from '../../redux/voting/asyncActions'
import { TDataObj }                                from '../../redux/voting/types'


const Voting: React.FC = () => {
	const dispatch = useAppDispatch()
	const { voteData, likeData, favoritesData, unlikeData, infoMessage, onFavourites, status } = useSelector(selectVoting)

	useEffect(() => {
		dispatch(fetchVoteImg())
	}, [])

	const onLike = (imgObj: TDataObj) => {
		dispatch(fetchVote([ imgObj, 1 ]))
	}

	const onUnlike = (imgObj: TDataObj) => {
		dispatch(fetchVote([ imgObj, 0 ]))
	}

	const onFavourite = (imgObj: TDataObj) => {
		dispatch(fetchFavourite(imgObj))
	}

	return (
		<div className={ s.voting }>
			<Search/>
			<div className={ s.voting__body }>
				<div className={ s.voting__breadCrumbs }>
					<BackButton/>
					<Button name='Voting'/>
				</div>
				<Routes>
					<Route path={ '/*' } element={ <VotingImage
						voteData={ voteData }
						onFavourites={ onFavourites }
						status={ status }
						onLike={ onLike }
						onUnlike={ onUnlike }
						onFavourite={ onFavourite }
						infoMessage={ infoMessage }
					/> }/>
					<Route path={ '/likes' } element={ <Likes dispatch={ dispatch } likeData={ likeData } status={ status }/> }/>
					<Route
						path={ '/favourites' }
						element={ <Favourites
							dispatch={ dispatch }
							infoMessage={ infoMessage }
							favoritesData={ favoritesData }
							status={ status }/> }/>
					<Route path={ '/dislikes' } element={ <Dislikes unlikeData={ unlikeData } status={ status }/> }/>
				</Routes>
			</div>
		</div>
	)
}

export default Voting
