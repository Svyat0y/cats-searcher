import React, { useEffect, useState } from 'react'
import s                              from '../Voting.module.scss'

import { NavButtons }   from '../NavButtons'
import { TVotingImage } from './types'

import { VotingMessage } from '../VotingMessages'
import Spinner           from '../../Spinner/Spinner'


const VotingImage: React.FC<TVotingImage> = (
	{ voteData, onFavourites, onLike, onUnlike, onFavourite, status, infoMessage }) => {
	const [ isLoading, setIsLoading ] = useState(true)

	useEffect(() => {
		setIsLoading(true)
		if (status === 'success') setTimeout(() => setIsLoading(false), 1000)
	}, [ voteData ])

	return (
		<>
			<div className={ s.voting__img_wr }>
				{ isLoading ? <Spinner/> : <img src={ voteData?.url } alt=''/> }
				<NavButtons
					imgObj={ voteData }
					onFavourites={ onFavourites }
					onLike={ onLike }
					onUnlike={ onUnlike }
					onFavourite={ onFavourite }
					status={ status }/>
			</div>
			<div className={ s.voting__messages }>
				{ infoMessage.map((el, i) => <VotingMessage key={ i } { ...el }/>) }
			</div>
		</>
	)
}

export default VotingImage
