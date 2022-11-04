import React           from 'react'
import { useNavigate } from 'react-router'
import qs              from 'qs'

import { useSelector }      from 'react-redux'
import { AppDispatch }      from '../../redux/store'
import { setPage }          from '../../redux/Search/slice'
import { fetchSingleBreed } from '../../redux/Breeds/asyncActions'
import { selectSearch }     from '../../redux/Search/selectors'
import { TSearchData }      from '../../redux/Search/types'

import { Pagination, SkeletonLoader } from '../common'
import { useSearchParams }            from 'react-router-dom'


type TSearchedItems = {
	dispatch: AppDispatch
}

const SearchedItems: React.FC<TSearchedItems> = ({ dispatch }) => {
	const navigate = useNavigate()
	const [ _, setSearchParams ] = useSearchParams()
	const { searchData, status, value, page, order, limit } = useSelector(selectSearch)
	const emptyData = searchData === null
	const zeroPage = (page - 1) < 0
	const lastPage = searchData && searchData.length < Number(limit)

	const onClickBreedName = (breedId: string, name: string) => {
		const queryString = qs.stringify({
			breed_id: breedId,
			breed_name: name,
		})
		dispatch(fetchSingleBreed(breedId))
		navigate(`description?${ queryString }`)
	}

	const createParams = (value: string, limit: string, order: string, page: number) => {
		return qs.stringify({
			q: value,
			limit,
			order,
			page,
		})
	}

	const onClickNext = () => {
		setSearchParams(createParams(value, limit, order, page + 1))
		dispatch(setPage(page + 1))
	}
	const onClickPrev = () => {
		setSearchParams(createParams(value, limit, order, page - 1))
		dispatch(setPage(page - 1))
	}

	const renderData = () => (
		<>
			{
				searchData?.map((el: TSearchData) => {
					return (
						el
							? <div className='itemsImg_wr' key={ el.id }>
								<img src={ el.url } alt='image'/>
								<button className='hoverBtn' onClick={ () => onClickBreedName(el.breedId, el.name) }>
									{ el.name }
								</button>
							</div>
							: ''
					)
				})
			}
		</>
	)

	const renderPagination = () => (
		page === 0 && lastPage
			? ''
			: <Pagination
				zeroPage={ zeroPage }
				lastPage={ lastPage }
				onClickNext={ onClickNext }
				onClickPrev={ onClickPrev }/>
	)

	if (status === 'pending') return <SkeletonLoader count={ 5 }/>

	return (
		<>
			{
				emptyData && status === 'success' &&
				<div className='noItemFound'>Nothing found.</div>
			}
			<>
				<div className='items'>
					{ renderData() }
				</div>
				{ !(emptyData && status === 'success') && renderPagination() }
			</>
		</>
	)
}

export default SearchedItems