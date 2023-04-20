import { setupWorker } from 'msw'
import { handlers } from './server/handler'

export const worker = setupWorker(...handlers)
