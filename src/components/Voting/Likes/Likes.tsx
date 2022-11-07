import React, { useEffect, useState }   from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { TLikes }                       from './types'

import { fetchGetLikes }             from '../../../redux/voting/asyncActions'
import { setActiveBtn, setLikePage } from '../../../redux/voting/slice'

import LikeItems                                   from './LikeItems'
import { NoItemFound, Pagination, SkeletonLoader } from '../../common'


const Likes: React.FC<TLikes> = ({ likeData, dispatch, likePage }) => {
	const [ isLoading, setIsLoading ] = useState(false)
	const [ searchParams, setSearchParams ] = useSearchParams()
	const location = useLocation()
	const noItemsBoolean = (likeData?.length === 0)
	const firstPage = (likePage - 1) < 0
	const lastPage = likeData && likeData.length < 15

	useEffect(() => {
		dispatch(setActiveBtn('likes'))

		const pageParam = searchParams.get('page')
		if (pageParam) {
			dispatch(setLikePage(Number(pageParam) - 1))
		}
	}, [ location.search ])

	useEffect(() => {
		setIsLoading(true)
		dispatch(fetchGetLikes())
	}, [ likePage ])

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>
		if (likeData && likeData?.length >= 0) timeoutId = setTimeout(() => setIsLoading(false), 1000)

		return () => clearTimeout(timeoutId)
	}, [ likeData ])

	const onClickNext = () => {
		setSearchParams({ page: String((likePage + 1) + 1) })
	}
	const onClickPrev = () => {
		setSearchParams({ page: String((likePage + 1) - 1) })
	}

	const renderPagination = () => (
		likePage === 0 && lastPage
			? ''
			: <Pagination
				firstPage={ firstPage }
				lastPage={ lastPage }
				onClickNext={ onClickNext }
				onClickPrev={ onClickPrev }/>
	)

	if (isLoading) return <SkeletonLoader count={ 10 }/>

	return (
		<>
			{ noItemsBoolean && <NoItemFound/> }
			<LikeItems likeData={ likeData }/>
			{ renderPagination() }
		</>
	)
}

export default Likes
