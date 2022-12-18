import React        from 'react'
import { TFilters } from '../../../redux/Search/types'


export type TSelectContainer = {
	children: React.ReactNode
	filters: TFilters
	limit?: boolean
	label: string
}