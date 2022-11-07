import React, { useEffect, useState }                  from 'react'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'

import { useSelector }                 from 'react-redux'
import { useAppDispatch }              from '../../redux/store'
import { setActiveBtn }                from '../../redux/voting/slice'
import { selectSearch }                from '../../redux/Search/selectors'
import { fetchSearch }                 from '../../redux/Search/asyncActions'
import { setFilters, setToSearchData } from '../../redux/Search/slice'

import BreedLayout       from './BreedLayout'
import { SearchedItems } from '../index'


const Breeds = () => {
	const dispatch = useAppDispatch()
	const location = useLocation()
	const [ isMounted, setIsMounted ] = useState(false)
	const { filters } = useSelector(selectSearch)
	const [ searchParams ] = useSearchParams()

	const getParam = ((s: string) => searchParams.get(s))

	useEffect(() => {
		dispatch(setActiveBtn('Breeds'))
		if (!location.search) setFilters({ value: 'All breeds', limit: '5', order: 'asc', page: 0 })

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
			dispatch(setFilters({ value, limit, order, page: Number(page) - 1 }))
		}
	}, [ location.search ])

	useEffect(() => {
		if (isMounted) dispatch(fetchSearch())
		setIsMounted(true)
	}, [ filters.value, filters.limit, filters.order, filters.page, isMounted ])

	return (
		<>
			<Routes>
				<Route path='/' element={ <BreedLayout/> }>
					<Route path='' element={ <SearchedItems dispatch={ dispatch }/> }/>
				</Route>
			</Routes>
		</>
	)
}

export default Breeds