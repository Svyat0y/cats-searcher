import React                        from 'react'
import { TTypeOption, TTypeSelect } from './types'
import { TOption }                  from '../../Breeds/types'

import Select           from 'react-select'
import { createParams } from '../../../utils/createParams'


const TypesOptions: TTypeOption[] = [
	{ value: 'all', label: 'All' },
	{ value: 'static', label: 'Static' },
	{ value: 'animated', label: 'Animated' },
]

const TypeSelect: React.FC<TTypeSelect> = ({ setSearchParams, filters, pageNumberForUI }) => {
	const getValue = () => TypesOptions.find(option => option.value === filters.type)

	const onChangeType = (e: TOption) => {
		e && setSearchParams(createParams(filters.value, filters.limit, filters.order, pageNumberForUI, e?.value))
	}

	return (
		<div className='selectContainer'>
			{ filters.type && <span className='label'>Type</span> }
			<Select
				classNamePrefix='select'
				value={ getValue() }
				options={ TypesOptions }
				onChange={ onChangeType }
			/>
		</div>
	)
}

export default TypeSelect