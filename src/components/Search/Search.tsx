import React from 'react'
import s     from './Search.module.scss'

import SearchButtons from './SearchButtons'


const Search: React.FC = () => {
	return (
		<div className={ s.search }>
			<div className={ s.search__input_wr }>
				<input type='text' placeholder='Search for breeds by name'/>
				<div></div>
			</div>
			<SearchButtons/>
		</div>
	)
}

export default Search
