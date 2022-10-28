import React from 'react'

import Select           from 'react-select'
import { TBreedSelect } from '../../Breeds/types'


const BreedSelect: React.FC<TBreedSelect> = React.memo(({ options, status, value, onChangeOption }) => {
	const getValue = () => options.find(option => option.label === value)

	return (
		<div className='selectBreedContainer'>
			<Select
				classNamePrefix='breed breedSelect'
				placeholder='Select breed'
				value={ getValue() }
				options={ options }
				isLoading={ status === 'pending' }
				onChange={ onChangeOption }
			/>
		</div>
	)
})

export default BreedSelect