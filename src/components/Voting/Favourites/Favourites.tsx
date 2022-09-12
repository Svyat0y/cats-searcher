import React, { useEffect, useState } from 'react'
import s                              from '../Voting.module.scss'

import { fetchGetFavourites } from '../../../redux/voting/asyncActions'
import { TFavouritesData }    from '../../../redux/voting/types'
import { TFavourites }        from './types'

import { VotingMessage } from '../VotingMessages'
import Spinner           from '../../Spinner/Spinner'

import emptyImage from '../../../assets/images/voting/empty_img.png'


const Favourites: React.FC<TFavourites> = ({ dispatch, favoritesData, infoMessage, status }) => {
	const [ isLoading, setIsLoading ] = useState(true)

	useEffect(() => {
		dispatch(fetchGetFavourites())
	}, [])

	useEffect(() => {
		setIsLoading(true)
		if (status === 'success') setTimeout(() => setIsLoading(false), 1000)

	}, [ favoritesData, status ])

	const noItemsBoolean = (favoritesData.length === 0 && status === 'success')

	if (isLoading) return <Spinner/>

	return (
		<>
			{ noItemsBoolean && <div className='noItemFound '><span>No item found</span></div> }
			<div className={ s.voting__items }>
				{ favoritesData?.map((el: TFavouritesData, i) => {
					return (
						<div className={ s.voting__itemsImg_wr } key={ el?.id }>
							<img src={ el?.image?.url ? el?.image?.url : emptyImage } alt='image'/>
						</div>
					)
				}) }
			</div>
			<div className={ s.voting__messages }>
				{ infoMessage.map((el, i) => <VotingMessage key={ i } { ...el }/>).reverse() }
			</div>
		</>
	)
}

export default Favourites
