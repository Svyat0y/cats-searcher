export type TPagination = {
	zeroPage: boolean
	lastPage: boolean | null
	onClickNext: () => void
	onClickPrev: () => void
}