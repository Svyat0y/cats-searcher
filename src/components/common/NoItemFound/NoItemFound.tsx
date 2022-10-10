import React            from 'react'
import { TNoItemFound } from './types'


const NoItemFound: React.FC<TNoItemFound> = ({ noItemsBoolean, favPage }) => {
	return (
		<div className='noItemFound'>
			<span>
				No item found.
				{ favPage && (noItemsBoolean && favPage > 0) && <div>Please return to the previous page.</div> }
			</span>
		</div>
	)
}

export default NoItemFound