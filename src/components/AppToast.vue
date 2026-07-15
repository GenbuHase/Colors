<script setup lang="ts">
import { useClipboard } from "../composables/useClipboard.ts";

const { message, visible } = useClipboard();
</script>

<template>
  <div
    class="toast"
    :class="{ 'toast--show': visible }"
    role="status"
    aria-live="polite"
    :hidden="!visible"
  >
    {{ message }}
  </div>
</template>
