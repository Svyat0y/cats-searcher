import React, { useEffect, useState } from 'react'
import s                              from './Breeds.module.scss'
import { useSearchParams }            from 'react-router-dom'

import { useSelector }    from 'react-redux'
import { useAppDispatch } from '../../redux/store'
import { setToBreedList } from '../../redux/Search/slice'
import { selectSearch }   from '../../redux/Search/selectors'
import { fetchBreeds }    from '../../redux/Breeds/asyncActions'
import { TBreedOption }   from '../../redux/Breeds/types'
import { TOption }        from '../../redux/Search/types'

import SortButtons                  from '../common/Buttons/SortButtons/SortButtons'
import { BreedSelect, LimitSelect } from '../common'
import { createParams }             from '../../utils/createParams'


const limitOptionsForBreeds: TBreedOption[] = [
	{ value: '5', label: 'Limit: 5' },
	{ value: '10', label: 'Limit: 10' },
	{ value: '15', label: 'Limit: 15' },
	{ value: '20', label: 'Limit: 20' },
]

const SortBreeds: React.FC = () => {
	const dispatch = useAppDispatch()
	const [ _, setSearchParams ] = useSearchParams()
	const [ isMounted, setIsMounted ] = useState(false)
	const { filters, status, breedsList } = useSelector(selectSearch)

	const pageNumberForUI = filters.page + 1

	const props = { filters, pageNumberForUI, setSearchParams, dispatch, status }

	useEffect(() => {
		if (isMounted) dispatch(fetchBreeds({ value: 'All breeds', label: 'All breeds' }))
		setIsMounted(true)

		return () => {
			dispatch(setToBreedList([]))
		}
	}, [ isMounted ])

	const onChangeOption = (e: TOption) => {
		if (e) {
			setSearchParams(createParams(e.label, filters.limit, filters.order, pageNumberForUI, filters.type))
		}
	}
	const getValue = () => breedsList.find(option => option.label === filters.value)

	return (
		<div className={ s.wrapper }>
			<BreedSelect options={ breedsList } onChangeOption={ onChangeOption } getValue={ getValue } { ...props }/>
			<LimitSelect options={ limitOptionsForBreeds } { ...props }/>
			<SortButtons { ...props }/>
		</div>
	)
}

export default SortBreeds