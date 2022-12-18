import { FC }           from 'react'
import s                from './SortButtons.module.scss'
import { TSortButtons } from './types'

import { createParams } from '../../../../utils/createParams'


const SortButtons: FC<TSortButtons> = ({ setSearchParams, status, filters, pageNumberForUI }) => {
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
				className={ `${ s.sortBtn } ${ s.desk } ${ filters.order === 'desc' ? s.active : '' }` }></button>
			<button
				disabled={ status === 'pending' }
				onClick={ oncClickAsk }
				className={ `${ s.sortBtn } ${ s.ask } ${ filters.order === 'asc' ? s.active : '' }` }></button>
		</>
	)
}

export default SortButtons