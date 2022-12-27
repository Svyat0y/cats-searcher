export type TPagination = {
	firstPage: boolean
	lastPage: boolean | null
	onClickNext: () => void
	onClickPrev: () => void
	page?: number
}