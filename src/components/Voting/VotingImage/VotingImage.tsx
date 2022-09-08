import React from 'react'
import s     from '../Voting.module.scss'

import { NavButtons }   from '../NavButtons'
import { TVotingImage } from './types'


const VotingImage: React.FC<TVotingImage> = ({ voteData, favouriteData, onLike, onUnlike, onFavourite, status }) => {
	return (
		<div className={ s.voting__img_wr }>
			<img src={ voteData?.url } alt='image'/>
			<NavButtons
				imgObj={ voteData }
				favoriteData={ favouriteData }
				onLike={ onLike }
				onUnlike={ onUnlike }
				onFavourite={ onFavourite }
				status={ status }/>
		</div>
	)
}

export default VotingImage
