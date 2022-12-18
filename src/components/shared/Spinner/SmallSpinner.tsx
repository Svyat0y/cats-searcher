import { FC }            from 'react'
import s                 from './Spinner.module.scss'
import { TSmallSpinner } from './types'

import { Puff } from 'react-loader-spinner'


const SmallSpinner: FC<TSmallSpinner> = ({ height, width, color }) => {

	return (
		<div className={ s.small }>
			<Puff
				height={ height }
				width={ width }
				radius={ 20 }
				color={ color }
				ariaLabel='puff-loading'
				visible={ true }
			/>
		</div>
	)
}

export default SmallSpinner
