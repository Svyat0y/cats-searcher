import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SortButtons }                   from '../../index'


export default {
	title: 'components/buttons',
	component: SortButtons,
	parameters: {
		controls: {
			exclude: [ 'dispatch', 'pageNumberForUI', 'setSearchParams', 'status', 'filters' ]
		}
	},
} as ComponentMeta<typeof SortButtons>

const sortButtonsProps = {
	filters: {
		value: 'All breeds',
		limit: '5',
		order: 'asc',
		page: 0,
		type: '',
	},
	setSearchParams: (obj: string) => ''
}
const PrimaryButtons: ComponentStory<typeof SortButtons> = (args) => <SortButtons { ...args }/>
export const PrimarySortButtons = PrimaryButtons.bind({})

PrimarySortButtons.args = sortButtonsProps
