import React, { useEffect, useState } from 'react'
import s                              from '../Voting.module.scss'

import { fetchDeleteFromFav, fetchGetFavourites } from '../../../redux/voting/asyncActions'
import { TFavouritesData }                        from '../../../redux/voting/types'
import { TFavourites }                            from './types'

import { VotingMessage }         from '../VotingMessages'
import { SmallSpinner, Spinner } from '../../Spinner'

import emptyImage    from '../../../assets/images/voting/empty_img.png'
import heartBgRedImg from '../../../assets/images/voting/heartBgRed.png'


const Favourites: React.FC<TFavourites> = ({ dispatch, favoritesData, infoMessage, status, onFavourite }) => {
	const [ isLoading, setIsLoading ] = useState(true)
	const noItemsBoolean = (favoritesData.length === 0 && status === 'success')

	useEffect(() => {
		const promise = dispatch(fetchGetFavourites())
		return () => promise.abort()
	}, [])

	useEffect(() => {
		setIsLoading(true)
		if (status === 'success') setTimeout(() => setIsLoading(false), 1000)

	}, [])

	const deleteFromFavourites = (obj: TFavouritesData) => {
		if (obj) {
			const { id, image_id }: { id: number, image_id: string } = obj
			dispatch(fetchDeleteFromFav({ numId: id, strId: image_id }))
		}
	}

	if (isLoading) return <Spinner/>

	return (
		<>
			{ noItemsBoolean && <div className='noItemFound '><span>No item found</span></div> }
			<div className={ s.voting__items }>
				{ favoritesData?.map((el: TFavouritesData) => {
					return (
						<div className={ s.voting__itemsImg_wr } key={ el?.id }>
							<img src={ el?.image?.url ? el?.image?.url : emptyImage } alt='image'/>
							<button disabled={ status === 'pending' } onClick={ () => deleteFromFavourites(el) }
									className={ s.item__hoverIcon }>
								{ status === 'pending'
									? <SmallSpinner height={ 40 } width={ 20 } color='#FF868E'/>
									: <img src={ heartBgRedImg } alt=''/>
								}
							</button>
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
