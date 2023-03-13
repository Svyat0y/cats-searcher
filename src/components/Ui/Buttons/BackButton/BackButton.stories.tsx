import { BackButton }                    from '../../index'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BrowserRouter as Router }       from 'react-router-dom'
import { CSSProperties }                 from 'react'


export default {
	title: 'components/Ui/buttons',
	component: BackButton,
	argTypes: {
		theme: {
			control: { type: 'radio', options: [ 'light', 'dark' ] }
		}
	},
	decorators: [
		(Story, { args }) => {
			const backgroundColor = args.theme === 'light' ? '#FBE0DC' : '#543C3D'
			const style: CSSProperties & Record<string, string> = { '--bg_input_search': backgroundColor }

			return (
				<div style={ style }>
					<Router>
						<Story/>
					</Router>
				</div>
			)
		}
	],
} as ComponentMeta<typeof BackButton>

const backBtnProps = {
	theme: 'dark'
}

const Template: ComponentStory<typeof BackButton> = (args) => <BackButton { ...args }/>
export const DefaultBackButton = Template.bind({})
DefaultBackButton.args = backBtnProps