import React, { useState } from 'react'
import s                   from './NavButtons.module.scss'
import { TNavButtons }     from './types'

import { HeartBtn, VoteDownBtn, VoteUpBtn } from './VotButtons'


const NavButtons: React.FC<TNavButtons> = ({ onLike, onUnlike, imgObj, onFavourite, onFavourites, status }) => {
	const [ btnName, setBtnName ] = useState('')
	const props = { status, imgObj, btnName, setBtnName }

	return (
		<div className={ s.voting__nav_buttons }>
			<VoteUpBtn onLike={ onLike } { ...props }/>
			<HeartBtn onFavourite={ onFavourite } onFavourites={ onFavourites } { ...props }/>
			<VoteDownBtn onUnlike={ onUnlike } { ...props }/>
		</div>
	)
}

export default NavButtons
