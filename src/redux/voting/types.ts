export interface IVoteData {
	voteData: dataObj | null,
	likeData: dataObj[],
	unlikeData: dataObj[],
	favoriteData: dataObj[],
	infoLikes: TInfoLike[]
	status: Status
}

export type TInfoLike = {
	id: string,
	message: string,
	time: number[],
}

export type dataObj = {
	height: number
	id: string
	url: string
	width: number
}

export enum Status {
	PENDING = 'pending',
	SUCCESS = 'success',
	ERROR = 'error',
}
