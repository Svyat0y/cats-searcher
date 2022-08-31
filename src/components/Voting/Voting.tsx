import React      from 'react'
import s          from './Voting.module.scss'
import { Search } from '../Search'
import { Button } from '../common/Button'


const Voting: React.FC = () => {
	return (
		<div className={ s.voting }>
			<Search/>
			<Button name='Voting'/>
		</div>
	)
}

export default Voting
