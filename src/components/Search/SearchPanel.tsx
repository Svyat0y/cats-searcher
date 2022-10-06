import React, { useState } from 'react'
import s                   from './SearchPanel.module.scss'

import SearchPanelButtons from './SearchPanelButtons'
import { Link }           from 'react-router-dom'
import { useAppDispatch } from '../../redux/store'
import { fetchSearch }    from '../../redux/voting/asyncActions'


const SearchPanel: React.FC = () => {
	const dispatch = useAppDispatch()
	const [ value, setValue ] = useState('')

	const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const onSearchClick = () => {
		dispatch(fetchSearch(value))
	}

	return (
		<div className={ s.search }>
			<div className={ s.search__input_wr }>
				<input onChange={ (e) => onChangeValue(e) } type='text' placeholder='SearchPanel for breeds by name'/>
				<Link onClick={ onSearchClick } to='/search'></Link>
			</div>
			<SearchPanelButtons/>
		</div>
	)
}

export default SearchPanel
