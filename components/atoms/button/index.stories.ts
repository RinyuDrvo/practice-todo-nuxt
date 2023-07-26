import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './index.vue'

type Story = StoryObj<typeof Button>

const meta: Meta<typeof Button> = {
  title: 'button',
  component: Button,
}

export const Default: Story = {
  render: () => ({
    components: { Button },
    template: "<Button label='delete' />",
  }),
}

export default meta
