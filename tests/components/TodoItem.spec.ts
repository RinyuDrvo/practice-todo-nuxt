import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import TodoItem from '@/components/TodoItem.vue'
import { Todo } from '~/models/Todo'

describe('TodoList component test', () => {
  const defaultTodoProps: Todo = {
    id: 1,
    title: 'some todo',
    completed: false,
    detail: 'test text',
  }

  it('can mount components', async () => {
    const screen = render(TodoItem, {
      props: {
        todo: defaultTodoProps,
      },
    })
    const element = await screen.findByTestId('edit-link')
    expect(element.textContent).toBe('Edit')
  })

  it.todo('show TODO title')
  it.todo('toggleTodo emit is triggered when clicked title or checkbox')
  it.todo('deleteTodo emit is triggered when clicked delete button')
})
