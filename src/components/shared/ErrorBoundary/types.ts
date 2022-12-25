import { ReactNode } from 'react'


export type TErrorBoundaryProps = {
	children: ReactNode
	hasError: boolean
	setHasError: (b: boolean) => void
}

export type TErrorBoundaryState = {
	hasError: boolean
}

export type TErrorBoundary = {
	children: ReactNode
}

export type TErrorFallBack = {
	setHasError: (b: boolean) => void
}