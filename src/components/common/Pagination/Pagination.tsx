import React           from 'react'
import s               from '../../Voting/Voting.module.scss'
import { TPagination } from './types'

import { Button } from '../index'


const Pagination: React.FC<TPagination> = ({ zeroPage, lastPage, onClickPrev, onClickNext }) => {

	return (
		<div className={ s.content__pagination_wr }>
			<div className={ s.prev }><Button disabled={ zeroPage } onclick={ onClickPrev } name='<<' linkTo=''/></div>
			<div className={ s.next }><Button disabled={ lastPage } onclick={ onClickNext } name='>>' linkTo=''/></div>
		</div>
	)
}

export default Pagination