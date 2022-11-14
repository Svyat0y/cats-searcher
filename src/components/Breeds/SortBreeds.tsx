import React, { useEffect, useState } from 'react'
import s                              from './Breeds.module.scss'
import { useSearchParams }            from 'react-router-dom'

import { useSelector }    from 'react-redux'
import { useAppDispatch } from '../../redux/store'
import { fetchBreeds }    from '../../redux/Breeds/asyncActions'
import { selectSearch }   from '../../redux/Search/selectors'
import { setToBreedList } from '../../redux/Search/slice'

import BreedSortButtons             from './BreedSortButtons'
import { BreedSelect, LimitSelect } from '../common'
import { TBreedOption }             from '../../redux/Breeds/types'


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

	useEffect(() => {
		if (isMounted) dispatch(fetchBreeds({ value: 'all breeds', label: 'All breeds' }))
		setIsMounted(true)

		return () => {
			dispatch(setToBreedList([]))
		}
	}, [ isMounted ])

	return (
		<div className={ s.sortBreeds_wr }>
			<BreedSelect
				filters={ filters }
				pageNumberForUI={ pageNumberForUI }
				setSearchParams={ setSearchParams }
				dispatch={ dispatch }
				options={ breedsList }
				status={ status }
			/>
			<LimitSelect
				filters={ filters }
				pageNumberForUI={ pageNumberForUI }
				setSearchParams={ setSearchParams }
				dispatch={ dispatch }
				options={ limitOptionsForBreeds }
			/>
			<BreedSortButtons
				filters={ filters }
				pageNumberForUI={ pageNumberForUI }
				setSearchParams={ setSearchParams }
				status={ status }
				dispatch={ dispatch }
			/>
		</div>
	)
}

export default SortBreeds