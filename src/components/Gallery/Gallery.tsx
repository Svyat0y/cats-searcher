import React, { useEffect, useState } from 'react'

import { ContentHeader }                from '../common'
import { SearchedItems }                from '../index'
import { useAppDispatch }               from '../../redux/store'
import { setActiveBtn }                 from '../../redux/voting/slice'
import { setFilters, setToSearchData }  from '../../redux/Search/slice'
import GallerySort                      from './GallerySort'
import { fetchSearch }                  from '../../redux/Search/asyncActions'
import { useLocation, useSearchParams } from 'react-router-dom'
import { useSelector }                  from 'react-redux'
import { selectSearch }                 from '../../redux/Search/selectors'


const Gallery = () => {
	const dispatch = useAppDispatch()
	const location = useLocation()
	const [ isMounted, setIsMounted ] = useState(false)
	const { filters } = useSelector(selectSearch)
	const [ searchParams ] = useSearchParams()

	const getParam = ((s: string) => searchParams.get(s))


	useEffect(() => {
		dispatch(setActiveBtn('Gallery'))

		return () => {
			dispatch(setToSearchData(null))
		}
	}, [])

	useEffect(() => {
		if (location.search) {
			const value: string | null = getParam('q')
			const limit: string | null = getParam('limit')
			const order: string | null = getParam('order')
			const page: string | null = getParam('page')
			const type: string | null = getParam('type')
			dispatch(setFilters({ value, limit, order, page: Number(page) - 1, type }))
		}
	}, [ location.search ])

	useEffect(() => {
		if (isMounted) dispatch(fetchSearch())
		setIsMounted(true)
	}, [ filters.value, filters.limit, filters.order, filters.page, filters.type, isMounted ])


	return (
		<div className='content'>
			<div className='content__body'>
				<ContentHeader/>
				<GallerySort/>
				<SearchedItems dispatch={ dispatch }/>
			</div>
		</div>
	)
}

export default Gallery