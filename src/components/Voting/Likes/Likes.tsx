import React, { useEffect, useState } from 'react'

import { fetchGetLikes } from '../../../redux/voting/asyncActions'
import { setActiveBtn, } from '../../../redux/voting/slice'
import { TLikes }        from './types'

import { NoItemFound, Spinner } from '../../common'
import LikeItems                from './LikeItems'


const Likes: React.FC<TLikes> = ({ likeData, dispatch, likePage }) => {
	const [ isLoading, setIsLoading ] = useState(true)
	const noItemsBoolean = (likeData?.length === 0)

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


	if (isLoading) return <Spinner/>

	return (
		<>
			{ noItemsBoolean && <NoItemFound noItemsBoolean={ noItemsBoolean } likePage={ likePage }/> }
			<LikeItems dispatch={ dispatch } likeData={ likeData } likePage={ likePage }/>
		</>
	)
}

export default Likes
