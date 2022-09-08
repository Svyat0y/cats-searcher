import React, { useEffect } from 'react'
import s                    from './Voting.module.scss'
import { Route, Routes }    from 'react-router-dom'

import { Search }             from '../Search'
import { VotingImage }        from './VotingImage'
import { VotingMessage }      from './VotingMessages'
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
	const { voteData, likeData, unlikeData, infoMessage, favouriteData, status } = useSelector(selectVoting)

	useEffect(() => {
		const promise = dispatch(fetchVoteImg())
		return () => {
			promise.abort()
		}
	}, [ likeData, unlikeData ])

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
						favouriteData={ favouriteData }
						status={ status }
						onLike={ onLike }
						onUnlike={ onUnlike }
						onFavourite={ onFavourite }
					/> }/>
					<Route path={ '/likes' } element={ <Likes/> }/>
					<Route path={ '/favourites' } element={ <Favourites/> }/>
					<Route path={ '/dislikes' } element={ <Dislikes/> }/>
				</Routes>
				<div className={ s.voting__messages }>
					{ infoMessage.map((el, i) => <VotingMessage key={ i } { ...el }/>).reverse() }
				</div>
			</div>
		</div>
	)
}

export default Voting
