import React        from 'react'
import s            from './SearchPanel.module.scss'
import { Link }     from 'react-router-dom'
import { children } from 'dom7'


const SearchPanelIcon = ({ children, page, location }) => {
	return (
		<Link to={ `voting/likes?page=${ page + 1 }` } className={ `${ s.iconWrapper } ${ location ? s.iconActive : '' }` }>
			{ children }
		</Link>
	)
}

export default SearchPanelIcon