import React                  from 'react'
import s                      from './Voting.module.scss'
import { Search }             from '../Search'
import { BackButton, Button } from '../common/Buttons'


const Voting: React.FC = () => {
	return (
		<div className={ s.voting }>
			<Search/>
			<BackButton/>
			<Button name='Voting'/>
		</div>
	)
}

export default Voting
