import React, { useState } from 'react'
import s                   from './NavButtons.module.scss'
import { TNavButtons }     from './types'

import { HeartBtn, VoteDownBtn, VoteUpBtn }                         from './VotButtons'
import { TDataObj }                                                 from '../../../redux/voting/types'
import { fetchActionFavourite, fetchVote }                          from '../../../redux/voting/asyncActions'
import { useAppDispatch }                                           from '../../../redux/store'
import { setIsDislikesMounted, setIsFavMounted, setIsLikesMounted } from '../../../redux/voting/slice'


const NavButtons: React.FC<TNavButtons> = ({ imgObj, onFavourites, status }) => {
	const dispatch = useAppDispatch()
	const [ btnName, setBtnName ] = useState('')
	const props = { status, imgObj, btnName, setBtnName }

	const onLike = (imgObj: TDataObj) => {
		if (status === 'success') dispatch(fetchVote([ imgObj, 1 ]))
		dispatch(setIsLikesMounted(false))
	}

	const onUnlike = (imgObj: TDataObj) => {
		if (status === 'success') dispatch(fetchVote([ imgObj, 0 ]))
		dispatch(setIsDislikesMounted(false))
	}

	const onFavourite = (imgObj: TDataObj) => {
		if (status === 'success') dispatch(fetchActionFavourite(imgObj))
		dispatch(setIsFavMounted(false))
	}

	return (
		<div className={ s.voting__nav_buttons }>
			<VoteUpBtn onLike={ onLike } { ...props }/>
			<HeartBtn onFavourite={ onFavourite } onFavourites={ onFavourites } { ...props }/>
			<VoteDownBtn onUnlike={ onUnlike } { ...props }/>
		</div>
	)
}

export default NavButtons
