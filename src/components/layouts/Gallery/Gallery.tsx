import { FC, useEffect, useState }                     from 'react'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'

import { useSelector }                         from 'react-redux'
import { useAppDispatch }                      from '../../../redux/store'
import { setActiveBtn }                        from '../../../redux/voting/slice'
import { setGalleryFilters, setIsLoadingData } from '../../../redux/Search/slice'
import { fetchGallerySearch }                  from '../../../redux/Search/asyncActions'
import { selectSearch }                        from '../../../redux/Search/selectors'
import { selectVoting }                        from '../../../redux/voting/selectors'

import { SearchedItems } from '../../index'
import GalleryLayout     from './GalleryLayout'


const Gallery: FC = () => {
	const dispatch = useAppDispatch()
	const location = useLocation()
	const [ searchParams ] = useSearchParams()
	const [ isMounted, setIsMounted ] = useState(false)


	const { searchData, status, galleryFilters, isLoadingData } = useSelector(selectSearch)
	const { onFavourites } = useSelector(selectVoting)

	const firstPage = galleryFilters.page === 0
	const lastPage = searchData && (searchData.length < Number(galleryFilters.limit)) || false
	const pageNumberForUI = galleryFilters.page + 1

	const getParam = ((s: string) => searchParams.get(s))

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
		if (isMounted) {
			dispatch(fetchGallerySearch())
		}
	}, [ galleryFilters.page, isMounted ])

	useEffect(() => {
		dispatch(setActiveBtn('Gallery'))
		setIsMounted(true)
	}, [])

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>
		if (searchData && searchData?.length >= 0) timeoutId = setTimeout(() => dispatch(setIsLoadingData(false)), 1000)

		return () => clearTimeout(timeoutId)
	}, [ searchData ])


	return (
		<Routes>
			<Route path='/' element={ <GalleryLayout/> }>
				<Route path='' element={
					<SearchedItems
						isLoadingData={ isLoadingData }
						onFavourites={ onFavourites }
						data={ searchData }
						status={ status }
						firstPage={ firstPage }
						lastPage={ lastPage }
						dispatch={ dispatch }
						filters={ galleryFilters }
						pageNumberForUI={ pageNumberForUI }
					/>
				}/>
			</Route>
		</Routes>
	)
}

export default Gallery