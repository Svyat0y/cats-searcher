import React from 'react'
import s     from './Dislikes.module.scss'

import { TDataObj }  from '../../../redux/voting/types'
import { TDislikes } from './types'


const Dislikes: React.FC<TDislikes> = ({ unlikeData }) => {

	return (
		<div className={ s.dislikes }>
			{ unlikeData?.map((el: TDataObj, i) => {
				return (
					<div className={ s.dislikes__img_wr } key={ el?.id }>
						<img src={ el?.url } alt='image'/>
					</div>
				)
			}) }
		</div>
	)
}

export default Dislikes
