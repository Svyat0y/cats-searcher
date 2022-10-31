import React, { useCallback, useEffect }               from 'react'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'

import { useSelector }                      from 'react-redux'
import { useAppDispatch }                   from '../../redux/store'
import { setActiveBtn }                     from '../../redux/voting/slice'
import { selectSearch }                     from '../../redux/Search/selectors'
import { setOrder, setToLimit, setToValue } from '../../redux/Search/slice'
import { fetchSearch }                      from '../../redux/Search/asyncActions'

import BreedLayout                        from './BreedLayout'
import { SearchedItems, SingleBreedInfo } from '../index'


const Breeds = () => {
	const dispatch = useAppDispatch()
	const location = useLocation()
	const { order, limit, value } = useSelector(selectSearch)
	const [ searchParams ] = useSearchParams()

	const getParam = useCallback((s: string) => {
		return searchParams.get(s)
	}, [ value, limit, order ])
	const setAndLoadData = useCallback((value: string, limit: string, order: string) => {
		dispatch(setToValue(value))
		dispatch(setToLimit(limit))
		dispatch(setOrder(order))
		dispatch(fetchSearch())
	}, [ value, limit, order ])

	useEffect(() => {
		dispatch(setActiveBtn('Breeds'))
	}, [])

	useEffect(() => {
		if (!location.search) setAndLoadData('All breeds', '5', 'asc')
	}, [ location.search ])

	useEffect(() => {
		if (location.search) {
			const valueParam: any = getParam('q')
			const limitParam: any = getParam('limit')
			const orderParam: any = getParam('order')
			setAndLoadData(valueParam, limitParam, orderParam)
		}
	}, [ location.search ])

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