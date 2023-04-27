import { describe, it, expect } from 'vitest'
import { mountSuspended, registerEndpoint } from 'vitest-environment-nuxt/utils'
import TodoList from '~/components/TodoList.vue'
import { Todo } from '~/models/Todo'

describe('TodoList component test', () => {
  it('can mount components', async () => {
    const component = await mountSuspended(TodoList)
    expect(component.html()).toMatchSnapshot(`
      "<h1>TODO LIST</h1>"
    `)
  })

  it('can mock fetch requests', async () => {
    const response: Todo[] = [
      {
        id: 1,
        title: 'hoge',
        completed: true,
        detail: 'fuga',
      },
    ]
    registerEndpoint('/api/todos', () => response)
    const component = await mountSuspended(TodoList)
    expect(component.html()).toMatchSnapshot(`
      "hoge"
    `)
  })
})
