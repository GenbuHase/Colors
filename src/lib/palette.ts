import { colors, rolesDark, rolesLight } from "../tokens/colors.ts";

export const roleRows = [
  ["--surface-page", "Page background", "surfacePage"],
  ["--surface-raised", "Raised surface", "surfaceRaised"],
  ["--surface-subtle", "Subtle surface", "surfaceSubtle"],
  ["--text-primary", "Body text", "textPrimary"],
  ["--text-secondary", "Secondary text", "textSecondary"],
  ["--text-inverse", "Text on strong fills", "textInverse"],
  ["--border-default", "Border", "borderDefault"],
  ["--focus-ring", "Focus ring", "focusRing"],
  ["--action-primary", "Primary button", "actionPrimary"],
  ["--action-primary-hover", "Primary button hover", "actionPrimaryHover"],
  ["--action-accent", "Accent button", "actionAccent"],
  ["--link", "Link", "link"],
  ["--color-success-bg", "Success background", "successBg"],
  ["--color-warning-bg", "Warning background", "warningBg"],
  ["--color-danger-bg", "Danger background", "dangerBg"],
  ["--color-info-bg", "Info background", "infoBg"],
] as const;

export type RoleKey = (typeof roleRows)[number][2];

export function roleValue(theme: "light" | "dark", key: RoleKey): string {
  return theme === "light" ? rolesLight[key] : rolesDark[key];
}

export const semanticKeys = ["success", "warning", "danger", "info"] as const;

export const scaleNotes = {
  primary: {
    300: "anchor · 鴇色",
    100: "subtle fill",
    600: "primary button (light)",
    400: "primary button (dark)",
  },
  accent: {
    500: "link (light)",
    300: "link (dark)",
    600: "accent button (light)",
    400: "accent button (dark)",
  },
  neutral: {
    900: "body text (light)",
    50: "body text (dark)",
    600: "secondary text (light)",
    400: "secondary text (dark)",
    200: "border (light)",
    800: "border (dark)",
  },
} as const;

export const contrastPairs = {
  light: [
    { label: "body text", fg: colors.neutral[900], bg: "#FFFAFB" },
    { label: "primary button", fg: "#FFFFFF", bg: colors.primary[600] },
    { label: "link", fg: colors.accent[600], bg: "#FFFAFB" },
    { label: "on primary-300", fg: colors.neutral[900], bg: colors.primary[300] },
  ],
  dark: [
    { label: "body text", fg: colors.neutral[50], bg: "#1A1416" },
    { label: "primary button", fg: colors.neutral[950], bg: colors.primary[400] },
    { label: "link", fg: colors.accent[300], bg: "#1A1416" },
    { label: "on primary-300", fg: colors.neutral[950], bg: colors.primary[300] },
  ],
} as const;

export const cssSnippet = `@import "@genbuhase/my-colors/tokens.css";

/* roles switch via html[data-theme="light" | "dark"] */
body {
  background: var(--surface-page);
  color: var(--text-primary);
}`;

export const tsSnippet = `import { colors, printSet } from "@genbuhase/my-colors/tokens";

colors.primary[300]; // 鴇色 (toki)
printSet;            // print triad`;
