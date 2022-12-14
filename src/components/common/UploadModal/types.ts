import { AppDispatch } from '../../../redux/store'


export type TUploadModal = {
	showModal: boolean
	message: string
	isLoaded: boolean
}

export type TFileUploader = {
	dispatch: AppDispatch
	message: string
	isLoaded: boolean
}