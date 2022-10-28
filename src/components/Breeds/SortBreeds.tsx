import React, { useEffect } from 'react'
import s                    from './Breeds.module.scss'

import { useSelector }                                      from 'react-redux'
import { useAppDispatch }                                   from '../../redux/store'
import { selectBreeds }                                     from '../../redux/Breeds/selectors'
import { fetchBreeds }                                      from '../../redux/Breeds/asyncActions'
import { setOrder, setToBreedList, setToLimit, setToValue } from '../../redux/Breeds/slice'

import BreedSortButtons             from './BreedSortButtons'
import { BreedSelect, LimitSelect } from '../common'
import { TOption }                  from './types'
import qs                           from 'qs'
import { useSearchParams }          from 'react-router-dom'


const SortBreeds: React.FC = () => {
	const dispatch = useAppDispatch()
	const [ searchParams, setSearchParams ] = useSearchParams()
	const { breedsList, status, order, limit, value } = useSelector(selectBreeds)

	const getParams = (value: string, limit: string, order: string) => {
		return qs.stringify({
			q: value,
			limit,
			order
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
			setSearchParams(getParams(e.label, limit, order))
			dispatch(setToValue(e.label))
		}
	}

	const onChangeLimit = (e: TOption) => {
		if (e) {
			setSearchParams(getParams(value, e.value, order))
			dispatch(setToLimit(e.value))
		}
	}

	const oncClickAsk = () => {
		setSearchParams(getParams(value, limit, 'asc'))
		dispatch(setOrder('asc'))
	}
	const oncClickDesk = () => {
		setSearchParams(getParams(value, limit, 'desc'))
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