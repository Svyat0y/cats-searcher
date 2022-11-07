import React, { useEffect, useState }   from 'react'
import s                                from '../Voting.module.scss'
import { useLocation, useSearchParams } from 'react-router-dom'
import { TFavourites }                  from './types'

import { fetchGetFavourites }       from '../../../redux/voting/asyncActions'
import { setActiveBtn, setFavPage } from '../../../redux/voting/slice'

import FavItems                                    from './FavItems'
import { NoItemFound, Pagination, SkeletonLoader } from '../../common'
import { VotingMessage }                           from '../index'


const Favourites: React.FC<TFavourites> = ({ dispatch, favoritesData, infoMessage, favPage, status }) => {
	const [ isLoading, setIsLoading ] = useState(false)
	const [ searchParams, setSearchParams ] = useSearchParams()
	const location = useLocation()
	const noItemsBoolean = (favoritesData?.length === 0)
	const firstPage = (favPage - 1) < 0
	const lastPage = favoritesData && favoritesData?.length < 15

	useEffect(() => {
		dispatch(setActiveBtn('Favourites'))

		const pageParam = searchParams.get('page')
		if (pageParam) {
			dispatch(setFavPage(Number(pageParam) - 1))
		}

	}, [ location.search ])

	useEffect(() => {
		setIsLoading(true)
		dispatch(fetchGetFavourites())
	}, [ favPage ])

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>
		if (favoritesData && favoritesData?.length >= 0) timeoutId = setTimeout(() => setIsLoading(false), 1000)

		return () => clearTimeout(timeoutId)
	}, [ favoritesData ])

	const onClickNext = () => {
		setSearchParams({ page: String((favPage + 1) + 1) })
	}
	const onClickPrev = () => {
		setSearchParams({ page: String((favPage + 1) - 1) })
	}

	const renderPagination = () => (
		(favPage === 0 && lastPage)
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
			<FavItems
				status={ status }
				dispatch={ dispatch }
				favoritesData={ favoritesData }
			/>
			{ renderPagination() }

			<div className={ s.content__messages }>
				{ infoMessage.map((el, i) => <VotingMessage key={ i } { ...el }/>) }
			</div>
		</>
	)
}

export default Favourites
