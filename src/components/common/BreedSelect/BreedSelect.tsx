import React from 'react'
import qs    from 'qs'

import Select, { OnChangeValue } from 'react-select'
import { useNavigate }           from 'react-router'
import { TBreedSelect, TOption } from '../../Breeds/types'


const BreedSelect: React.FC<TBreedSelect> = ({ options, status, value, dispatch, limit }) => {
	const navigate = useNavigate()

	const handleChange = (newValue: OnChangeValue<TOption, false>) => {
		const newObj: TOption = newValue
		if (newObj?.label) {
			const query = qs.stringify({
				q: newObj?.label,
				limit: limit
			})
			navigate(`?${ query }`)
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