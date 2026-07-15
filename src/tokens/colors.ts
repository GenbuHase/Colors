/**
 * Genbu Hase — personal palette (TypeScript)
 * Anchor: birth color 鴇色 #F4B3C2 → primary[300]
 */

export const colors = {
  primary: {
    50: "#FFF7F9",
    100: "#FFEBF0",
    200: "#FFD6E0",
    300: "#F4B3C2",
    400: "#E891A8",
    500: "#D66B8A",
    600: "#C04A6E",
    700: "#A13858",
    800: "#85304A",
    900: "#6F2B41",
    950: "#3D1522",
  },
  accent: {
    50: "#F0F7F6",
    100: "#D9EDEB",
    200: "#B5DBD6",
    300: "#86C2BB",
    400: "#5AA39B",
    500: "#3F877F",
    600: "#316C66",
    700: "#2A5752",
    800: "#254643",
    900: "#213B39",
    950: "#0F2120",
  },
  neutral: {
    50: "#FAF8F8",
    100: "#F3EEEE",
    200: "#E8E1E2",
    300: "#D4CACD",
    400: "#B5A8AC",
    500: "#96888D",
    600: "#766A6E",
    700: "#5C5256",
    800: "#3F393C",
    900: "#2A2628",
    950: "#181516",
  },
  semantic: {
    success: {
      50: "#EEF6F1",
      500: "#3D7A5A",
      bgLight: "#EEF6F1",
      bgDark: "#1A2A22",
    },
    warning: {
      50: "#FBF4EA",
      500: "#C4893A",
      bgLight: "#FBF4EA",
      bgDark: "#2A2218",
    },
    danger: {
      50: "#F9EEEE",
      500: "#C45C5C",
      bgLight: "#F9EEEE",
      bgDark: "#2A1A1A",
    },
    info: {
      50: "#EEF2F8",
      500: "#4A6FA5",
      bgLight: "#EEF2F8",
      bgDark: "#1A2030",
    },
  },
} as const;

export const rolesLight = {
  surfacePage: "#FFFAFB",
  surfaceRaised: "#FFFFFF",
  surfaceSubtle: colors.primary[50],
  textPrimary: colors.neutral[900],
  textSecondary: colors.neutral[600],
  textInverse: "#FFFFFF",
  borderDefault: colors.neutral[200],
  focusRing: colors.accent[500],
  actionPrimary: colors.primary[600],
  actionPrimaryHover: colors.primary[700],
  actionAccent: colors.accent[600],
  link: colors.accent[600],
  successBg: colors.semantic.success.bgLight,
  warningBg: colors.semantic.warning.bgLight,
  dangerBg: colors.semantic.danger.bgLight,
  infoBg: colors.semantic.info.bgLight,
} as const;

export const rolesDark = {
  surfacePage: "#1A1416",
  surfaceRaised: "#241C1F",
  surfaceSubtle: colors.primary[950],
  textPrimary: colors.neutral[50],
  textSecondary: colors.neutral[400],
  textInverse: colors.neutral[950],
  borderDefault: colors.neutral[800],
  focusRing: colors.accent[300],
  actionPrimary: colors.primary[400],
  actionPrimaryHover: colors.primary[300],
  actionAccent: colors.accent[400],
  link: colors.accent[300],
  successBg: colors.semantic.success.bgDark,
  warningBg: colors.semantic.warning.bgDark,
  dangerBg: colors.semantic.danger.bgDark,
  infoBg: colors.semantic.info.bgDark,
} as const;

/** Print set for business card / print (always light) */
export const printSet = {
  toki: colors.primary[300],
  ink: colors.neutral[900],
  celadon: colors.accent[600],
} as const;

export type ThemeMode = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";
export type ColorScale = typeof colors.primary;
export type Roles = typeof rolesLight;

export const SCALE_STEPS = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const;

export type ScaleStep = (typeof SCALE_STEPS)[number];
