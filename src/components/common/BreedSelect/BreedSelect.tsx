import React                     from 'react'
import Select, { OnChangeValue } from 'react-select'

import { createSearchParams, useSearchParams } from 'react-router-dom'
import { useNavigate }                         from 'react-router'
import { TBreedSelect, TOption }               from '../../Breeds/types'


const BreedSelect: React.FC<TBreedSelect> = ({ options, status, dispatch, value, limit }) => {
	const navigate = useNavigate()
	const [ searchParams, setSearchParams ] = useSearchParams()


	const handleChange = (newValue: OnChangeValue<TOption, false>) => {
		const newObj: TOption = newValue
		if (newObj?.label) {
			if (searchParams) {
				searchParams.set('q', newObj?.label)
				setSearchParams(searchParams, { replace: true })
				navigate('?' + searchParams)
			}
			else{
				setSearchParams(
					createSearchParams({ q: newObj?.label })
				)
				navigate('?' + searchParams)
			}
		}
	}

	return (
		<div className='selectBreedContainer'>
			<Select
				classNamePrefix='breed breedSelect'
				placeholder='Select breed'
				options={ options }
				defaultValue={ { value: limit, label: value } }
				isLoading={ status === 'pending' }
				onChange={ handleChange }
			/>
		</div>
	)
}

export default BreedSelect