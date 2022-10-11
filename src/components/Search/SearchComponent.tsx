import React, { useEffect } from 'react'

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
			<div className='content'>
				<div className='content__body'>
					<ContentHeader/>
					<SearchedItems dispatch={ dispatch }/>
				</div>
			</div>
		</>
	)
}

export default SearchComponent