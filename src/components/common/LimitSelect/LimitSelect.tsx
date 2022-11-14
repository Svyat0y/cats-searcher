import React            from 'react'
import { TLimitSelect } from './types'
import { TOption }      from '../../Breeds/types'

import Select                 from 'react-select'
import { createParams }       from '../../../utils/createParams'
import { RefreshButton }      from '../index'
import { fetchGallerySearch } from '../../../redux/Search/asyncActions'
import { setIsLoadingData }   from '../../../redux/Search/slice'


const LimitSelect: React.FC<TLimitSelect> = ({ dispatch, setSearchParams, filters, pageNumberForUI, options }) => {
	const getValue = () => options.find(option => option.value === filters.limit)

	const onChangeLimit = (e: TOption) => {
		e && setSearchParams(createParams(filters.value, e.value, filters.order, pageNumberForUI, filters.type))
	}

	const clickOnRefreshBtn = () => {
		dispatch(fetchGallerySearch())
		dispatch(setIsLoadingData(true))
	}

	return (
		<div className='selectContainer withRefreshBtn'>
			{ filters.type && <span className='label'>Limit</span> }
			<Select
				className='container-select'
				value={ getValue() }
				classNamePrefix='select'
				options={ options }
				defaultValue={ options[0] }
				onChange={ onChangeLimit }
			/>
			{ filters.type && <RefreshButton onclick={ clickOnRefreshBtn }/> }
		</div>
	)
}

export default LimitSelect