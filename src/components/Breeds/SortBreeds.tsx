import React, { useEffect, useState } from 'react'
import s                              from './Breeds.module.scss'
import { useSearchParams }            from 'react-router-dom'
import qs                             from 'qs'
import { TOption }                    from './types'

import { useSelector }    from 'react-redux'
import { useAppDispatch } from '../../redux/store'
import { fetchBreeds }    from '../../redux/Breeds/asyncActions'
import { selectSearch }   from '../../redux/Search/selectors'
import { setToBreedList } from '../../redux/Search/slice'

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

	useEffect(() => {
		if (isMounted) dispatch(fetchBreeds({ value: 'all breeds', label: 'All breeds' }))
		setIsMounted(true)

		return () => {
			dispatch(setToBreedList([]))
		}
	}, [ isMounted ])

	const onChangeOption = (e: TOption) => {
		e && setSearchParams(createParams(e.label, filters.limit, filters.order, pageNumberForUI))
	}

	const onChangeLimit = (e: TOption) => {
		e && setSearchParams(createParams(filters.value, e.value, filters.order, pageNumberForUI))
	}

	const oncClickAsk = () => {
		setSearchParams(createParams(filters.value, filters.limit, 'asc', pageNumberForUI))
	}
	const oncClickDesk = () => {
		setSearchParams(createParams(filters.value, filters.limit, 'desc', pageNumberForUI))
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