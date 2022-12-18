import { FC, useEffect, useState, ChangeEvent, FormEvent } from 'react'
import s                                                   from './SearchPanel.module.scss'
import qs                                                  from 'qs'
import { useNavigate }                                     from 'react-router'

import { useSelector }                                  from 'react-redux'
import { useAppDispatch }                               from '../../redux/store'
import { setFilters, setIsLoadingData, setSearchValue } from '../../redux/Search/slice'
import { selectSearch }                                 from '../../redux/Search/selectors'

import SearchPanelButtons from './SearchPanelButtons'


const createParams = (value: string | null) => qs.stringify({ q: value })

const SearchPanel: FC = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const [ localValue, setLocalValue ] = useState<string | null>('')
	const { searchValue, status } = useSelector(selectSearch)
	const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => dispatch(setSearchValue(e.target.value))

	useEffect(() => {
		setLocalValue(searchValue)
	}, [ status ])

	const createNewFilters = (searchValue: string | null) => {
		return {
			value: searchValue,
			limit: '5',
			order: 'asc',
			page: 0
		}
	}

	const onClick = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (localValue !== searchValue) {
			if (searchValue) {
				dispatch(setIsLoadingData(true))
				dispatch(setFilters(createNewFilters(searchValue)))
				navigate(`search?${ createParams(searchValue) }`)
			}
		}
	}

	return (
		<div className={ s.search }>
			<form className={ s.search__input_wr } onSubmit={ onClick }>
				<input
					value={ searchValue ? searchValue : '' }
					onChange={ (e) => onChangeValue(e) } type='text'
					placeholder='Search for breeds by name'/>
				<button></button>
			</form>
			<SearchPanelButtons/>
		</div>
	)
}

export default SearchPanel
