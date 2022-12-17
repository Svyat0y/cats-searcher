import { AppDispatch } from '../../redux/store'
import React           from 'react'


type Message = string
type Status = string
type IsLoaded = boolean

export type TUploadModal = {
	showModal: boolean
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
	handleDrop: (e: React.DragEvent<HTMLLabelElement>) => void
	handleDragEmpty: (e: React.DragEvent<HTMLLabelElement>) => void
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	imageUrl: string | ArrayBuffer | null
	file: File | null
}