import React                          from 'react'
import Select                         from 'react-select'
import { TOrderOption, TOrderSelect } from './types'


const OrderOptions: TOrderOption[] = [
	{ value: 'random', label: 'Random' },
	{ value: 'desc', label: 'Desc' },
	{ value: 'asc', label: 'Asc' },
]

const OrderSelect: React.FC<TOrderSelect> = ({ value, onChangeOrder }) => {
	const getValue = () => OrderOptions.find(option => option.label === value)

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