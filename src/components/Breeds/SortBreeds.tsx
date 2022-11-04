import React, { useEffect } from 'react'
import s                    from './Breeds.module.scss'
import { useSearchParams }  from 'react-router-dom'
import qs                   from 'qs'
import { TOption }          from './types'

import { useSelector }                from 'react-redux'
import { useAppDispatch }             from '../../redux/store'
import { fetchBreeds }                from '../../redux/Breeds/asyncActions'
import { selectSearch }               from '../../redux/Search/selectors'
import { setFilters, setToBreedList } from '../../redux/Search/slice'

import BreedSortButtons             from './BreedSortButtons'
import { BreedSelect, LimitSelect } from '../common'


const SortBreeds: React.FC = () => {
	const dispatch = useAppDispatch()
	const [ _, setSearchParams ] = useSearchParams()
	const { filters, status, breedsList } = useSelector(selectSearch)

	const createParams = (value: string, limit: string, order: string, page: number) => {
		return qs.stringify({
			q: value,
			limit,
			order,
			page,
		})
	}

	const createNewFilters = (e?: TOption) => {
		return {
			value: e?.label,
			limit: filters.limit,
			order: filters.order,
			page: filters.page
		}
	}

	useEffect(() => {
		dispatch(fetchBreeds())

		return () => {
			dispatch(setToBreedList([]))
		}
	}, [])

	const onChangeOption = (e: TOption) => {
		if (e) {
			const newObj = createNewFilters(e)
			setSearchParams(createParams(e.label, filters.limit, filters.order, filters.page))
			dispatch(setFilters(newObj))
		}
	}

	const onChangeLimit = (e: TOption) => {
		if (e) {
			const newObj = createNewFilters(e)
			setSearchParams(createParams(filters.value, e.value, filters.order, filters.page))
			dispatch(setFilters(newObj))
		}
	}

	const oncClickAsk = () => {
		const newObj = createNewFilters()
		setSearchParams(createParams(filters.value, filters.limit, 'asc', filters.page))
		dispatch(setFilters(newObj))
	}
	const oncClickDesk = () => {
		const newObj = createNewFilters()
		setSearchParams(createParams(filters.value, filters.limit, 'desc', filters.page))
		dispatch(setFilters(newObj))
	}

	return (
		<div className={ s.sortBreeds_wr }>
			<BreedSelect
				onChangeOption={ onChangeOption }
				value={ filters.value }
				dispatch={ dispatch }
				options={ breedsList }
				status={ status }
			/>
			<LimitSelect
				onChangeLimit={ onChangeLimit }
				limit={ filters.limit }
				dispatch={ dispatch }
			/>
			<BreedSortButtons
				oncClickAsk={ oncClickAsk }
				oncClickDesk={ oncClickDesk }
				status={ status }
				order={ filters.order }
				dispatch={ dispatch }
			/>
		</div>
	)
}

export default SortBreeds