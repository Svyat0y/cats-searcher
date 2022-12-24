import { FC, useState } from 'react'
import s                from './NavButtons.module.scss'
import { TNavButtons }  from './types'

import { useAppDispatch }                  from '../../../redux/store'
import { TDataObj }                        from '../../../redux/voting/types'
import { fetchActionFavourite, fetchVote } from '../../../redux/voting/asyncActions'

import { HeartBtn, VoteDownBtn, VoteUpBtn } from './VoteButtons'


const NavButtons: FC<TNavButtons> = ({ imgObj, onFavourites, status }) => {
	const dispatch = useAppDispatch()
	const [ btnName, setBtnName ] = useState('')
	const props = { status, imgObj, btnName, setBtnName }

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
		<div className={ s.navButtons }>
			<VoteUpBtn onLike={ onLike } { ...props }/>
			<HeartBtn onFavourite={ onFavourite } onFavourites={ onFavourites } { ...props }/>
			<VoteDownBtn onUnlike={ onUnlike } { ...props }/>
		</div>
	)
}

export default NavButtons
