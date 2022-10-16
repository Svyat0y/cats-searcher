import React                     from 'react'
import Select, { OnChangeValue } from 'react-select'

import { TBreedSelect, TOption } from '../../Breeds/types'
import { setToValue }            from '../../../redux/Breeds/slice'


const BreedSelect: React.FC<TBreedSelect> = ({ options, status, dispatch, value, limit }) => {
	
	const handleChange = (newValue: OnChangeValue<TOption, false>) => {
		const newObj: TOption = newValue
		if (newObj) {
			dispatch(setToValue(newObj.label))
		}
	}

	return (
		<div className='selectBreedContainer'>
			<Select
				classNamePrefix='breed breedSelect'
				placeholder='Select breed'
				options={ options }
				defaultValue={ { value: limit, label: value } }
				isLoading={ status === 'pending' }
				onChange={ handleChange }
			/>
		</div>
	)
}

export default BreedSelect