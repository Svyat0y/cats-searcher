import React from 'react'
import s     from './Breeds.module.scss'

import { useSelector }       from 'react-redux'
import { selectBreeds }      from '../../redux/Breeds/selectors'
import { setActiveSortBtn }  from '../../redux/Breeds/slice'
import { TBreedSortButtons } from './types'
import qs                    from 'qs'
import { useNavigate }       from 'react-router'


const BreedSortButtons: React.FC<TBreedSortButtons> = ({ dispatch }) => {
	const { order, limit, value } = useSelector(selectBreeds)
	const navigate = useNavigate()

	const toNavigate = () => {
		const query = qs.stringify({
			q: value,
			limit: limit,
			order
		})
		navigate(`?${ query }`)
	}

	const oncClickAsk = () => {
		dispatch(setActiveSortBtn('asc'))
		toNavigate()
	}
	const oncClickDesk = () => {
		dispatch(setActiveSortBtn('desc'))
		toNavigate()
	}

	return (
		<>
			<button
				onClick={ oncClickDesk }
				className={ `${ s.sortBreedBtn } ${ s.desk } ${ order === 'desc' ? s.active : '' }` }></button>
			<button
				onClick={ oncClickAsk }
				className={ `${ s.sortBreedBtn } ${ s.ask } ${ order === 'asc' ? s.active : '' }` }></button>
		</>
	)
}

export default BreedSortButtons