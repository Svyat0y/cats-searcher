import React                     from 'react'
import { TBreedSelect, TOption } from '../../Breeds/types'

import Select           from 'react-select'
import { createParams } from '../../../utils/createParams'


const BreedSelect: React.FC<TBreedSelect> = React.memo(({ setSearchParams, options, status, filters, pageNumberForUI }) => {
	const getValue = () => options.find(option => option.label === filters.value)

	const onChangeOption = (e: TOption) => {
		e && setSearchParams(createParams(e.label, filters.limit, filters.order, pageNumberForUI, filters.type))
	}

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