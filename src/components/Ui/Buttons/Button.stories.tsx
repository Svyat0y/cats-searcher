import { Meta, Story } from '@storybook/react'
import { Button }      from '../index'
import { TButton }     from './types'


export default {
	title: 'components/buttons',
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
	},
	parameters: {
		controls: {
			exclude: [ 'breadCrumbs', 'onclick', 'linkTo' ]
		},
	}
} as Meta<TButton>

const defaultButtonProps = {
	isActive: false,
	disabled: false,
	modalUpload: false,
	upload: false,
	name: 'Upload',
}
const uploadButtonProps = {
	isActive: false,
	disabled: false,
	modalUpload: false,
	upload: true,
	name: 'Upload',
}
const uploadPendingButtonProps = {
	sActive: false,
	disabled: false,
	modalUpload: true,
	upload: false,
	name: 'Upload Photo',
	status: 'pending',
}

const Primary: Story<TButton> = (args) => <Button { ...args }/>
export const DefaultButton = Primary.bind({})
DefaultButton.args = defaultButtonProps

const Upload: Story<TButton> = (args) => <Button { ...args }/>
export const UploadButton = Upload.bind({})
UploadButton.args = uploadButtonProps

const UploadPending: Story<TButton> = (args) => <Button { ...args }/>
export const UploadPendingButton = UploadPending.bind({})
UploadPendingButton.args = uploadPendingButtonProps