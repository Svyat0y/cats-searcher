import React    from 'react'
import s        from './Spinner.module.scss'
import { Puff } from 'react-loader-spinner'


type TSmallSpinner = {
	height: number
	width: number
	color: string
}

const SmallSpinner: React.FC<TSmallSpinner> = ({ height, width, color }) => {
	return (
		<div className={ s.wrapper__small }>
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
