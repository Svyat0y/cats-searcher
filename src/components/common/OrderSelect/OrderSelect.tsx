import React                          from 'react'
import { TOrderOption, TOrderSelect } from './types'

import Select           from 'react-select'
import { TOption }      from '../../Breeds/types'
import { createParams } from '../../../utils/createParams'


const OrderOptions: TOrderOption[] = [
	{ value: 'random', label: 'Random' },
	{ value: 'desc', label: 'Desc' },
	{ value: 'asc', label: 'Asc' },
]

const OrderSelect: React.FC<TOrderSelect> = ({ setSearchParams, filters, pageNumberForUI }) => {
	const getValue = () => OrderOptions.find(option => option.value === filters.value)

	const onChangeOrder = (e: TOption) => {
		e && setSearchParams(createParams(filters.value, filters.limit, e.value, pageNumberForUI, filters.type))
	}

	return (
		<div className='selectBreedContainer'>
			<Select
				classNamePrefix='breed breedSelect'
				value={ getValue() }
				options={ OrderOptions }
				onChange={ onChangeOrder }
			/>
		</div>
	)
}

export default OrderSelect