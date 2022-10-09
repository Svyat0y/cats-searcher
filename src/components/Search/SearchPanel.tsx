import React, { useEffect, useState } from 'react'
import s                              from './SearchPanel.module.scss'
import qs                             from 'qs'
import { useNavigate }                from 'react-router'

import { useAppDispatch } from '../../redux/store'
import { fetchSearch }    from '../../redux/Search/asyncActions'

import SearchPanelButtons from './SearchPanelButtons'


let rootValue: string
const SearchPanel: React.FC = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const [ value, setValue ] = useState('')
	const params: any = qs.parse(window.location.search.slice(1))

	const queryString = qs.stringify({
		q: value
	})

	useEffect(() => {
		params && setValue(params.q)
		if (!params.q) setValue('')
	}, [ params.q ])

	const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (rootValue !== value) {
			if (e.key === 'Enter') {
				dispatch(fetchSearch(value))
				navigate(`/search?${ queryString }`)
			}
		}
		rootValue = value
	}

	const onSearchClick = () => {
		if (rootValue !== value) {
			if (value) {
				dispatch(fetchSearch(value.trim()))
				navigate(`/search?${ queryString }`)
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
