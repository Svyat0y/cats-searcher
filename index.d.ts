declare module '*.scss' {
	const content: { [key: string]: any }
	export = content
}

declare module '*.png' {
	const content: any
	export default content
}

declare module '*.svg' {
	const content: any
	export default content
}
