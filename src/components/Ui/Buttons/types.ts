export type TButton = {
	name: string
	isActive?: boolean
	linkTo?: string
	onclick?: () => void
	disabled?: boolean
	breadCrumbs?: boolean
	upload?: boolean
	modalUpload?: boolean
	status?: string
}