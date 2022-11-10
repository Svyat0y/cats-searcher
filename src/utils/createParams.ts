import qs from 'qs'


export const createParams = (value: string, limit: string, order: string, page: number, type?: string) => {
	return qs.stringify({
		q: value,
		limit,
		order,
		page,
		type,
	})
}