import { FC, memo }     from 'react'
import { TBreedSelect } from './types'

import Select from 'react-select'


const BreedSelect: FC<TBreedSelect> = memo(({ getValue, options, status, filters, onChangeOption }) => {

	return (
		<div className='selectContainer'>
			{ filters.type && <span className='label'>Breed</span> }
			<Select
				classNamePrefix='select'
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