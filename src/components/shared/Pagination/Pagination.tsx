import { FC }          from 'react'
import s               from '../../Voting/Voting.module.scss'
import { TPagination } from './types'

import Button from '../../Ui/Buttons/Button'


const Pagination: FC<TPagination> = ({ firstPage, lastPage, onClickPrev, onClickNext }) => {

	return (
		<div className={ s.content__pagination_wr }>
			<div className={ s.prev }><Button disabled={ firstPage } onclick={ onClickPrev } name='PREV' linkTo=''/></div>
			<div className={ s.next }><Button disabled={ lastPage } onclick={ onClickNext } name='NEXT' linkTo=''/></div>
		</div>
	)
}

export default Pagination