import React            from 'react'
import Select           from 'react-select'
import { TBreedSelect } from '../../Breeds/types'


const BreedSelect: React.FC<TBreedSelect> = ({ options }) => {

	return (
		<Select options={ options }/>
	)
}

export default BreedSelect