import { worker } from '~/test/browser'

export default defineNuxtPlugin(() => {
  worker.start()
})
