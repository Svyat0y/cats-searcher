import React           from 'react'
import s               from './NavButtons.module.scss'
import { TNavButtons } from './types'

import VoteUpBtn   from './VotButtons/VoteUpBtn'
import HeartBtn    from './VotButtons/HeartBtn'
import VoteDownBtn from './VotButtons/VoteDownBtn'


const NavButtons: React.FC<TNavButtons> = ({ onLike, onUnlike, imgObj, onFavourite, onFavourites, status }) => {

	return (
		<div className={ s.voting__nav_buttons }>
			<VoteUpBtn onLike={ onLike } imgObj={ imgObj } status={ status }/>
			<HeartBtn onFavourite={ onFavourite } imgObj={ imgObj } status={ status } onFavourites={ onFavourites }/>
			<VoteDownBtn onUnlike={ onUnlike } imgObj={ imgObj } status={ status }/>
		</div>
	)
}

export default NavButtons
