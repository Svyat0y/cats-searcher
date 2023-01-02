import { RefObject } from 'react'


type userId = string

export type TFormPopup = {
	setVisiblePopup: (b: boolean) => void
	popupRef: RefObject<HTMLDivElement>
	animVisible: boolean
	setAnimVisible: (b: boolean) => void
	duration: number
	userId: userId
}

export type TNickName = {
	onClickShow: () => void
	userId: userId
}

export type TPopupClick = MouseEvent & {
	path: Node[]
}
