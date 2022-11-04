import React, { useEffect } from 'react'
import s                    from './Breeds.module.scss'
import { useSearchParams }  from 'react-router-dom'
import qs                   from 'qs'
import { TOption }          from './types'

import { useSelector }                                      from 'react-redux'
import { useAppDispatch }                                   from '../../redux/store'
import { fetchBreeds }                                      from '../../redux/Breeds/asyncActions'
import { selectSearch }                                     from '../../redux/Search/selectors'
import { setOrder, setToBreedList, setToLimit, setToValue } from '../../redux/Search/slice'

import BreedSortButtons             from './BreedSortButtons'
import { BreedSelect, LimitSelect } from '../common'


const SortBreeds: React.FC = () => {
	const dispatch = useAppDispatch()
	const [ _, setSearchParams ] = useSearchParams()
	const { order, limit, value, page, status, breedsList } = useSelector(selectSearch)

	const createParams = (value: string, limit: string, order: string, page: number) => {
		return qs.stringify({
			q: value,
			limit,
			order,
			page,
		})
	}

	useEffect(() => {
		dispatch(fetchBreeds())

		return () => {
			dispatch(setToBreedList([]))
		}
	}, [])

	const onChangeOption = (e: TOption) => {
		if (e) {
			setSearchParams(createParams(e.label, limit, order, page))
			dispatch(setToValue(e.label))
		}
	}

	const onChangeLimit = (e: TOption) => {
		if (e) {
			setSearchParams(createParams(value, e.value, order, page))
			dispatch(setToLimit(e.value))
		}
	}

	const oncClickAsk = () => {
		setSearchParams(createParams(value, limit, 'asc', page))
		dispatch(setOrder('asc'))
	}
	const oncClickDesk = () => {
		setSearchParams(createParams(value, limit, 'desc', page))
		dispatch(setOrder('desc'))
	}

	return (
		<div className={ s.sortBreeds_wr }>
			<BreedSelect
				onChangeOption={ onChangeOption }
				value={ value }
				dispatch={ dispatch }
				options={ breedsList }
				status={ status }
			/>
			<LimitSelect
				onChangeLimit={ onChangeLimit }
				limit={ limit }
				dispatch={ dispatch }
			/>
			<BreedSortButtons
				oncClickAsk={ oncClickAsk }
				oncClickDesk={ oncClickDesk }
				status={ status }
				order={ order }
				dispatch={ dispatch }
			/>
		</div>
	)
}

export default SortBreeds