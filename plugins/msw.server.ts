import { server } from '~/test/server'

export default defineNuxtPlugin(() => {
  server.listen()
})
