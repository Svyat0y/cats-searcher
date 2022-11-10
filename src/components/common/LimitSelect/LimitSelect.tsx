import React            from 'react'
import { TLimitSelect } from './types'
import { TOption }      from '../../Breeds/types'
import { TBreedOption } from '../../../redux/Breeds/types'

import Select                 from 'react-select'
import { createParams }       from '../../../utils/createParams'
import { RefreshButton }      from '../index'
import { fetchGallerySearch } from '../../../redux/Search/asyncActions'


const limitOptions: TBreedOption[] = [
	{ value: '5', label: 'Limit: 5' },
	{ value: '10', label: 'Limit: 10' },
	{ value: '15', label: 'Limit: 15' },
	{ value: '20', label: 'Limit: 20' },
]

const LimitSelect: React.FC<TLimitSelect> = ({ dispatch, setSearchParams, filters, pageNumberForUI }) => {
	const getValue = () => limitOptions.find(option => option.value === filters.limit)

	const onChangeLimit = (e: TOption) => {
		e && setSearchParams(createParams(filters.value, e.value, filters.order, pageNumberForUI, filters.type))
	}

	const clickOnRefreshBtn = () => {
		dispatch(fetchGallerySearch())
	}

	return (
		<div className='selectContainer withRefreshBtn'>
			<span className='label'>Limit</span>
			<Select
				className='container-select'
				value={ getValue() }
				classNamePrefix='select'
				options={ limitOptions }
				defaultValue={ limitOptions[0] }
				onChange={ onChangeLimit }
			/>
			<RefreshButton onclick={ clickOnRefreshBtn }/>
		</div>
	)
}

export default LimitSelect