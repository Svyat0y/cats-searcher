import React from 'react'

import Select                    from 'react-select'
import { TBreedSelect, TOption } from '../../Breeds/types'
import { setToValue }            from '../../../redux/Breeds/slice'


const BreedSelect: React.FC<TBreedSelect> = React.memo(({ options, status, dispatch, value }) => {

	const onChangeOption = (e: TOption) => {
		if (e) dispatch(setToValue(e.label))
	}

	const getValue = () => {
		return options.find(option => option.label === value)
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