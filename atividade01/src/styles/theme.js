/**
 * Cores, espaçamentos e tipografia (identidade visual do app).
 */
export const theme = {
  colors: {
    primary: "#1565C0",
    primaryDark: "#0D47A1",
    accent: "#FF6F00",
    background: "#F0F4F8",
    surface: "#FFFFFF",
    text: "#1A237E",
    textSecondary: "#546E7A",
    textMuted: "#78909C",
    border: "#E0E0E0",
    overlay: "rgba(0, 0, 0, 0.7)",
    modalSlide: "#2196F3",
    modalFade: "#4CAF50",
    modalNone: "#FF9800",
    success: "#2E7D32",
    tabBar: "#FFFFFF",
  },
  spacing: {
    xs: 6,
    sm: 10,
    md: 16,
    lg: 24,
    xl: 32,
  },
  fontSize: {
    hero: 24,
    title: 20,
    subtitle: 17,
    body: 16,
    caption: 14,
    small: 12,
  },
  radius: {
    sm: 8,
    md: 12,
    lg: 18,
    full: 999,
  },
  /** Sombras reutilizáveis (iOS: shadow*; Android: elevation). */
  shadow: {
    card: {
      elevation: 6,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.12,
      shadowRadius: 10,
    },
    button: {
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.14,
      shadowRadius: 4,
    },
  },
};
