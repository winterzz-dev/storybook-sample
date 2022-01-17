import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from '../Button/Button'

export default {
	title: 'Example/Button',
	component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const RedBtn = Template.bind({})
RedBtn.args = {
	color: 'red',
	children: 'Button'
}

export const OrangeBtn = Template.bind({})
OrangeBtn.args = {
	color: 'orange',
	children: 'Button'
}

export const BigBtn = Template.bind({})
OrangeBtn.args = {
	color: 'orange',
	big: true,
	children: 'Button'
}
