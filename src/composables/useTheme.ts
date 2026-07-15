import { ref } from "vue";
import {
  applyResolvedTheme,
  getStoredTheme,
  getSystemTheme,
  initTheme,
  resolveTheme,
  setThemeMode as applyThemeMode,
} from "../theme.ts";
import type { ResolvedTheme, ThemeMode } from "../tokens/colors.ts";

const mode = ref<ThemeMode>("system");
const resolved = ref<ResolvedTheme>("light");
let booted = false;

function syncFromStorage() {
  mode.value = getStoredTheme();
  resolved.value = resolveTheme(mode.value);
}

export function useTheme() {
  if (!booted) {
    initTheme();
    syncFromStorage();

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", () => {
      if (getStoredTheme() !== "system") return;
      const next = getSystemTheme();
      applyResolvedTheme(next);
      resolved.value = next;
    });

    booted = true;
  }

  function setMode(next: ThemeMode) {
    applyThemeMode(next);
    mode.value = next;
    resolved.value = resolveTheme(next);
  }

  return { mode, resolved, setMode };
}
