import { describe, it, expect } from 'vitest'
import { mountSuspended } from 'vitest-environment-nuxt/utils'
import MockComponent from '~/tests/mocks/MockComponent.vue'

describe('mock component test', () => {
  it('can mount components', async () => {
    const component = await mountSuspended(MockComponent)
    expect(component.html()).toMatchInlineSnapshot(`
      "<div>Mocked 1 * 2 = 2</div>"
    `)
  })
})
