import { FC }              from 'react'
import s                   from './Skeleton.module.scss'
import { TSkeletonLoader } from './types'
import Skeleton            from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { useSelector } from 'react-redux'
import { themeFilter } from '../../../redux/theme/selectors'


const SkeletonLoader: FC<TSkeletonLoader> = ({ count }) => {
	const { theme } = useSelector(themeFilter)
	const light = theme === 'light'

	return (
		<div className='items'>
			{ Array(count).fill('').map((_, i) => (
				<div key={ i } className='items__imgWrapper unHoverClass'>
					<Skeleton
						duration={ 1.4 }
						borderRadius={ 20 }
						baseColor={ light ? '#F8F8F7' : '#343434' }
						highlightColor={ light ? '#E8E8E7' : '#404040' }
						className={ s.skeleton }/>
				</div>
			)) }
		</div>
	)
}

export default SkeletonLoader