<!-- This example requires Tailwind CSS v2.0+ -->
<script lang="ts" setup>
import { useHead } from '#imports'

useHead({
  htmlAttrs: {
    class: 'h-full bg-gray-100',
  },
  bodyAttrs: {
    class: 'h-full',
  },
})
</script>

<template>
  <h1 class="text-center flex items-center justify-center h-screen w-screen text-8xl">
    Polcraz website
  </h1>
</template>
