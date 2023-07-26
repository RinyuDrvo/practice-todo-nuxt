<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <button class="bg-red-500 text-white px-2 py-1 rounded">
    {{ props.label }}
  </button>
</template>
