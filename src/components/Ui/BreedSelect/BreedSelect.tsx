import { FC, memo }     from 'react'
import { TBreedSelect } from './types'

import Select from 'react-select'

import SelectContainer from '../SelectContainer/SelectContainer'


const BreedSelect: FC<TBreedSelect> = memo(({ getValue, options, filters, onChangeOption }) => {

	return (
		<SelectContainer filters={ filters } label={ 'Breed' }>
			<Select
				classNamePrefix='select'
				placeholder='Select breed'
				value={ getValue() }
				options={ options }
				isLoading={ options.length === 0 }
				onChange={ onChangeOption }
			/>
		</SelectContainer>
	)
})

export default BreedSelect