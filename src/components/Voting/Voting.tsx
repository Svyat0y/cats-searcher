import React                  from 'react'
import s                      from './Voting.module.scss'
import { Search }             from '../Search'
import { BackButton, Button } from '../common/Buttons'

import testImg from '../../assets/images/voting/1.jpg'

import NavButtons     from './NavButtons'
import VotingMessages from './VotingMessages'


const Voting: React.FC = () => {
	return (
		<div className={ s.voting }>
			<Search/>
			<div className={ s.voting__body }>
				<div className={ s.voting__breadCrumbs }>
					<BackButton/>
					<Button name='Voting'/>
				</div>
				<div className={ s.voting__img_wr }>
					<img src={ testImg } alt='image'/>
					<NavButtons/>
				</div>
				<VotingMessages/>
			</div>
		</div>
	)
}

export default Voting
