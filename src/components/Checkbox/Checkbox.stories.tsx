import {  Meta, StoryObj }  from "@storybook/react"
import { Checkbox, CheckboxProps } from "./Checkbox";
import { Text } from '../Text/Text'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    decorators: [
        (Story) => {
            return (
                <div className="flex items-center gap-2">
                    {Story()}
                    <Text size="sm">
                        Checkbox Default
                    </Text>
                </div>
            )
        }
    ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
