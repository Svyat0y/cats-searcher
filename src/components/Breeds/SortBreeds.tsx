import React, { useEffect } from 'react'
import s                    from './Breeds.module.scss'

import { BreedSelect, LimitSelect } from '../common'
import BreedSortButtons             from './BreedSortButtons'
import { useAppDispatch }           from '../../redux/store'
import { useSelector }              from 'react-redux'
import { selectBreeds }             from '../../redux/Breeds/selectors'
import { fetchBreeds }              from '../../redux/Breeds/asyncActions'


const SortBreeds: React.FC = () => {

	const dispatch = useAppDispatch()
	const { breedsList } = useSelector(selectBreeds)

	useEffect(() => {
		dispatch(fetchBreeds())
	}, [])

	return (
		<div className={ s.sortBreeds_wr }>
			<BreedSelect options={ breedsList }/>
			<LimitSelect/>
			<BreedSortButtons/>
		</div>
	)
}

export default SortBreeds