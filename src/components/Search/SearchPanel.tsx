import React, { useEffect, useState } from 'react'
import s                              from './SearchPanel.module.scss'
import qs                             from 'qs'

import { useAppDispatch } from '../../redux/store'
import { fetchSearch }    from '../../redux/Search/asyncActions'

import SearchPanelButtons  from './SearchPanelButtons'
import { useNavigate }     from 'react-router'
import { useSearchParams } from 'react-router-dom'


const createParams = (value: string) => {
	return qs.stringify({
		q: value
	})
}

let rootValue: string
const SearchPanel: React.FC = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const [ searchParams ] = useSearchParams()
	const [ value, setValue ] = useState('')

	useEffect(() => {
		const value = searchParams.get('q')
		value && dispatch(fetchSearch({ value }))

	}, [ searchParams ])

	const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (rootValue !== value) {
			if (e.key === 'Enter') {
				dispatch(fetchSearch({ value }))
				navigate(`search?${ createParams(value) }`)
			}
		}
		rootValue = value
	}

	const onSearchClick = () => {
		if (rootValue !== value) {
			if (value) {
				dispatch(fetchSearch({ value }))
				navigate(`search?${ createParams(value) }`, { replace: true })
			}
		}
		rootValue = value
	}

	return (
		<div className={ s.search }>
			<div className={ s.search__input_wr }>
				<input
					value={ value }
					onKeyDown={ (e) => handleKey(e) } onChange={ (e) => onChangeValue(e) } type='text'
					placeholder='Search for breeds by name'/>
				<button onClick={ () => onSearchClick() }/>
			</div>
			<SearchPanelButtons/>
		</div>
	)
}

export default SearchPanel
