import React, { useEffect, useState } from 'react'
import s                              from '../Voting.module.scss'

import { fetchGetFavourites } from '../../../redux/voting/asyncActions'
import { TFavouritesData }    from '../../../redux/voting/types'
import { TFavourites }        from './types'

import { VotingMessage } from '../VotingMessages'
import { Spinner }       from '../../Spinner'

import FavoriteItem from './FavoriteItem'


const Favourites: React.FC<TFavourites> = ({ dispatch, favoritesData, infoMessage, status }) => {
	const [ isLoading, setIsLoading ] = useState(true)
	const noItemsBoolean = (favoritesData.length === 0 && status === 'success')

	useEffect(() => {
		setIsLoading(true)
		dispatch(fetchGetFavourites()).then(() => setIsLoading(false))
	}, [])

	useEffect(() => {
		if (status === 'success') setTimeout(() => setIsLoading(false), 1000)
	}, [ favoritesData ])

	if (isLoading) return <Spinner/>

	return (
		<>
			{ noItemsBoolean && <div className='noItemFound '><span>No item found</span></div> }
			<div className={ s.voting__items }>
				{ favoritesData?.map((el: TFavouritesData) =>
					<FavoriteItem
						key={ el?.id }
						el={ el }
						dispatch={ dispatch }
						status={ status }/>) }
			</div>
			<div className={ s.voting__messages }>
				{ infoMessage.map((el, i) => <VotingMessage key={ i } { ...el }/>) }
			</div>
		</>
	)
}

export default Favourites
