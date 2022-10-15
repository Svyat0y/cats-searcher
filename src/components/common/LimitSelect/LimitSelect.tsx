import React                     from 'react'
import Select, { OnChangeValue } from 'react-select'

import { TBreedOption } from '../../../redux/Breeds/types'
import { setToLimit }   from '../../../redux/Breeds/slice'
import { TOption }      from '../../Breeds/types'
import { TLimitSelect } from './types'


const LimitSelect: React.FC<TLimitSelect> = ({ dispatch }) => {

	const limitOptions: TBreedOption[] = [
		{ value: '5', label: 'Limit: 5' },
		{ value: '10', label: 'Limit: 10' },
		{ value: '15', label: 'Limit: 15' },
		{ value: '20', label: 'Limit: 20' },
	]

	const handleChange = (newValue: OnChangeValue<TOption, false>) => {
		const newObj: TOption = newValue
		newObj && dispatch(setToLimit(newObj.value))
	}

	return (
		<div className='selectLimitContainer'>
			<Select
				classNamePrefix='breedSelect'
				options={ limitOptions }
				defaultValue={ limitOptions[0] }
				onChange={ handleChange }
			/>
		</div>
	)
}

export default LimitSelect