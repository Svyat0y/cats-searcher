import React, { useEffect } from 'react'
import s                    from './SearchComponent.module.scss'

import { useLocation }    from 'react-router-dom'
import { useSelector }    from 'react-redux'
import { useAppDispatch } from '../../redux/store'
import { setActiveBtn }   from '../../redux/voting/slice'
import { selectVoting }   from '../../redux/voting/selectors'

import { Search }             from './index'
import { BackButton, Button } from '../common/Buttons'


const SearchComponent: React.FC = () => {
	const location = useLocation()
	const dispatch = useAppDispatch()
	const locSearch = location.pathname.includes('search')
	const { activeButton, searchData } = useSelector(selectVoting)

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
						breadCrumbs={ true }
						name={ activeButton }
						isActive={ locSearch }/>
				</div>
				<div className='items'>
					{
						searchData && searchData?.map((el: any) => {
							const { id, name, url } = el.payload
							return (
								<div className={ `${ 'itemsImg_wr' }` } key={ id }>
									<div>{ name }</div>
									<img src={ url } alt='image'/>
								</div>
							)
						})
					}
				</div>
			</div>
		</>
	)
}

export default SearchComponent