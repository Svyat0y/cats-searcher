import React                        from 'react'
import Select                       from 'react-select'
import { TTypeOption, TTypeSelect } from './types'


const TypesOptions: TTypeOption[] = [
	{ value: 'all', label: 'All' },
	{ value: 'static', label: 'Static' },
	{ value: 'animated', label: 'Animated' },
]

const TypeSelect: React.FC<TTypeSelect> = ({ value, onChangeType }) => {
	const getValue = () => TypesOptions.find(option => option.value === value)

	return (
		<div className='selectBreedContainer'>
			<Select
				classNamePrefix='breed breedSelect'
				value={ getValue() }
				options={ TypesOptions }
				onChange={ onChangeType }
			/>
		</div>
	)
}

export default TypeSelect