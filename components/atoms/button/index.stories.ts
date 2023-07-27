import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './index.vue'

type Story = StoryObj<typeof Button>

const meta: Meta<typeof Button> = {
  title: 'button',
  component: Button,
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: "<Button v-bind='args' />",
  }),
}

export const Default: Story = {
  args: {
    label: 'Button',
  },
}

export const Delete: Story = {
  args: {
    label: 'Delete',
  },
}

export default meta
