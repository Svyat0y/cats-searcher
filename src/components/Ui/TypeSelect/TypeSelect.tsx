import { FC }                       from 'react'
import { TTypeOption, TTypeSelect } from './types'
import { TOption }                  from '../../../redux/Search/types'

import Select           from 'react-select'
import { createParams } from '../../../utils/createParams'

import SelectContainer from '../SelectContainer/SelectContainer'


const TypesOptions: TTypeOption[] = [
	{ value: 'all', label: 'All' },
	{ value: 'static', label: 'Static' },
	{ value: 'animated', label: 'Animated' },
]

const TypeSelect: FC<TTypeSelect> = ({ setSearchParams, filters, pageNumberForUI }) => {
	const getValue = () => TypesOptions.find(option => option.value === filters.type)

	const onChangeType = (e: TOption) => {
		e && setSearchParams(createParams(filters.value, filters.limit, filters.order, pageNumberForUI, e?.value))
	}

	return (
		<SelectContainer filters={ filters } label={ 'Type' }>
			<Select
				isSearchable={ false }
				classNamePrefix='select'
				value={ getValue() }
				options={ TypesOptions }
				onChange={ onChangeType }
			/>
		</SelectContainer>
	)
}

export default TypeSelect