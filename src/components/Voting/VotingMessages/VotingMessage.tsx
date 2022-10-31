import React               from 'react'
import s                   from './VotingMessage.module.scss'
import { TVotingMessages } from './types'

import MessageIcons from './MessageIcons'


const VotingMessage: React.FC<TVotingMessages> = ({ id, message, time }) => {

	return (
		<div className={ s.voting__message_wr }>
			<span className={ s.voting__time }>{ time }</span>
			<span className={ s.voting__desc }>
					Image ID: <span className={ s.id_desc }>{ id }</span> { message } </span>
			<div className={ s.info__icon_wr }>
				<MessageIcons message={ message }/>
			</div>
		</div>
	)
}

export default VotingMessage
