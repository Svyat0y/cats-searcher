import React                 from 'react'
import s                     from './Breeds.module.scss'
import { TBreedSortButtons } from './types'

import { createParams } from '../../utils/createParams'


const BreedSortButtons: React.FC<TBreedSortButtons> = ({ setSearchParams, status, filters, pageNumberForUI }) => {
	
	const newParams = (order: string) => createParams(filters.value, filters.limit, order, pageNumberForUI)

	const oncClickAsk = () => {
		setSearchParams(newParams('asc'))
	}
	const oncClickDesk = () => {
		setSearchParams(newParams('desc'))
	}

	return (
		<>
			<button
				disabled={ status === 'pending' }
				onClick={ oncClickDesk }
				className={ `${ s.sortBreedBtn } ${ s.desk } ${ filters.order === 'desc' ? s.active : '' }` }></button>
			<button
				disabled={ status === 'pending' }
				onClick={ oncClickAsk }
				className={ `${ s.sortBreedBtn } ${ s.ask } ${ filters.order === 'asc' ? s.active : '' }` }></button>
		</>
	)
}

export default BreedSortButtons