export interface IVoteData {
	userId: string,
	voteData: TDataObj | null,
	likeData: TDataObj[],
	unlikeData: TDataObj[],
	favouriteData: TDataObj[],
	infoMessage: TInfoInfoMessage[]
	status: Status
}

export type TInfoInfoMessage = {
	id?: string,
	message: string,
	time: string,
}

export type TDataObj = {
	height: number
	id: string
	url: string
	width: number
} | null

export type TDataImgVoted = {
	country_code: string,
	id: number,
	image_id: string,
	message: string,
	value: number,
}

export type TVotingFavourites = {
	message: string,
	id: number
}

export enum Status {
	PENDING = 'pending',
	SUCCESS = 'success',
	ERROR = 'error',
}
