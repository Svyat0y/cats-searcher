import React           from 'react'
import s               from './SearchPanel.module.scss'
import qs              from 'qs'
import { useNavigate } from 'react-router'

import { useSelector }                from 'react-redux'
import { useAppDispatch }             from '../../redux/store'
import { setFilters, setSearchValue } from '../../redux/Search/slice'
import { selectSearch }               from '../../redux/Search/selectors'

import SearchPanelButtons from './SearchPanelButtons'


const createParams = (value: string | null) => qs.stringify({ q: value })

let rootValue: string | null
const SearchPanel: React.FC = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const { searchValue } = useSelector(selectSearch)

	const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => dispatch(setSearchValue(e.target.value))

	const createNewFilters = (searchValue: string | null) => {
		return {
			value: searchValue,
			limit: '5',
			order: 'asc',
			page: 0
		}
	}

	const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (rootValue !== searchValue) {
			if (e.key === 'Enter') {
				dispatch(setFilters(createNewFilters(searchValue)))
				navigate(`search?${ createParams(searchValue) }`)
			}
		}
		rootValue = searchValue
	}

	const onSearchClick = () => {
		if (rootValue !== searchValue) {
			if (searchValue) {
				dispatch(setFilters(createNewFilters(searchValue)))
				navigate(`search?${ createParams(searchValue) }`)
			}
		}
		rootValue = searchValue
	}

	return (
		<div className={ s.search }>
			<div className={ s.search__input_wr }>
				<input
					value={ searchValue ? searchValue : '' }
					onKeyDown={ (e) => handleKey(e) } onChange={ (e) => onChangeValue(e) } type='text'
					placeholder='Search for breeds by name'/>
				<button onClick={ () => onSearchClick() }/>
			</div>
			<SearchPanelButtons/>
		</div>
	)
}

export default SearchPanel
