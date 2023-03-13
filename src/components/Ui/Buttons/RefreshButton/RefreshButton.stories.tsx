import { RefreshButton }                 from '../../index'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CSSProperties }                 from 'react'


export default {
	title: 'components/Ui/buttons',
	component: RefreshButton,
	argTypes: {
		theme: {
			control: { type: 'radio', options: [ 'light', 'dark' ] }
		},
	},
	parameters: {
		controls: {
			exclude: [ 'onclick', 'status' ]
		}
	},
	decorators: [
		(Story, { args }) => {
			const backgroundColor = args.theme === 'light' ? '#FFFFFF' : '#282828'
			const borderColor = args.theme === 'light' ? '#FBE0DC' : '#543C3D'
			const style: CSSProperties & Record<string, string> = { '--bg_dark_grey__white': backgroundColor, '--bg_input_search': borderColor }

			return <div style={ style }><Story/></div>
		}
	]
} as ComponentMeta<typeof RefreshButton>

const refreshBtnProps = {
	status: 'success',
	onclick: () => '',
	theme: 'dark',
}

const Template: ComponentStory<typeof RefreshButton> = (args) => <RefreshButton { ...args } />
export const DefaultRefreshButton = Template.bind({})
DefaultRefreshButton.args = refreshBtnProps
