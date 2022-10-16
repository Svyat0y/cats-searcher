import React, { useEffect } from 'react'
import s                    from './Breeds.module.scss'
import qs                   from 'qs'

import { useSelector }    from 'react-redux'
import { useAppDispatch } from '../../redux/store'
import { selectBreeds }   from '../../redux/Breeds/selectors'
import { fetchBreeds }    from '../../redux/Breeds/asyncActions'

import BreedSortButtons             from './BreedSortButtons'
import { BreedSelect, LimitSelect } from '../common'
import { useNavigate }              from 'react-router'
import { fetchSearch }              from '../../redux/Search/asyncActions'


const SortBreeds: React.FC = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const { breedsList, status, value, limit } = useSelector(selectBreeds)

	useEffect(() => {
		const query = qs.stringify({
			q: value,
			limit
		})

		navigate(`?${ query }`)
		dispatch(fetchSearch({ value, limit }))
	}, [ value, limit ])

	useEffect(() => {
		dispatch(fetchBreeds())
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
				dispatch={ dispatch }/>
			<BreedSortButtons/>
		</div>
	)
}

export default SortBreeds