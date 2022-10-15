import React, { useEffect } from 'react'
import s                    from './Breeds.module.scss'
import qs                   from 'qs'

import { useSelector }    from 'react-redux'
import { useNavigate }    from 'react-router'
import { useAppDispatch } from '../../redux/store'
import { selectBreeds }   from '../../redux/Breeds/selectors'
import { fetchBreeds }    from '../../redux/Breeds/asyncActions'

import BreedSortButtons             from './BreedSortButtons'
import { BreedSelect, LimitSelect } from '../common'
import { fetchSearch }              from '../../redux/Search/asyncActions'
import { setToLimit, setToValue }   from '../../redux/Breeds/slice'


const SortBreeds: React.FC = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { breedsList, status, value, limit } = useSelector(selectBreeds)

	useEffect(() => {
		const query = qs.stringify({
			q: value,
			limit
		})

		if (value && limit) {
			navigate(`?${ query }`)
			dispatch(fetchSearch({ value, limit }))
		}
	}, [ value, limit ])

	useEffect(() => {
		if (window.location.search) {
			const query: any = qs.parse(window.location.search.slice(1))
			dispatch(setToValue(query.q))
			dispatch(setToLimit(query.limit))
		}
		dispatch(fetchBreeds())
	}, [])

	return (
		<div className={ s.sortBreeds_wr }>
			<BreedSelect
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