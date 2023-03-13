import Burger                            from './Burger'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Provider }                      from 'react-redux'
import { store }                         from '../../../redux/store'
import { CSSProperties }                 from 'react'
import '../../../scss/decoratorsStorybook.scss'


export default {
	title: 'components/Ui/buttons',
	component: Burger,
	argTypes: {
		theme: {
			control: { type: 'radio', options: [ 'light', 'dark' ] }
		}
	},
	decorators: [
		(Story, { args }) => {
			const backgroundColor = args.theme === 'light' ? '#FFFFFF' : '#292929'
			const style: CSSProperties & Record<string, string> = { '--bg_white-grey': backgroundColor }

			return (
				<Provider store={ store }>
					<div style={ style } className='burger-decorator'><Story/></div>
				</Provider>
			)
		}
	],
} as ComponentMeta<typeof Burger>

const BurgerButtonProps = {
	theme: 'dark'
}

const Template: ComponentStory<typeof Burger> = (args) => <Burger { ...args } />
export const DefaultBurgerButton = Template.bind({})
DefaultBurgerButton.args = BurgerButtonProps



