import { FC, useEffect, useState }      from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { TVotingItems }                 from '../components/Voting/types'
import { TRenderItems }                 from './types'

import { setFavPage, setLikePage }           from '../redux/voting/slice'
import { fetchGetFavourites, fetchGetLikes } from '../redux/voting/asyncActions'


const RenderItems = (Component: FC<TVotingItems>) => (
	{ dispatch, data, page, status, infoMessage }: TRenderItems) => {
	const location = useLocation()
	const [ isLoading, setIsLoading ] = useState(true)
	const [ isMounted, setIsMounted ] = useState(false)
	const [ searchParams, setSearchParams ] = useSearchParams()

	const firstPage = page === 0
	const lastPage = data && data.length < 15 || false
	const likeLocation = location.pathname.includes('likes')
	const favLocation = location.pathname.includes('favourites')
	const noItemsBoolean = (data?.length === 0)
	const pageParam = searchParams.get('page')
	const pageFOrUi = page + 1

	useEffect(() => {
		if (isMounted) {
			if (pageParam) {
				setIsLoading(true)
				likeLocation && dispatch(fetchGetLikes())
				favLocation && dispatch(fetchGetFavourites())

				if (pageFOrUi === (Number(pageParam))) return
				else setSearchParams({ page: String(pageFOrUi) })
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
			page={ pageFOrUi }
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