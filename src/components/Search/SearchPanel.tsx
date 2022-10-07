import React, { useState } from 'react'
import s                   from './SearchPanel.module.scss'
import { Link }            from 'react-router-dom'


import { useAppDispatch } from '../../redux/store'
import { fetchSearch }    from '../../redux/Search/asyncActions'

import SearchPanelButtons from './SearchPanelButtons'


const SearchPanel: React.FC = () => {
	const dispatch = useAppDispatch()
	const [ value, setValue ] = useState('')

	const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const onSearchClick = () => {
		if (value) dispatch(fetchSearch(value))
	}

	return (
		<div className={ s.search }>
			<div className={ s.search__input_wr }>
				<input onChange={ (e) => onChangeValue(e) } type='text' placeholder='Search for breeds by name'/>
				<Link onClick={ onSearchClick } to={ value ? '/search' : '#' }></Link>
			</div>
			<SearchPanelButtons/>
		</div>
	)
}

export default SearchPanel
