export type TPagination = {
	firstPage: boolean
	lastPage: boolean
	onClickNext: () => void
	onClickPrev: () => void
	page?: number
}