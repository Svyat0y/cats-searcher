import React, { FC }        from 'react'
import s                    from './SelectContainer.module.scss'
import { TSelectContainer } from './types'


const SelectContainer: FC<TSelectContainer> = ({ children, filters, limit, label }) => {
	
	return (
		<div className={ `${ s.wrapper } ${ limit ? s.withRefreshBtn : '' }` }>
			{ filters.type && <span className={ s.label }>{ label }</span> }
			{ children }
		</div>
	)
}

export default SelectContainer