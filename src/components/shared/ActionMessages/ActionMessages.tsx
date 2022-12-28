import { FC }              from 'react'
import s                   from './ActionMessages.module.scss'
import { TVotingMessages } from './types'

import MessageIcons from './MessageIcons'


const ActionMessages: FC<TVotingMessages> = ({ id, message, time }) => {

	return (
		<div className={ s.wrapper }>
			<span className={ s.time }>{ time }</span>
			<span className={ s.description }>
					Image ID: <span className={ s.descId }>{ id }</span> { message } </span>
			<div className={ s.iconWrapper }>
				<MessageIcons message={ message }/>
			</div>
		</div>
	)
}

export default ActionMessages
