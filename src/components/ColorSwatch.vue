<template>
  <button
    ref="root"
    type="button"
    class="swatch"
    :class="{ 'swatch--inline': inline, 'is-visible': visible }"
    :style="{ '--delay': `${delay}ms` }"
    :aria-label="`Copy ${token} ${hex}`"
    @click="copy(hex, `Copied ${hex}`)"
  >
    <span class="swatch__chip" :style="{ background: hex }" />

    <span class="swatch__meta">
      <span v-if="!inline" class="swatch__token">{{ token }}</span>
      <span class="swatch__hex">{{ hex }}</span>
      <span v-if="note" class="swatch__note">{{ note }}</span>
    </span>
  </button>
</template>

<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import { useClipboard } from "../composables/useClipboard.ts";

  const { copy } = useClipboard();

  withDefaults(
    defineProps<{
      token: string;
      hex: string;
      note?: string;
      delay?: number;
      inline?: boolean;
    }>(),
    { note: "", delay: 0, inline: false },
  );

  const root = ref<HTMLButtonElement | null>(null);
  const visible = ref(false);

  onMounted(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      visible.value = true;
      return;
    }

    const el = root.value;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.value = true;
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
  });
</script>
