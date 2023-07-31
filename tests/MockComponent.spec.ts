import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/vue'
import MockComponent from '@/tests/mocks/MockComponent.vue'

describe('mock component test', () => {
  it('can mount components', async () => {
    const component = await render(MockComponent)
    expect(component.html()).toMatchInlineSnapshot(`
      "<div>Mocked 1 * 2 = 2</div>"
    `)
  })
})
