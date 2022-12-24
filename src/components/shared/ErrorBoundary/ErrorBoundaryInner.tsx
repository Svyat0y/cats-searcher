import { Component }                                from 'react'
import { TErrorBoundaryProps, TErrorBoundaryState } from './types'


class ErrorBoundaryInner extends Component<TErrorBoundaryProps, TErrorBoundaryState> {
	constructor(props: TErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError() {
		return { hasError: true }
	}

	componentDidUpdate(prevProps: TErrorBoundaryProps, _previousState: TErrorBoundaryProps) {
		if (!this.props.hasError && prevProps.hasError) {
			this.setState({ hasError: false })
		}
	}

	componentDidCatch() {
		this.props.setHasError(true)
	}

	render() {
		return this.props.children
	}
}

export default ErrorBoundaryInner