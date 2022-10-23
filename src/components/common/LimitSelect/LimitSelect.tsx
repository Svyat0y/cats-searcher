import React  from 'react'
import Select from 'react-select'

import { TBreedOption } from '../../../redux/Breeds/types'
import { TLimitSelect } from './types'
import { setToLimit }   from '../../../redux/Breeds/slice'
import { TOption }      from '../../Breeds/types'


const limitOptions: TBreedOption[] = [
	{ value: '5', label: 'Limit: 5' },
	{ value: '10', label: 'Limit: 10' },
	{ value: '15', label: 'Limit: 15' },
	{ value: '20', label: 'Limit: 20' },
]

const LimitSelect: React.FC<TLimitSelect> = ({ dispatch }) => {

	const onChangeLimit = (e: TOption) => {
		if (e) dispatch(setToLimit(e.value))
	}

	return (
		<div className='selectLimitContainer'>
			<Select
				classNamePrefix='breedSelect'
				options={ limitOptions }
				defaultValue={ limitOptions[0] }
				onChange={ onChangeLimit }
			/>
		</div>
	)
}

export default LimitSelect