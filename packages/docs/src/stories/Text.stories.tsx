import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children: 'Exemple test',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
