<template>
  <div class="flex h-screen items-center justify-center bg-gray-200">
    <div
      class="bg-white p-8 border-gray-300 border rounded-md shadow-lg max-w-xl w-full"
    >
      <div class="text-center">
        <p class="mt-2 text-sm text-gray-500">
          {{ error?.message }}
        </p>
        <div class="mt-6">
          <nuxt-link
            to="/"
            class="text-base font-medium text-red-600 hover:text-red-500"
          >
            ホームに戻る
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const error = useError()
</script>
