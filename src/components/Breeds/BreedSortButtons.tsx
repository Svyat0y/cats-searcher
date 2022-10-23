import React from 'react'
import s     from './Breeds.module.scss'

import { TBreedSortButtons } from './types'
import { setOrder }          from '../../redux/Breeds/slice'


const BreedSortButtons: React.FC<TBreedSortButtons> = ({ dispatch, order, status }) => {

	const oncClickAsk = () => {
		dispatch(setOrder('asc'))
	}
	const oncClickDesk = () => {
		dispatch(setOrder('desc'))
	}

	return (
		<>
			<button
				disabled={ status === 'pending' }
				onClick={ oncClickDesk }
				className={ `${ s.sortBreedBtn } ${ s.desk } ${ order === 'desc' ? s.active : '' }` }></button>
			<button
				disabled={ status === 'pending' }
				onClick={ oncClickAsk }
				className={ `${ s.sortBreedBtn } ${ s.ask } ${ order === 'asc' ? s.active : '' }` }></button>
		</>
	)
}

export default BreedSortButtons