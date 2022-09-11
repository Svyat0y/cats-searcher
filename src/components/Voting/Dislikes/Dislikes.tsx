import React from 'react'
import s     from './Dislikes.module.scss'

import { TDataObj }  from '../../../redux/voting/types'
import { TDislikes } from './types'


const Dislikes: React.FC<TDislikes> = ({ unlikeData, status }) => {

	const noItemsBoolean = (unlikeData.length === 0 && status === 'success')

	return (
		<>
			{ noItemsBoolean && <div className='noItemFound '><span>No item found</span></div> }
			<div className={ s.dislikes }>
				{ unlikeData?.map((el: TDataObj) => {
					return (
						<div className={ s.dislikes__img_wr } key={ el?.id }>
							<img src={ el?.url } alt='image'/>
						</div>
					)
				}) }
			</div>
		</>
	)
}

export default Dislikes
