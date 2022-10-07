import React, { useEffect } from 'react'
import s                    from './SearchComponent.module.scss'
import { useLocation }      from 'react-router-dom'

import { useSelector }    from 'react-redux'
import { useAppDispatch } from '../../redux/store'
import { setActiveBtn }   from '../../redux/voting/slice'
import { selectSearch }   from '../../redux/Search/selectors'
import { selectVoting }   from '../../redux/voting/selectors'
import { TSearchData }    from '../../redux/Search/types'

import { Search }             from './index'
import { BackButton, Button } from '../common/Buttons'
import { Spinner }            from '../Spinner'


const SearchComponent: React.FC = () => {
	const location = useLocation()
	const dispatch = useAppDispatch()
	const locSearch = location.pathname.includes('search')

	const { searchData, status } = useSelector(selectSearch)
	const { activeButton } = useSelector(selectVoting)

	const emptyData = searchData.length === 0


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
				{ emptyData && status === 'success' && <div className='noItemFound'>Nothing found, please enter another breed</div> }
				{
					status === 'pending'
						? <Spinner/>
						: <div className='items'>
							{
								searchData.map((el: TSearchData) => {
									return (
										<div className={ `${ 'itemsImg_wr' }` } key={ el.id }>
											<div>{ el.name }</div>
											<img src={ el.url } alt='image'/>
										</div>
									)
								})
							}
						</div>
				}
			</div>
		</>
	)
}

export default SearchComponent