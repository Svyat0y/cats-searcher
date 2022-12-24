import { FC, useEffect, useState } from 'react'
import { TErrorBoundary }          from './types'
import { useLocation }             from 'react-router-dom'

import ErrorBoundaryInner from './ErrorBoundaryInner'
import ErrorFallBack      from './ErrorFallBack'


const ErrorBoundary: FC<TErrorBoundary> = ({ children }) => {
	const [ hasError, setHasError ] = useState(false)
	const location = useLocation()

	useEffect(() => {
		if (hasError) {
			setHasError(false)
		}
	}, [ location.key ])

	return (
		<ErrorBoundaryInner
			hasError={ hasError }
			setHasError={ setHasError }
		>
			{
				hasError
					? <ErrorFallBack setHasError={ setHasError }/>
					: children
			}
		</ErrorBoundaryInner>
	)
}

export default ErrorBoundary