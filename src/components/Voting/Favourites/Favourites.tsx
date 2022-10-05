import React, { useEffect, useState } from 'react'
import s                              from '../Voting.module.scss'

import { fetchGetFavourites }             from '../../../redux/voting/asyncActions'
import { TFavouritesData }                from '../../../redux/voting/types'
import { setNextFavPage, setPrevFavPage } from '../../../redux/voting/slice'
import { TFavourites }                    from './types'

import { VotingMessage } from '../VotingMessages'
import { Spinner }       from '../../Spinner'

import FavoriteItem from './FavoriteItem'
import { Button }   from '../../common/Buttons'


const Favourites: React.FC<TFavourites> = ({ dispatch, favoritesData, infoMessage, status, favPage }) => {
	const [ isLoading, setIsLoading ] = useState(true)
	const noItemsBoolean = (favoritesData.length === 0)
	const zeroPage = (favPage - 1) < 0
	const lastPage = favoritesData.length < 15

	useEffect(() => {
		setIsLoading(true)
		dispatch(fetchGetFavourites())
	}, [ favPage ])

	useEffect(() => {
		setTimeout(() => setIsLoading(false), 1000)
	}, [ favoritesData ])

	const onClickNext = () => {
		if (!lastPage) dispatch(setNextFavPage())
	}
	const onClickPrev = () => {
		if (!zeroPage) dispatch(setPrevFavPage())
	}

	return (
		<>
			{
				isLoading
					? <Spinner/>
					: <>
						{
							noItemsBoolean &&
							<div className='noItemFound'>
								<span>No item found.</span>
							</div>
						}
						{
							noItemsBoolean &&
							<div className='noItemFound'>
								<span>Please return to the previous page.</span>
							</div>
						}
						<div className={ s.voting__items }>
							{
								favoritesData?.map((el: TFavouritesData) =>
									<FavoriteItem
										key={ el?.id }
										el={ el }
										dispatch={ dispatch }
										status={ status }/>)
							}
						</div>
						{
							(favPage === 0 && lastPage)
								? ''
								: <div className={ `${ s.voting__pagination_wr } ${ s.pagination__favourites }` }>
									<div className={ s.prev }><Button disabled={ zeroPage } onclick={ onClickPrev } name='<<' linkTo=''/></div>
									<div className={ s.next }><Button disabled={ lastPage } onclick={ onClickNext } name='>>' linkTo=''/></div>
								</div>
						}
					</>
			}
			<div className={ s.voting__messages }>
				{ infoMessage.map((el, i) => <VotingMessage key={ i } { ...el }/>) }
			</div>
		</>
	)
}

export default Favourites
