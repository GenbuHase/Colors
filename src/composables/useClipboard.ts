import { ref } from "vue";

const message = ref("");
const visible = ref(false);
let timer = 0;

export function useClipboard() {
  async function copy(text: string, label = "Copied") {
    try {
      await navigator.clipboard.writeText(text);
      show(label);
    } catch {
      show("Copy failed");
    }
  }

  function show(next: string) {
    message.value = next;
    visible.value = true;
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      visible.value = false;
    }, 1600);
  }

  return { message, visible, copy };
}
