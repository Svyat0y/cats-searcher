import { FC }                         from 'react'
import { TOrderOption, TOrderSelect } from './types'

import Select           from 'react-select'
import { createParams } from '../../../utils/createParams'
import { TOption }      from '../../../redux/Search/types'

import SelectContainer from '../SelectContainer/SelectContainer'


const OrderOptions: TOrderOption[] = [
	{ value: 'random', label: 'Random' },
	{ value: 'desc', label: 'Desc' },
	{ value: 'asc', label: 'Asc' },
]

const OrderSelect: FC<TOrderSelect> = ({ setSearchParams, filters, pageNumberForUI }) => {
	const getValue = () => OrderOptions.find(option => option.value === filters.order)

	const onChangeOrder = (e: TOption) => {
		e && setSearchParams(createParams(filters.value, filters.limit, e.value, pageNumberForUI, filters.type))
	}

	return (
		<SelectContainer filters={ filters } label={ 'Order' }>
			<Select
				isSearchable={ false }
				classNamePrefix='select'
				value={ getValue() }
				options={ OrderOptions }
				onChange={ onChangeOrder }
			/>
		</SelectContainer>
	)
}

export default OrderSelect