<script setup lang="ts">
import { computed } from "vue";
import hljs from "highlight.js/lib/core";
import css from "highlight.js/lib/languages/css";
import typescript from "highlight.js/lib/languages/typescript";
import { useClipboard } from "../composables/useClipboard.ts";

hljs.registerLanguage("css", css);
hljs.registerLanguage("typescript", typescript);

const props = defineProps<{
  code: string;
  lang: "css" | "typescript";
  label: string;
}>();

const { copy } = useClipboard();

const highlighted = computed(() =>
  hljs.highlight(props.code, { language: props.lang, ignoreIllegals: true }).value,
);
</script>

<template>
  <div class="code-block">
    <div class="code-block__bar">
      <span>{{ label }}</span>
      <button type="button" class="btn btn--small" @click="copy(code)">
        Copy
      </button>
    </div>
    <pre><code class="hljs" :class="`language-${lang}`" v-html="highlighted" /></pre>
  </div>
</template>
