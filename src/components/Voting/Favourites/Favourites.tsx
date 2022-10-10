import React, { useEffect, useState } from 'react'
import s                              from '../Voting.module.scss'

import { fetchGetFavourites } from '../../../redux/voting/asyncActions'
import { setActiveBtn }       from '../../../redux/voting/slice'
import { TFavourites }        from './types'

import { Spinner }       from '../../common'
import { VotingMessage } from '../index'
import FavItems          from './FavItems'


const Favourites: React.FC<TFavourites> = ({ dispatch, favoritesData, infoMessage, favPage }) => {
	const [ isLoading, setIsLoading ] = useState(true)

	useEffect(() => {
		setIsLoading(true)
		dispatch(setActiveBtn('Favourites'))
		dispatch(fetchGetFavourites())
	}, [ favPage ])

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>
		if (favoritesData && favoritesData?.length >= 0) timeoutId = setTimeout(() => setIsLoading(false), 1000)

		return () => clearTimeout(timeoutId)
	}, [ favoritesData ])

	return (
		<>
			{
				isLoading
					? <Spinner/>
					: <FavItems dispatch={ dispatch } favoritesData={ favoritesData } favPage={ favPage }/>
			}
			<div className={ s.content__messages }>
				{ infoMessage.map((el, i) => <VotingMessage key={ i } { ...el }/>) }
			</div>
		</>
	)
}

export default Favourites
