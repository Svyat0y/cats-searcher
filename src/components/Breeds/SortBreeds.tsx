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
	const { breedsList, status, order, limit, value } = useSelector(selectBreeds)

	useEffect(() => {
		dispatch(fetchBreeds())

		return () => {
			dispatch(setToBreedList([]))
		}
	}, [])

	return (
		<div className={ s.sortBreeds_wr }>
			<BreedSelect
				value={ value }
				dispatch={ dispatch }
				options={ breedsList }
				status={ status }
			/>
			<LimitSelect
				limit={ limit }
				dispatch={ dispatch }
			/>
			<BreedSortButtons
				status={ status }
				order={ order }
				dispatch={ dispatch }
			/>
		</div>
	)
}

export default SortBreeds