<template>
  <div class="scale">
    <div class="scale__grid">
      <ColorSwatch
        v-for="(step, i) in SCALE_STEPS"
        :key="step"
        :token="`${name}-${step}`"
        :hex="scale[step]"
        :note="notes?.[step] ?? ''"
        :delay="i * 40"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from "vue";
  import {
    SCALE_STEPS,
    colors,
    type ScaleStep,
  } from "../tokens/colors.ts";
  import ColorSwatch from "./ColorSwatch.vue";

  const props = defineProps<{
    name: "primary" | "accent" | "neutral";
    notes?: Partial<Record<ScaleStep, string>>;
  }>();

  const scale = computed(() => colors[props.name]);
</script>
