import { ReactNode } from 'react'
import { TFilters }  from '../../../redux/Search/types'


export type TSelectContainer = {
	children: ReactNode
	filters: TFilters
	limit?: boolean
	label: string
}