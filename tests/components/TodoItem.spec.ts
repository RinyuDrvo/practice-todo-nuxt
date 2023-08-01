import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import TodoItem from '@/components/TodoItem.vue'

describe('TodoList.vue', () => {
  const defaultTodoProps = {
    todo: {
      id: 1,
      title: 'some todo',
      completed: false,
      detail: 'test text',
    },
  }

  describe('TODOタイトル', () => {
    it('タイトルがprops指定のものになっていること', async () => {
      const screen = render(TodoItem, {
        props: {
          ...defaultTodoProps,
        },
      })
      const element = await screen.findByTestId('title')
      expect(element.textContent).toBe(defaultTodoProps.todo.title)
    })

    it.todo('toggleTodo emit is triggered when clicked title or checkbox')
  })

  describe('編集ボタン', () => {
    it('ボタンに「Edit」と表示されていること', async () => {
      const screen = render(TodoItem, {
        props: {
          ...defaultTodoProps,
        },
      })
      const element = await screen.findByTestId('edit-link')
      expect(element.textContent).toBe('Edit')
    })

    it.todo('リンク先が「/todo/propsから指定されたid」になっていること')
  })

  describe('削除ボタン', () => {
    it.todo('ボタンに「Delete」と表示されていること')
    it.todo('deleteTodo emit is triggered when clicked delete button')
  })
})
