import { Todo } from './Todo'

/** Todo登録リクエストモデル */
export type InsertTodoRequest = Omit<Todo, 'id' | 'completed'>
