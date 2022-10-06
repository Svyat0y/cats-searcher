export type TButton = {
	name: string
	isActive?: boolean
	linkTo?: string
	onclick?: () => void
	disabled?: boolean | null
}
