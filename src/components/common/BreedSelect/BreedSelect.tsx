import React            from 'react'
import Select           from 'react-select'
import { TBreedSelect } from '../../Breeds/types'


const BreedSelect: React.FC<TBreedSelect> = ({ options }) => {

	return (
		<div className='selectBreedContainer'>
			<Select
				classNamePrefix='breed breedSelect'
				options={ options }
				placeholder='All breeds'
			/>
		</div>
	)
}

export default BreedSelect