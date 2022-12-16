export type TButton = {
	name: string
	isActive?: boolean
	linkTo?: string
	onclick?: () => void
	disabled?: boolean | null
	breadCrumbs?: boolean
	upload?: boolean
	modalUpload?: boolean
	status?: string
}

export type TRefreshButton = {
	onclick?: () => void
}
