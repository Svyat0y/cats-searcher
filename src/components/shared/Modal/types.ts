import { ChangeEvent, FormEvent } from 'react'

import { AppDispatch } from '../../../redux/store'


export type TLoginModal = {
	dispatch: AppDispatch
}

export type TLoginForm = {
	onChangeName: (e: ChangeEvent<HTMLInputElement>) => void
	onClickSubmit: (e: FormEvent<HTMLFormElement>) => void
	localName: string
}
