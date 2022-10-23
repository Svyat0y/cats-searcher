import React from 'react'
import s     from './SearchPanel.module.scss'
import qs    from 'qs'

import { useAppDispatch } from '../../redux/store'
import { fetchSearch }    from '../../redux/Search/asyncActions'

import SearchPanelButtons                  from './SearchPanelButtons'
import { useNavigate }                     from 'react-router'
import { useSelector }                     from 'react-redux'
import { selectSearch }                    from '../../redux/Search/selectors'
import { setSearchValue, setToSearchData } from '../../redux/Search/slice'


const createParams = (value: string) => {
	return qs.stringify({
		q: value
	})
}

let rootValue: string
const SearchPanel: React.FC = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const { searchValue } = useSelector(selectSearch)
	/*	const [ searchParams ] = useSearchParams()
		const [ value, setValue ] = useState('')*/

	const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchValue(e.target.value))
	}

	const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (rootValue !== searchValue) {
			if (e.key === 'Enter') {
				dispatch(setToSearchData(null))
				dispatch(fetchSearch({ value: searchValue, limit: undefined }))
				navigate(`search?${ createParams(searchValue) }`)
			}
		}
		rootValue = searchValue
	}

	const onSearchClick = () => {
		if (rootValue !== searchValue) {
			if (searchValue) {
				dispatch(setToSearchData(null))
				dispatch(fetchSearch({ value: searchValue, limit: undefined }))
				navigate(`search?${ createParams(searchValue) }`, { replace: true })
			}
		}
		rootValue = searchValue
	}

	return (
		<div className={ s.search }>
			<div className={ s.search__input_wr }>
				<input
					value={ searchValue }
					onKeyDown={ (e) => handleKey(e) } onChange={ (e) => onChangeValue(e) } type='text'
					placeholder='Search for breeds by name'/>
				<button onClick={ () => onSearchClick() }/>
			</div>
			<SearchPanelButtons/>
		</div>
	)
}

export default SearchPanel
