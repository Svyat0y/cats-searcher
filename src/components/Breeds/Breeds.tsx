import React, { useEffect }                            from 'react'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'

import { useSelector }                  from 'react-redux'
import { useAppDispatch }               from '../../redux/store'
import { setActiveBtn }                 from '../../redux/voting/slice'
import { setFilters, setIsLoadingData } from '../../redux/Search/slice'
import { selectSearch }                 from '../../redux/Search/selectors'
import { fetchSearch }                  from '../../redux/Search/asyncActions'

import BreedsLayout      from '../layouts/BreedsLayout/BreedsLayout'
import { SearchedItems } from '../index'


const Breeds = () => {
	const dispatch = useAppDispatch()
	const location = useLocation()
	const [ searchParams ] = useSearchParams()

	const { searchData, status, filters, isLoadingData } = useSelector(selectSearch)

	const firstPage = filters.page === 0
	const lastPage = searchData && searchData.length < Number(filters.limit)
	const pageNumberForUI = filters.page + 1

	const getParam = ((s: string) => searchParams.get(s))

	useEffect(() => {
		dispatch(setActiveBtn('Breeds'))
	}, [])

	useEffect(() => {
		if (location.search) {
			const value: string | null = getParam('q')
			const limit: string | null = getParam('limit')
			const order: string | null = getParam('order')
			const page: string | null = getParam('page')
			dispatch(setFilters({ value, limit, order, page: Number(page) - 1 }))
		}
	}, [ location.search ])

	useEffect(() => {
		dispatch(fetchSearch())
		dispatch(setIsLoadingData(true))
	}, [ filters.value, filters.limit, filters.order, filters.page ])

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>
		if (searchData && searchData?.length >= 0) timeoutId = setTimeout(() => dispatch(setIsLoadingData(false)), 1000)

		return () => clearTimeout(timeoutId)
	}, [ searchData ])

	return (
		<>
			<Routes>
				<Route path='/' element={ <BreedsLayout/> }>
					<Route path='' element={ <SearchedItems
						isLoadingData={ isLoadingData }
						data={ searchData }
						status={ status }
						firstPage={ firstPage }
						lastPage={ lastPage }
						dispatch={ dispatch }
						filters={ filters }
						pageNumberForUI={ pageNumberForUI }/> }/>
				</Route>
			</Routes>
		</>
	)
}

export default Breeds