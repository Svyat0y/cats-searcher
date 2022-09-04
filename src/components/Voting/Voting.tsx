import React, { useEffect } from 'react'
import s                    from './Voting.module.scss'

import { Search }             from '../Search'
import { BackButton, Button } from '../common/Buttons'
import NavButtons             from './NavButtons'
import VotingMessages         from './VotingMessages'


import { useSelector }             from 'react-redux'
import { useAppDispatch }          from '../../redux/store'
import { selectVoting }            from '../../redux/voting/selectors'
import { fetchVote, fetchVoteImg } from '../../redux/voting/asyncActions'
import { dataObj }                 from '../../redux/voting/types'


const Voting: React.FC = () => {
	const dispatch = useAppDispatch()
	const { voteData, likeData, unlikeData, infoLikes } = useSelector(selectVoting)

	useEffect(() => {
		const promise = dispatch(fetchVoteImg())
		return () => {
			promise.abort()
		}
	}, [ likeData, unlikeData ])

	const onLike = (imgObj: dataObj | null) => {
		dispatch(fetchVote([ imgObj, 1 ]))
	}

	const onUnlike = (imgObj: dataObj | null) => {
		dispatch(fetchVote([ imgObj, 0 ]))
	}

	return (
		<div className={ s.voting }>
			<Search/>
			<div className={ s.voting__body }>
				<div className={ s.voting__breadCrumbs }>
					<BackButton/>
					<Button name='Voting'/>
				</div>
				<div className={ s.voting__img_wr }>
					<img src={ voteData?.url } alt='image'/>
					<NavButtons imgObj={ voteData } onLike={ onLike } onUnlike={ onUnlike }/>
				</div>
				<div className={ s.voting__messages }>
					{ infoLikes && infoLikes.map((el, i) => <VotingMessages key={ i } { ...el }/>).reverse() }
				</div>
			</div>
		</div>
	)
}

export default Voting
