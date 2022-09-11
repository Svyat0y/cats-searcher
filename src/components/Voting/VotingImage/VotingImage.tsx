import React from 'react'
import s     from '../Voting.module.scss'

import { NavButtons }    from '../NavButtons'
import { TVotingImage }  from './types'
import { VotingMessage } from '../VotingMessages'


const VotingImage: React.FC<TVotingImage> = ({ voteData, onFavourites, onLike, onUnlike, onFavourite, status, infoMessage }) => {
	return (
		<>


			<div className={ s.voting__img_wr }>
				<img src={ voteData?.url } alt='image'/>
				<NavButtons
					imgObj={ voteData }
					onFavourites={ onFavourites }
					onLike={ onLike }
					onUnlike={ onUnlike }
					onFavourite={ onFavourite }
					status={ status }/>
			</div>
			<div className={ s.voting__messages }>
				{ infoMessage.map((el, i) => <VotingMessage key={ i } { ...el }/>).reverse() }
			</div>
		</>
	)
}

export default VotingImage
