import React, { useEffect, useState } from 'react'
import s                              from '../Voting.module.scss'

import { fetchGetLikes }                    from '../../../redux/voting/asyncActions'
import { TLikesData }                       from '../../../redux/voting/types'
import { setNextLikePage, setPrevLikePage } from '../../../redux/voting/slice'
import { TLikes }                           from './types'

import { Spinner } from '../../Spinner'
import { Button }  from '../../common/Buttons'


const Likes: React.FC<TLikes> = ({ likeData, dispatch, status, likePage }) => {
	const [ isLoading, setIsLoading ] = useState(true)
	const noItemsBoolean = (likeData?.length === 0 && status === 'success')
	const zeroPage = (likePage - 1) < 0
	const lastPage = likeData?.length < 15

	useEffect(() => {
		setIsLoading(true)
		dispatch(fetchGetLikes())
	}, [ likePage ])

	useEffect(() => {
		if (likeData?.length >= 0) setTimeout(() => setIsLoading(false), 1000)
	}, [ likeData ])

	const onClickNext = () => {
		if (!lastPage) dispatch(setNextLikePage())
	}
	const onClickPrev = () => {
		if (!zeroPage) dispatch(setPrevLikePage())
	}

	if (isLoading) return <Spinner/>

	return (
		<>
			{ noItemsBoolean && <div className='noItemFound'><span>No item found.</span></div> }
			<div className={ s.voting__items }>
				{ likeData?.map((el: TLikesData) => {
					return (
						<div className={ `${ s.voting__itemsImg_wr } ${ s.unHoverClass }` } key={ el.id }>
							<img src={ el.image.url } alt='image'/>
						</div>
					)
				}) }
			</div>
			{
				likePage === 0 && lastPage
					? ''
					: <div className={ s.voting__pagination_wr }>
						<div className={ s.prev }><Button disabled={ zeroPage } onclick={ onClickPrev } name='<<' linkTo=''/></div>
						<div className={ s.next }><Button disabled={ lastPage } onclick={ onClickNext } name='>>' linkTo=''/></div>
					</div>
			}
		</>
	)
}

export default Likes
