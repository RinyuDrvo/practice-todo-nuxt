import { setupServer } from 'msw/node'
import { handlers } from './handler'

/** mswサーバ */
export const server = setupServer(...handlers)
