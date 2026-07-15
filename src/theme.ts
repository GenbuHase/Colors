import type { ResolvedTheme, ThemeMode } from "./tokens/colors.ts";

const STORAGE_KEY = "my-colors-theme";

export function getStoredTheme(): ThemeMode {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark" || stored === "system") {
    return stored;
  }
  return "system";
}

export function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function resolveTheme(mode: ThemeMode): ResolvedTheme {
  return mode === "system" ? getSystemTheme() : mode;
}

export function applyResolvedTheme(resolved: ResolvedTheme): void {
  document.documentElement.setAttribute("data-theme", resolved);
}

export function setThemeMode(mode: ThemeMode): ResolvedTheme {
  localStorage.setItem(STORAGE_KEY, mode);
  const resolved = resolveTheme(mode);
  applyResolvedTheme(resolved);
  return resolved;
}

export function initTheme(): { mode: ThemeMode; resolved: ResolvedTheme } {
  const mode = getStoredTheme();
  const resolved = resolveTheme(mode);
  applyResolvedTheme(resolved);

  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", () => {
    if (getStoredTheme() === "system") {
      applyResolvedTheme(getSystemTheme());
    }
  });

  return { mode, resolved };
}
