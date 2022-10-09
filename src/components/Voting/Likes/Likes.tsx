import React, { useEffect, useState } from 'react'
import s                              from '../Voting.module.scss'

import { fetchGetLikes }                                  from '../../../redux/voting/asyncActions'
import { TLikesData }                                     from '../../../redux/voting/types'
import { setActiveBtn, setNextLikePage, setPrevLikePage } from '../../../redux/voting/slice'
import { TLikes }                                         from './types'

import { Spinner } from '../../Spinner'
import { Button }  from '../../common/Buttons'


const Likes: React.FC<TLikes> = ({ likeData, dispatch, status, likePage }) => {
	const [ isLoading, setIsLoading ] = useState(true)
	const noItemsBoolean = (likeData?.length === 0 && status === 'success')
	const zeroPage = (likePage - 1) < 0
	const lastPage = likeData && likeData.length < 15

	useEffect(() => {
		setIsLoading(true)
		dispatch(setActiveBtn('likes'))
		dispatch(fetchGetLikes())
	}, [ likePage ])

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>
		if (likeData && likeData?.length >= 0) timeoutId = setTimeout(() => setIsLoading(false), 1000)

		return () => clearTimeout(timeoutId)
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
			<div className='items'>
				{
					likeData?.map((el: TLikesData) => {
						return (
							<div className='itemsImg_wr unHoverClass' key={ el.id }>
								<img src={ el.image.url } alt='image'/>
							</div>
						)
					})
				}
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
