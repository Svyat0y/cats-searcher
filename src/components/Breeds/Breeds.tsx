import React, { useEffect }                            from 'react'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'

import { useSelector }                               from 'react-redux'
import { useAppDispatch }                            from '../../redux/store'
import { setActiveBtn }                              from '../../redux/voting/slice'
import { selectSearch }                              from '../../redux/Search/selectors'
import { setOrder, setPage, setToLimit, setToValue } from '../../redux/Search/slice'

import BreedLayout                        from './BreedLayout'
import { SearchedItems, SingleBreedInfo } from '../index'
import { fetchSearch }                    from '../../redux/Search/asyncActions'


const Breeds = () => {
	const dispatch = useAppDispatch()
	const location = useLocation()
	const { order, limit, value, page } = useSelector(selectSearch)
	const [ searchParams ] = useSearchParams()

	const getParam = ((s: string) => {
		return searchParams.get(s)
	})

	const setAndLoadData = (value: string, limit: string, order: string, page: number) => {
		dispatch(setToValue(value))
		dispatch(setToLimit(limit))
		dispatch(setOrder(order))
		dispatch(setPage(page))
	}

	useEffect(() => {
		dispatch(setActiveBtn('Breeds'))
		if (!location.search) setAndLoadData('All breeds', '5', 'asc', 0)
	}, [])

	useEffect(() => {
		if (location.search) {
			const valueParam: any = getParam('q')
			const limitParam: any = getParam('limit')
			const orderParam: any = getParam('order')
			const pageParam: any = getParam('page')
			setAndLoadData(valueParam, limitParam, orderParam, Number(pageParam))
		}
	}, [])

	useEffect(() => {
		dispatch(fetchSearch())
	}, [ value, limit, order, page ])

	return (
		<>
			<Routes>
				<Route path='/' element={ <BreedLayout/> }>
					<Route path='' element={ <SearchedItems dispatch={ dispatch }/> }/>
					<Route path='description' element={ <SingleBreedInfo/> }/>
				</Route>
			</Routes>
		</>
	)
}

export default Breeds