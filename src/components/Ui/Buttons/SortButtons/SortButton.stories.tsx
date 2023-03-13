import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SortButtons }                   from '../../index'
import { CSSProperties }                 from 'react'


export default {
	title: 'components/Ui/buttons',
	component: SortButtons,
	argTypes: {
		theme: {
			control: { type: 'radio', options: [ 'light', 'dark' ] }
		}
	},
	parameters: {
		controls: {
			exclude: [ 'dispatch', 'pageNumberForUI', 'setSearchParams', 'status', 'filters' ]
		}
	},
	decorators: [
		(Story, { args }) => {
			const backgroundColor = args.theme === 'light' ? '#F8F8F7' : '#343434'
			const style: CSSProperties & Record<string, string> = {
				'--bg_grey-white_white-rgba': backgroundColor,
				display: 'flex',
				alignItems: 'center',
				gap: '10px'
			}

			return <div style={ style }><Story/></div>
		}
	],
} as ComponentMeta<typeof SortButtons>

const sortButtonsProps = {
	filters: {
		value: 'All breeds',
		limit: '5',
		order: 'asc',
		page: 0,
		type: '',
	},
	setSearchParams: (params: string) => '',
	theme: 'dark'
}
const Template: ComponentStory<typeof SortButtons> = (args) => <SortButtons { ...args }/>
export const DefaultSortButtons = Template.bind({})

DefaultSortButtons.args = sortButtonsProps
