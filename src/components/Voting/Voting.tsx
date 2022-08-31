import React      from 'react'
import s          from './Voting.module.scss'
import { Search } from '../Search'


const Voting = () => {
	return (
		<div className={ s.voting }>
			<Search/>
		</div>
	)
}

export default Voting
