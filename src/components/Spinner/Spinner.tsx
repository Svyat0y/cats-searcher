import React            from 'react'
import s                from './Spinner.module.scss'
import { MutatingDots } from 'react-loader-spinner'


const Spinner: React.FC = () => {
	return (
		<div className={ s.wrapper }>
			<MutatingDots
				height='100'
				width='100'
				color='#FF868E'
				secondaryColor='#FF868E'
				radius='12.5'
				ariaLabel='mutating-dots-loading'
				visible={ true }
			/>
		</div>
	)
}

export default Spinner
