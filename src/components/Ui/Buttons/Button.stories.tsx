import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button }                        from '../index'
import { CSSProperties }                 from 'react'


export default {
	title: 'components/Ui/buttons',
	component: Button,
	argTypes: {
		name: {
			type: 'string',
			description: 'button text',
			defaultValue: 'Upload',
			options: [ 'Upload', 'Upload Photo', 'Next', 'Prev' ],
			control: {
				type: 'radio'
			}
		},
		status: {
			type: 'string',
			description: 'status of fetch request',
			defaultValue: 'success',
			options: [ 'success', 'pending', 'error' ],
			control: {
				type: 'radio'
			}
		},
		theme: {
			control: { type: 'radio', options: [ 'light', 'dark' ] }
		}
	},
	parameters: {
		controls: {
			exclude: [ 'breadCrumbs', 'onclick', 'linkTo', 'link' ]
		},
	},
	decorators: [
		(Story, { args }) => {
			const backgroundColor = args.theme === 'light' ? '#FBE0DC' : '#543C3D'
			const style: CSSProperties & Record<string, string> = { '--bg_input_search': backgroundColor }

			return <div style={ style }><Story/></div>
		}
	]
} as ComponentMeta<typeof Button>

const defaultButtonProps = {
	isActive: false,
	disabled: false,
	modalUpload: false,
	upload: false,
	name: 'Upload',
	status: 'success',
	theme: 'dark',
}
const uploadButtonProps = {
	isActive: false,
	disabled: false,
	modalUpload: false,
	upload: true,
	name: 'Upload',
	status: 'success',
	theme: 'dark',
}
const uploadPendingButtonProps = {
	sActive: false,
	disabled: false,
	modalUpload: true,
	upload: false,
	name: 'Upload Photo',
	status: 'pending',
	theme: 'dark',
}

const Template: ComponentStory<typeof Button> = (args) => <Button { ...args }/>
export const PrimaryButton = Template.bind({})
PrimaryButton.args = defaultButtonProps
export const UploadButton = Template.bind({})
UploadButton.args = uploadButtonProps
export const UploadPendingButton = Template.bind({})
UploadPendingButton.args = uploadPendingButtonProps