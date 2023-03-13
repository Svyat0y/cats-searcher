import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Provider }                      from 'react-redux'
import { store }                         from '../../../redux/store'
import { BrowserRouter as Router }       from 'react-router-dom'
import { Button }                        from '../index'
import { CSSProperties }                 from 'react'


export default {
	title: 'components/Ui/breadcrumbs',
	component: Button,
	argTypes: {
		name: {
			type: 'string',
			options: [ 'breeds', 'american curl' ],
			control: {
				type: 'radio'
			}
		},
		theme: {
			control: { type: 'radio', options: [ 'light', 'dark' ] }
		}
	},
	decorators: [
		(Story, { args }) => {
			const backgroundColor = args.theme === 'light' ? '#FBE0DC' : '#543C3D'
			const style: CSSProperties & Record<string, string> = { '--bg_input_search': backgroundColor }

			return (
				<Provider store={ store }>
					<Router>
						<div style={ style }><Story/></div>
					</Router>
				</Provider>
			)
		},
	],
	parameters: {
		controls: {
			exclude: [ 'onclick', 'linkTo', 'link', 'status', 'modalUpload', 'modal', 'upload', 'disabled', 'breadCrumbs' ]
		},
	},
} as ComponentMeta<typeof Button>

const defaultButtonProps = {
	name: 'breeds',
	isActive: false,
	breadCrumbs: true,
	theme: 'dark'
}

const Template: ComponentStory<typeof Button> = (args) => <Button { ...args }/>
export const DefaultButton = Template.bind({})
DefaultButton.args = defaultButtonProps