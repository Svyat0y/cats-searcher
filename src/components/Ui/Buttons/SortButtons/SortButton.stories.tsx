import { Meta, Story }  from '@storybook/react'
import { SortButtons }  from '../../index'
import { TSortButtons } from './types'


export default {
	title: 'components/buttons',
	component: SortButtons,
	parameters: {
		controls: {
			exclude: [ 'dispatch', 'pageNumberForUI', 'setSearchParams', 'status', 'filters' ]
		}
	},
} as Meta<TSortButtons>

const sortButtonsProps = {
	filters: {
		value: 'All breeds',
		limit: '5',
		order: 'asc',
		page: 0,
		type: '',
	},
	setSearchParams: (obj: string) => 'string'
}
const PrimaryButtons: Story<TSortButtons> = (args) => <SortButtons { ...args }/>
export const PrimarySortButtons = PrimaryButtons.bind({})

PrimarySortButtons.args = sortButtonsProps
