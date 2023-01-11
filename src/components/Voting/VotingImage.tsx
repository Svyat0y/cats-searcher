import { FC, useEffect, useState } from 'react'
import s                           from './Voting.module.scss'
import { TVotingImage }            from './types'

import { fetchVoteImg } from '../../redux/voting/asyncActions'
import { setActiveBtn } from '../../redux/voting/slice'

import { NavButtons }              from './index'
import { ActionMessages, Spinner } from '../index'


const VotingImage: FC<TVotingImage> = (
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
			<div className={ s.imgWrapper }>
				{ isLoading ? <Spinner/> : <img className={ s.voteImage } src={ voteData?.url } alt=''/> }
				<NavButtons
					imgObj={ voteData }
					onFavourites={ onFavourites }
					status={ status }/>
			</div>
			<div className={ s.messages }>
				{ infoMessage.map((el, i) => <ActionMessages key={ i } { ...el }/>) }
			</div>
		</>
	)
}

export default VotingImage
