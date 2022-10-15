import React  from 'react'
import Select from 'react-select'


const LimitSelect: React.FC = () => {
	const limitOptions = [
		{ value: '5', label: 'Limit: 5' },
		{ value: '10', label: 'Limit: 10' },
		{ value: '15', label: 'Limit: 15' },
		{ value: '20', label: 'Limit: 20' },
	]

	return (
		<div className='selectLimitContainer'>
			<Select
				classNamePrefix='breedSelect'
				options={ limitOptions }
				defaultValue={ limitOptions[0] }
			/>
		</div>
	)
}

export default LimitSelect