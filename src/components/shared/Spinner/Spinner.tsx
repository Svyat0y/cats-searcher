import { FC }           from 'react'
import s                from './Spinner.module.scss'
import { MutatingDots } from 'react-loader-spinner'


const Spinner: FC = () => {

	return (
		<div className={ s.large }>
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
