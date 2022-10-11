import React    from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { TSkeletonLoader } from './types'


const SkeletonLoader: React.FC<TSkeletonLoader> = ({ count }) => {
	return (
		<div className='items'>
			{ Array(count).fill('').map((_, i) => (
				<div key={ i } className='itemsImg_wr unHoverClass'>
					<Skeleton duration={ 1.4 } borderRadius={ 20 } baseColor='#343434' highlightColor='#404040' className='skeleton'/>
				</div>
			)) }
		</div>
	)
}

export default SkeletonLoader