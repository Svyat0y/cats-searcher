import React, { useEffect, useState } from 'react'

import { fetchGetLikes }                    from '../../../redux/voting/asyncActions'
import { setActiveBtn, setIsLikesMounted, } from '../../../redux/voting/slice'
import { TLikes }                           from './types'

import { NoItemFound, SkeletonLoader } from '../../common'
import LikeItems                       from './LikeItems'


const Likes: React.FC<TLikes> = ({ likeData, dispatch, likePage, isLikesMounted }) => {
	const [ isLoading, setIsLoading ] = useState(false)
	const noItemsBoolean = (likeData?.length === 0)

	useEffect(() => {
		dispatch(setActiveBtn('likes'))
	}, [])

	useEffect(() => {
		dispatch(setIsLikesMounted(true))
		if (!isLikesMounted) {
			setIsLoading(true)
			dispatch(fetchGetLikes())
		}
	}, [ likePage ])

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>
		if (likeData && likeData?.length >= 0) timeoutId = setTimeout(() => setIsLoading(false), 1000)

		return () => clearTimeout(timeoutId)
	}, [ likeData ])


	if (isLoading) return <SkeletonLoader count={ 10 }/>

	return (
		<>
			{ noItemsBoolean && <NoItemFound noItemsBoolean={ noItemsBoolean } likePage={ likePage }/> }
			<LikeItems dispatch={ dispatch } likeData={ likeData } likePage={ likePage }/>
		</>
	)
}

export default Likes
