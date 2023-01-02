export interface IVote {
	voteData: TDataObj | null
	likeData: TData[] | null
	favoritesData: TData[] | null
	unlikeData: TDataObj[]
	onFavourites: TDataObj[]
	infoMessage: TInfoInfoMessage[]
	status: Status
	likePage: number
	favPage: number
	activeButton: string
}

type TImage = {
	id: string
	url: string
}

export type TData = {
	country_code?: string
	created_at?: string
	id: number
	image: TImage
	image_id: string
	sub_id: string
	user_id?: string
	value?: number
} | null

export type TInfoInfoMessage = {
	id?: string
	message: string
	time: string
}

export type TDataObj = {
	height: number
	id: string
	url: string
	width: number
} | null

export type TDataImgVoted = {
	country_code: string
	id: number
	image_id: string
	message: string
	value: number
}

export type TVotingFavourites = {
	message: string
	id: number
}

export enum Status {
	PENDING = 'pending',
	SUCCESS = 'success',
	ERROR = 'error',
}
