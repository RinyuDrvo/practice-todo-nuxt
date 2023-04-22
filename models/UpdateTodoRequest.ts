import { Todo } from './Todo'

/** Todo登録リクエストモデル */
export type UpdateTodoRequest = Omit<Todo, 'id'>
