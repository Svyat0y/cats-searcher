import React                   from 'react'
import s                       from './Content.module.scss'
import { SearchPanel }         from '../index'
import { Outlet, useLocation } from 'react-router-dom'


const ContentLayout: React.FC = () => {
	const location = useLocation()

	return (
		<div className={ s.wrapper }>
			<div className={ s.wrapper__container }>
				{ location.pathname !== '/' && <SearchPanel/> }
				<Outlet/>
			</div>
		</div>
	)
}

export default ContentLayout