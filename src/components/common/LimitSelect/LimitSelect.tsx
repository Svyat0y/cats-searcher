import React  from 'react'
import './LimitSelect.scss'
import Select from 'react-select'


const LimitSelect: React.FC = () => {
	const limitOptions = [
		{ value: '5', label: 'Limit: 5' },
		{ value: '10', label: 'Limit: 10' },
		{ value: '15', label: 'Limit: 15' },
		{ value: '20', label: 'Limit: 20' },
	]

	return (
		<Select classNamePrefix='limitSelect' options={ limitOptions } defaultValue={ limitOptions[0] }/>
	)
}

export default LimitSelect