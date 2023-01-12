import { FC }           from 'react'
import { TLimitSelect } from './types'
import { TOption }      from '../../../redux/Search/types'

import Select from 'react-select'

import { fetchGallerySearch } from '../../../redux/Search/asyncActions'
import { setIsLoadingData }   from '../../../redux/Search/slice'
import { createParams }       from '../../../utils/createParams'

import { RefreshButton } from '../index'
import SelectContainer   from '../SelectContainer/SelectContainer'


const LimitSelect: FC<TLimitSelect> = ({ dispatch, setSearchParams, filters, pageNumberForUI, options, status }) => {
	const getValue = () => options.find(option => option.value === filters.limit)

	const onChangeLimit = (e: TOption) => {
		e && setSearchParams(createParams(filters.value, e.value, filters.order, pageNumberForUI, filters.type))
	}

	const clickOnRefreshBtn = () => {
		dispatch(setIsLoadingData(true))
		dispatch(fetchGallerySearch())
	}

	return (
		<SelectContainer filters={ filters } label={ 'Limit' } limit>
			<Select
				isSearchable={ false }
				className='container-select'
				value={ getValue() }
				classNamePrefix='select'
				options={ options }
				defaultValue={ options[0] }
				onChange={ onChangeLimit }
			/>
			{ filters.type && <RefreshButton status={ status } onclick={ clickOnRefreshBtn }/> }
		</SelectContainer>
	)
}

export default LimitSelect