<template>
  <div class="theme-switch" role="radiogroup" aria-label="Color theme">
    <button
      v-for="option in options"
      :key="option"
      type="button"
      role="radio"
      :aria-checked="mode === option"
      @click="setMode(option)"
    >
      {{ option === "light" ? "Light" : option === "dark" ? "Dark" : "System" }}
    </button>
  </div>
</template>

<script setup lang="ts">
  import type { ThemeMode } from "../tokens/colors.ts";
  import { useTheme } from "../composables/useTheme.ts";

  const { mode, setMode } = useTheme();
  
  const options: ThemeMode[] = ["light", "dark", "system"];
</script>
