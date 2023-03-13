import Close                             from './Close'
import { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
	title: 'components/Ui/buttons',
	component: Close,
	argTypes: {
		theme: { control: { type: 'radio', options: [ 'light', 'dark' ] } }
	},
	parameters: {
		controls: {
			exclude: [ 'onClick' ]
		}
	},
	decorators: [
		(Story, { args }) => {
			const bgColor = args.theme === 'light' ? '#FFFFFF' : '#343434'

			const style: Record<string, string> = {
				position: 'relative',
				margin: '-20px 0 0 -40px',
				height: '60px',
				maxWidth: '100px',
				'--bg_blackWhite': bgColor
			}

			return <div style={ style }><Story/></div>
		}
	]
} as ComponentMeta<typeof Close>

const closeBtnProps = {
	onClick: () => '',
	theme: 'dark',
}

const Template: ComponentStory<typeof Close> = (args) => <Close { ...args }/>
export const DefaultCloseButton = Template.bind({})
DefaultCloseButton.args = closeBtnProps