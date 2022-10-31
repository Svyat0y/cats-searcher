import React                 from 'react'
import s                     from './Breeds.module.scss'
import { TBreedSortButtons } from './types'


const BreedSortButtons: React.FC<TBreedSortButtons> = ({ order, status, oncClickAsk, oncClickDesk }) => {

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