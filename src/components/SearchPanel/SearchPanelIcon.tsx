import { FC }               from 'react'
import s                    from './SearchPanel.module.scss'
import { Link }             from 'react-router-dom'
import { TSearchPanelIcon } from './types'


const SearchPanelIcon: FC<TSearchPanelIcon> = ({ children, page, location, route }) => {

	return (
		<Link
			role='button'
			to={ `${ route }?page=${ page + 1 }` }
			className={ `${ s.iconWrapper } ${ location ? s.iconActive : '' }` }>
			{ children }
		</Link>
	)
}

export default SearchPanelIcon