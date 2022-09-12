import React    from 'react'
import { Puff } from 'react-loader-spinner'


const SmallSpinner = () => {
	return (
		<div>
			<Puff
				height='20'
				width='40'
				radius={ 20 }
				color='#FF868E'
				ariaLabel='puff-loading'
				visible={ true }
			/>
		</div>
	)
}

export default SmallSpinner
