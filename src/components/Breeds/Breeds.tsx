import React, { useEffect }                            from 'react'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'

import { useSelector }                      from 'react-redux'
import { useAppDispatch }                   from '../../redux/store'
import { setOrder, setToLimit, setToValue } from '../../redux/Breeds/slice'
import { setActiveBtn }                     from '../../redux/voting/slice'
import { selectSearch }                     from '../../redux/Search/selectors'
import { fetchSearch }                      from '../../redux/Search/asyncActions'

import BreedLayout                        from './BreedLayout'
import { SearchedItems, SingleBreedInfo } from '../index'


const Breeds = () => {
	const dispatch = useAppDispatch()
	const location = useLocation()
	const { searchData, status } = useSelector(selectSearch)
	const [ searchParams, setSearchParams ] = useSearchParams()


	useEffect(() => {
		dispatch(setActiveBtn('Breeds'))
	}, [])

	useEffect(() => {
		if (!location.search) {
			dispatch(setToValue('All breeds'))
			dispatch(setToLimit('5'))
			dispatch(setOrder('asc'))
			dispatch(fetchSearch())
		}
	}, [ location.search ])

	useEffect(() => {
		if (location.search) {
			const valueParam: any = searchParams.get('q')
			const limitParam: any = searchParams.get('limit')
			const orderParam: any = searchParams.get('order')
			dispatch(setToValue(valueParam))
			dispatch(setToLimit(limitParam))
			dispatch(setOrder(orderParam))
			dispatch(fetchSearch())
		}
	}, [ location.search ])

	return (
		<>
			<Routes>
				<Route path='/' element={ <BreedLayout/> }>
					<Route path='' element={ !searchData && status === 'success'
						? <div className='noItemFound'>Select breed please</div>
						: <SearchedItems dispatch={ dispatch }/> }/>
					<Route path='description' element={ <SingleBreedInfo/> }/>
				</Route>
			</Routes>
		</>
	)
}

export default Breeds