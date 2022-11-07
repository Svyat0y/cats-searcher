import React, { useEffect, useState } from 'react'
import s                              from './Breeds.module.scss'
import { useSearchParams }            from 'react-router-dom'
import qs                             from 'qs'
import { TOption }                    from './types'

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
	const [ isMounted, setIsMounted ] = useState(false)
	const { filters, status, breedsList } = useSelector(selectSearch)

	const pageNumberForUI = filters.page + 1

	const createParams = (value: string, limit: string, order: string, page: number) => {
		return qs.stringify({
			q: value,
			limit,
			order,
			page,
		})
	}

	const createNewFilters = (label?: string, limit?: string, order?: string) => {
		return {
			value: label || filters.value,
			limit: limit || filters.limit,
			order: order || filters.order,
			page: filters.page + 1
		}
	}

	useEffect(() => {
		if (isMounted) dispatch(fetchBreeds())
		setIsMounted(true)

		return () => {
			dispatch(setToBreedList([]))
		}
	}, [ isMounted ])

	const onChangeOption = (e: TOption) => {
		if (e) {
			const newObj = createNewFilters(e.label, undefined, undefined)
			setSearchParams(createParams(e.label, filters.limit, filters.order, pageNumberForUI))
			dispatch(setFilters(newObj))
		}
	}

	const onChangeLimit = (e: TOption) => {
		if (e) {
			const newObj = createNewFilters(undefined, e.value, undefined)
			setSearchParams(createParams(filters.value, e.value, filters.order, pageNumberForUI))
			dispatch(setFilters(newObj))
		}
	}

	const oncClickAsk = () => {
		const newObj = createNewFilters(undefined, undefined, 'asc')
		setSearchParams(createParams(filters.value, filters.limit, 'asc', pageNumberForUI))
		dispatch(setFilters(newObj))
	}
	const oncClickDesk = () => {
		const newObj = createNewFilters(undefined, undefined, 'desc')
		setSearchParams(createParams(filters.value, filters.limit, 'desc', pageNumberForUI))
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