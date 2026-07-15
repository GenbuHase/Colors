import { ref } from "vue";
import {
  getStoredTheme,
  initTheme,
  setThemeMode as applyThemeMode,
} from "../theme.ts";
import type { ThemeMode } from "../tokens/colors.ts";

const mode = ref<ThemeMode>(getStoredTheme());
let booted = false;

export function useTheme() {
  if (!booted) {
    initTheme();
    mode.value = getStoredTheme();
    booted = true;
  }

  function setMode(next: ThemeMode) {
    applyThemeMode(next);
    mode.value = next;
  }

  return { mode, setMode };
}
