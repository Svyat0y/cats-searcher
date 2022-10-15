import React                     from 'react'
import Select, { OnChangeValue } from 'react-select'

import { TBreedSelect, TOption } from '../../Breeds/types'
import { setToValue }            from '../../../redux/Breeds/slice'


const BreedSelect: React.FC<TBreedSelect> = ({ options, status, dispatch }) => {

	const handleChange = (newValue: OnChangeValue<TOption, false>) => {
		const newObj: TOption = newValue
		newObj && dispatch(setToValue(newObj.label))
	}

	return (
		<div className='selectBreedContainer'>
			<Select
				classNamePrefix='breed breedSelect'
				placeholder='All breeds'
				options={ options }
				isLoading={ status === 'pending' }
				onChange={ handleChange }
			/>
		</div>
	)
}

export default BreedSelect