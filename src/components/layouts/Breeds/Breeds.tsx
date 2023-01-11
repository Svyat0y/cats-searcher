import { FC, useEffect, useState }                     from 'react'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'

import { useSelector }                  from 'react-redux'
import { useAppDispatch }               from '../../../redux/store'
import { setActiveBtn }                 from '../../../redux/voting/slice'
import { setFilters, setIsLoadingData } from '../../../redux/Search/slice'
import { selectSearch }                 from '../../../redux/Search/selectors'
import { fetchSearch }                  from '../../../redux/Search/asyncActions'

import BreedsLayout      from './BreedsLayout'
import { SearchedItems } from '../../index'


const Breeds: FC = () => {
	const dispatch = useAppDispatch()
	const location = useLocation()
	const [ searchParams ] = useSearchParams()
	const [ isMounted, setIsMounted ] = useState(false)

	const { searchData, status, breedFilters, isLoadingData } = useSelector(selectSearch)

	const firstPage = breedFilters.page === 0
	const lastPage = searchData && searchData.length < Number(breedFilters.limit) || false
	const pageNumberForUI = breedFilters.page + 1

	const getParam = ((s: string) => searchParams.get(s))

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
		if (isMounted) {
			dispatch(fetchSearch())
		}
	}, [ breedFilters.value, breedFilters.limit, breedFilters.order, breedFilters.page, isMounted ])

	useEffect(() => {
		dispatch(setActiveBtn('Breeds'))
		setIsMounted(true)
	}, [])

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
						filters={ breedFilters }
						pageNumberForUI={ pageNumberForUI }/> }/>
				</Route>
			</Routes>
		</>
	)
}

export default Breeds