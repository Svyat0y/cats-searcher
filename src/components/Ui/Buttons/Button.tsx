import { FC }      from 'react'
import s           from './Button.module.scss'
import { TButton } from './types'

import { SmallSpinner } from '../../index'


const Button: FC<TButton> =
	({ name, isActive, onclick, disabled, breadCrumbs, upload, modalUpload, status }) => {

		return (
			<button
				onClick={ onclick }
				disabled={ disabled }
				className={ `${ s.btn } ${ isActive && s.btnActive } ${ disabled ? s.btnNoActive : '' } ${ breadCrumbs ? s.breadCrumbs : '' }` }>
				{ upload && <div className={ s.uploadImg }/> }
				{ (modalUpload && status === 'pending') &&
					<div style={ { marginRight: '10px' } }>
						<SmallSpinner height={ 20 } width={ 20 } color='#FFFFFF'/>
					</div> }
				{ name }
			</button>
		)
	}

export default Button
