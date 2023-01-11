import { FC, useEffect, useState } from 'react'
import s                           from './SortBreeds.module.scss'
import { useSearchParams }         from 'react-router-dom'

import { useSelector }    from 'react-redux'
import { useAppDispatch } from '../../redux/store'
import { setToBreedList } from '../../redux/Search/slice'
import { selectSearch }   from '../../redux/Search/selectors'
import { fetchBreeds }    from '../../redux/Breeds/asyncActions'
import { TBreedOption }   from '../../redux/Breeds/types'
import { TOption }        from '../../redux/Search/types'

import { BreedSelect, LimitSelect, SortButtons } from '../Ui'
import { createParams }                          from '../../utils/createParams'


const limitOptionsForBreeds: TBreedOption[] = [
	{ value: '5', label: 'Limit: 5' },
	{ value: '10', label: 'Limit: 10' },
	{ value: '15', label: 'Limit: 15' },
	{ value: '20', label: 'Limit: 20' },
]

const SortBreeds: FC = () => {
	const dispatch = useAppDispatch()
	const [ _, setSearchParams ] = useSearchParams()
	const [ isMounted, setIsMounted ] = useState(false)
	const { breedFilters, status, breedsList } = useSelector(selectSearch)

	const pageNumberForUI = breedFilters.page + 1

	const props = { filters: breedFilters, pageNumberForUI, setSearchParams, dispatch, status }

	useEffect(() => {
		if (isMounted) dispatch(fetchBreeds({ value: 'All breeds', label: 'All breeds' }))
		setIsMounted(true)

		return () => {
			dispatch(setToBreedList([]))
		}
	}, [ isMounted ])

	const onChangeOption = (e: TOption) => {
		if (e) {
			setSearchParams(createParams(e.label, breedFilters.limit, breedFilters.order, pageNumberForUI, breedFilters.type))
		}
	}
	const getValue = () => breedsList.find(option => option.label === breedFilters.value)

	return (
		<div className={ s.wrapper }>
			<BreedSelect options={ breedsList } onChangeOption={ onChangeOption } getValue={ getValue } { ...props }/>
			<div className={ s.withSortButtons }>
				<LimitSelect options={ limitOptionsForBreeds } { ...props }/>
				<SortButtons { ...props }/>
			</div>
		</div>
	)
}

export default SortBreeds