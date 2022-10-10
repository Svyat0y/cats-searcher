import React, { useEffect } from 'react'
import s                    from './SearchComponent.module.scss'

import { useAppDispatch } from '../../redux/store'
import { setActiveBtn }   from '../../redux/voting/slice'

import { SearchedItems } from '../../components'
import { ContentHeader } from '../common'


const SearchComponent: React.FC = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(setActiveBtn('Search'))
	}, [])

	return (
		<>
			<div className={ s.search_wr }>
				<ContentHeader/>
				<SearchedItems dispatch={ dispatch }/>
			</div>
		</>
	)
}

export default SearchComponent