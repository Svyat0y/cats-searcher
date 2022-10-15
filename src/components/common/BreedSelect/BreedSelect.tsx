import React from 'react'

import Select       from 'react-select'
import makeAnimated from 'react-select/animated'

import { TBreedSelect } from '../../Breeds/types'


const animatedComponents = makeAnimated()
const BreedSelect: React.FC<TBreedSelect> = ({ options, status }) => {


	return (
		<div className='selectBreedContainer'>
			<Select
				components={ animatedComponents }
				classNamePrefix='breed breedSelect'
				placeholder='All breeds'
				options={ options }
				isLoading={ status === 'pending' }
			/>
		</div>
	)
}

export default BreedSelect