import React from 'react'

import Select           from 'react-select'
import { TBreedSelect } from '../../Breeds/types'


const BreedSelect: React.FC<TBreedSelect> = React.memo(({ options, status }) => {

	return (
		<div className='selectBreedContainer'>
			<Select
				classNamePrefix='breed breedSelect'
				placeholder='Select breed'
				options={ options }
				isLoading={ status === 'pending' }
			/>
		</div>
	)
})

export default BreedSelect