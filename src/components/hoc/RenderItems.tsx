import React, { useEffect, useState }   from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { TVotingItems }                 from '../Voting/types'
import { TData, TInfoInfoMessage }      from '../../redux/voting/types'

import { AppDispatch }                       from '../../redux/store'
import { setFavPage, setLikePage }           from '../../redux/voting/slice'
import { fetchGetFavourites, fetchGetLikes } from '../../redux/voting/asyncActions'


type TRenderItems = {
	dispatch: AppDispatch
	data: TData[] | null
	page: number
	status?: string
	infoMessage?: TInfoInfoMessage[]
}

const RenderItems = (Component: React.FC<TVotingItems>) => ({ dispatch, data, page, status, infoMessage }: TRenderItems) => {
	const location = useLocation()
	const [ isLoading, setIsLoading ] = useState(false)
	const [ isMounted, setIsMounted ] = useState(false)
	const [ searchParams, setSearchParams ] = useSearchParams()

	const firstPage = page === 0
	const lastPage = data && data.length < 15
	const likeLocation = location.pathname.includes('likes')
	const favLocation = location.pathname.includes('favourites')
	const noItemsBoolean = (data?.length === 0)
	const pageParam = searchParams.get('page')

	useEffect(() => {
		if (isMounted) {
			if (pageParam) {
				setIsLoading(true)
				likeLocation && dispatch(fetchGetLikes())
				favLocation && dispatch(fetchGetFavourites())

				if (page + 1 === (Number(pageParam))) return
				else setSearchParams({ page: String(page + 1) })
			}
		}
	}, [ isMounted, page ])

	useEffect(() => {
		if (pageParam) {
			likeLocation && dispatch(setLikePage(Number(pageParam) - 1))
			favLocation && dispatch(setFavPage(Number(pageParam) - 1))
			setIsMounted(true)
		}
	}, [ location.search ])

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>
		if (data && data?.length >= 0) timeoutId = setTimeout(() => setIsLoading(false), 1000)

		return () => clearTimeout(timeoutId)
	}, [ data ])

	const onClickNext = () => {
		setSearchParams({ page: String((page + 1) + 1) })
	}
	const onClickPrev = () => {
		setSearchParams({ page: String((page + 1) - 1) })
	}

	return (
		<Component
			data={ data }
			page={ page }
			firstPage={ firstPage }
			lastPage={ lastPage }
			onClickNext={ onClickNext }
			onClickPrev={ onClickPrev }
			isLoading={ isLoading }
			noItemsBoolean={ noItemsBoolean }
			dispatch={ dispatch }
			status={ status }
			infoMessage={ infoMessage }/>
	)
}

export default RenderItems