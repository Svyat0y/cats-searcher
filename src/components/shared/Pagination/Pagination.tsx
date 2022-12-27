import { FC }          from 'react'
import s               from './Pagination.module.scss'
import { TPagination } from './types'

import Button from '../../Ui/Buttons/Button'


const Pagination: FC<TPagination> = ({ firstPage, lastPage, onClickPrev, onClickNext, page }) => {

	return (
		<div className={ s.wrapper }>
			<div className={ s.prev }><Button disabled={ firstPage } onclick={ onClickPrev } name='PREV' linkTo=''/></div>
			<div className={ s.page }>{ page }</div>
			<div className={ s.next }><Button disabled={ lastPage } onclick={ onClickNext } name='NEXT' linkTo=''/></div>
		</div>
	)
}

export default Pagination