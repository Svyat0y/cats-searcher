import React from 'react'
import s     from './SearchPanel.module.scss'

import SearchPanelButtons from './SearchPanelButtons'
import { Link }           from 'react-router-dom'


const SearchPanel: React.FC = () => {
	return (
		<div className={ s.search }>
			<div className={ s.search__input_wr }>
				<input type='text' placeholder='SearchPanel for breeds by name'/>
				<Link to='/search'></Link>
			</div>
			<SearchPanelButtons/>
		</div>
	)
}

export default SearchPanel
