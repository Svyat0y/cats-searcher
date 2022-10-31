import React, { useEffect, useState } from 'react'
import s                              from '../Voting.module.scss'
import { TVotingImage }               from './types'

import { fetchVoteImg } from '../../../redux/voting/asyncActions'
import { setActiveBtn } from '../../../redux/voting/slice'

import Spinner                       from '../../common/Spinner/Spinner'
import { NavButtons, VotingMessage } from '../index'


const VotingImage: React.FC<TVotingImage> = (
	{ voteData, onFavourites, status, infoMessage, dispatch }) => {
	const [ isLoading, setIsLoading ] = useState(true)

	useEffect(() => {
		dispatch(setActiveBtn('Voting'))
	}, [])

	useEffect(() => {
		setIsLoading(true)

		let timeoutId: ReturnType<typeof setTimeout>
		if (status === 'success') timeoutId = setTimeout(() => setIsLoading(false), 1000)

		return () => clearTimeout(timeoutId)
	}, [ voteData ])

	useEffect(() => {
		dispatch(fetchVoteImg())
	}, [])

	return (
		<>
			<div className={ s.content__img_wr }>
				{ isLoading ? <Spinner/> : <img src={ voteData?.url } alt=''/> }
				<NavButtons
					imgObj={ voteData }
					onFavourites={ onFavourites }
					status={ status }/>
			</div>
			<div className={ s.content__messages }>
				{ infoMessage.map((el, i) => <VotingMessage key={ i } { ...el }/>) }
			</div>
		</>
	)
}

export default VotingImage
