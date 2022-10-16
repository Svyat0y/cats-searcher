import React, { useEffect }      from 'react'
import Select, { OnChangeValue } from 'react-select'

import { TBreedOption }                        from '../../../redux/Breeds/types'
import { TOption }                             from '../../Breeds/types'
import { TLimitSelect }                        from './types'
import { createSearchParams, useSearchParams } from 'react-router-dom'
import { useNavigate }                         from 'react-router'
import qs                                      from 'qs'


const LimitSelect: React.FC<TLimitSelect> = ({ dispatch, value }) => {
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
			const query = qs.stringify({
				q: value,
				limit: newObj?.value
			})

			navigate(`?${ query }`)
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