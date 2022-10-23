import React from 'react'

import Select                    from 'react-select'
import { TBreedSelect, TOption } from '../../Breeds/types'
import { setToValue }            from '../../../redux/Breeds/slice'


const BreedSelect: React.FC<TBreedSelect> = React.memo(({ options, status, dispatch }) => {

	const onChangeOption = (e: TOption) => {
		if (e) dispatch(setToValue(e.label))
	}

	return (
		<div className='selectBreedContainer'>
			<Select
				classNamePrefix='breed breedSelect'
				placeholder='Select breed'
				options={ options }
				isLoading={ status === 'pending' }
				onChange={ onChangeOption }
			/>
		</div>
	)
})

export default BreedSelect