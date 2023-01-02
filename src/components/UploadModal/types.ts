import { DragEvent, ChangeEvent } from 'react'
import { AppDispatch }            from '../../redux/store'


type Message = string
type Status = string
type IsLoaded = boolean

export type TUploadModal = {
	showModalUpload: boolean
	message: Message
	isLoaded: IsLoaded
	status: Status
}

export type TUploadFormFooter = {
	file: File | null
	message: Message
	isLoaded: IsLoaded
	status: Status
}

export type TFileUploader = {
	dispatch: AppDispatch
	message: Message
	isLoaded: IsLoaded
	status: Status
}

export type TCustomInputFile = {
	handleDrop: (e: DragEvent<HTMLLabelElement>) => void
	handleDragEmpty: (e: DragEvent<HTMLLabelElement>) => void
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void
	imageUrl: string | ArrayBuffer | null
	file: File | null
}