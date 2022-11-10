import React, { useEffect } from 'react'

import { ContentHeader }                from '../common'
import { SearchedItems }                from '../index'
import { useAppDispatch }               from '../../redux/store'
import { setActiveBtn }                 from '../../redux/voting/slice'
import { setGalleryFilters }            from '../../redux/Search/slice'
import GallerySort                      from './GallerySort'
import { fetchGallerySearch }           from '../../redux/Search/asyncActions'
import { useLocation, useSearchParams } from 'react-router-dom'
import { useSelector }                  from 'react-redux'
import { selectSearch }                 from '../../redux/Search/selectors'


const Gallery = () => {
	const dispatch = useAppDispatch()
	const location = useLocation()
	const [ searchParams ] = useSearchParams()

	const { searchData, status, galleryFilters } = useSelector(selectSearch)

	const firstPage = (galleryFilters.page - 1) < 0
	const lastPage = searchData && searchData.length < Number(galleryFilters.limit)
	const pageNumberForUI = galleryFilters.page + 1

	const getParam = ((s: string) => searchParams.get(s))


	useEffect(() => {
		dispatch(setActiveBtn('Gallery'))

	}, [])

	useEffect(() => {
		if (location.search) {
			const value: string | null = getParam('q')
			const limit: string | null = getParam('limit')
			const order: string | null = getParam('order')
			const page: string | null = getParam('page')
			const type: string | null = getParam('type')
			dispatch(setGalleryFilters({ value, limit, order, page: Number(page) - 1, type }))
		}
	}, [ location.search ])

	useEffect(() => {
		dispatch(fetchGallerySearch())
	}, [ galleryFilters.value, galleryFilters.limit, galleryFilters.order, galleryFilters.page, galleryFilters.type ])


	return (
		<div className='content'>
			<div className='content__body'>
				<ContentHeader/>
				<GallerySort/>
				<SearchedItems
					data={ searchData }
					status={ status }
					firstPage={ firstPage }
					lastPage={ lastPage }
					dispatch={ dispatch }
					filters={ galleryFilters }
					pageNumberForUI={ pageNumberForUI }
				/>
			</div>
		</div>
	)
}

export default Gallery

// gallery
// 1 - gallery reducer
// 2 - filter state in gallery reducer
// 3 - function request to images/search
// 4 - styles for SortGallery component
// 5 - refactoring code