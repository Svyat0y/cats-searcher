import React, { useEffect }      from 'react'
import Select, { OnChangeValue } from 'react-select'

import { TBreedOption }                        from '../../../redux/Breeds/types'
import { TOption }                             from '../../Breeds/types'
import { TLimitSelect }                        from './types'
import { createSearchParams, useSearchParams } from 'react-router-dom'
import { useNavigate }                         from 'react-router'


const LimitSelect: React.FC<TLimitSelect> = ({ dispatch }) => {
	const [ searchParams, setSearchParams ] = useSearchParams()
	const navigate = useNavigate()

	const limitOptions: TBreedOption[] = [
		{ value: '5', label: 'Limit: 5' },
		{ value: '10', label: 'Limit: 10' },
		{ value: '15', label: 'Limit: 15' },
		{ value: '20', label: 'Limit: 20' },
	]

	useEffect(() => {
		if (!searchParams) {
			setSearchParams(
				createSearchParams({ limit: '5' })
			)
		}
	}, [])

	const handleChange = (newValue: OnChangeValue<TOption, false>) => {
		const newObj: TOption = newValue
		if (newObj?.value) {
			if (searchParams) {
				searchParams.set('limit', newObj?.value)
				setSearchParams(searchParams, { replace: true })
				navigate('?' + searchParams)
			}
			else{
				setSearchParams(
					createSearchParams({ limit: newObj?.value })
				)
				navigate('?' + searchParams)
			}
		}
	}

	return (
		<div className='selectLimitContainer'>
			<Select
				classNamePrefix='breedSelect'
				options={ limitOptions }
				defaultValue={ limitOptions[0] }
				onChange={ handleChange }
			/>
		</div>
	)
}

export default LimitSelect