export type TButton = {
	name: string
	isActive?: boolean
	linkTo?: string
	onclick?: () => void
	disabled?: boolean | null
	breadCrumbs?: boolean
	upload?: boolean
}

export type TRefreshButton = {
	onclick?: () => void
}
