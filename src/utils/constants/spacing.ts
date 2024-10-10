export const spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    xxxl: 64,
    "4xl": 96,
    "5xl": 128,
    "6xl": 192,
    "7xl": 256,
    "8xl": 384,
} as const;

export const lineHeight = {
    xs: spacing.xs * 1.2,
    sm: spacing.sm * 1.2,
    md: spacing.md * 1.2,
    lg: spacing.lg * 1.2,
    xl: spacing.xl * 1.2,
    xxl: spacing.xxl * 1.2,
    xxxl: spacing.xxxl * 1.2,
    "4xl": spacing["4xl"] * 1.2,
    "5xl": spacing["5xl"] * 1.2,
    "6xl": spacing["6xl"] * 1.2,
    "7xl": spacing["7xl"] * 1.2,
};
