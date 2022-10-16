import React, { useEffect } from 'react'
import s                    from './Breeds.module.scss'

import { useSelector }    from 'react-redux'
import { useAppDispatch } from '../../redux/store'
import { selectBreeds }   from '../../redux/Breeds/selectors'
import { fetchBreeds }    from '../../redux/Breeds/asyncActions'
import { setToBreedList } from '../../redux/Breeds/slice'

import BreedSortButtons             from './BreedSortButtons'
import { BreedSelect, LimitSelect } from '../common'


const SortBreeds: React.FC = () => {
	const dispatch = useAppDispatch()
	const { breedsList, status, value, limit } = useSelector(selectBreeds)

	useEffect(() => {
		dispatch(fetchBreeds())

		return () => {
			dispatch(setToBreedList([ { value: 'All', label: 'All breeds' } ]))
		}
	}, [])

	return (
		<div className={ s.sortBreeds_wr }>
			<BreedSelect
				value={ value }
				limit={ limit }
				dispatch={ dispatch }
				options={ breedsList }
				status={ status }
			/>
			<LimitSelect
				value={ value }
				dispatch={ dispatch }/>
			<BreedSortButtons/>
		</div>
	)
}

export default SortBreeds