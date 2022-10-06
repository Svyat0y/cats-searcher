import React, { useEffect } from 'react'
import s                    from './SearchComponent.module.scss'

import { Search }             from './index'
import { BackButton, Button } from '../common/Buttons'
import { useLocation }        from 'react-router-dom'
import { useSelector }        from 'react-redux'
import { selectVoting }       from '../../redux/voting/selectors'
import { useAppDispatch }     from '../../redux/store'
import { setActiveBtn }       from '../../redux/voting/slice'


const SearchComponent: React.FC = () => {
	const location = useLocation()
	const dispatch = useAppDispatch()
	const locSearch = location.pathname.includes('search')
	const { activeButton } = useSelector(selectVoting)

	useEffect(() => {
		dispatch(setActiveBtn('Search'))
	}, [])

	return (
		<>
			<Search/>
			<div className={ s.search_wr }>
				<div className='breadCrumbs'>
					<BackButton/>
					<Button
						name={ activeButton }
						isActive={ locSearch }/>
				</div>
				<div>search</div>
			</div>
		</>
	)
}

export default SearchComponent