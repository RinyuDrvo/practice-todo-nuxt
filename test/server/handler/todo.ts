import { rest } from 'msw'
import { GetTodosResponse } from '~/models/GetTodosResponse'
import { Todo } from '~/models/Todo'

/** todo機能モックAPIハンドラ */
export const todoHandlers = [
  rest.get('api/todos', (_, res, ctx) => {
    const todos: Todo[] = [
      {
        id: 1,
        title: 'task1',
        detail: 'hoge',
        completed: false,
      },
      {
        id: 2,
        title: 'task2',
        detail: 'fuga',
        completed: false,
      },
    ]
    const response: GetTodosResponse = { todos }
    return res(ctx.status(200), ctx.json(response))
  }),
]
