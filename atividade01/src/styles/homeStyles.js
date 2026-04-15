import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const homeStyles = StyleSheet.create({
  messageCard: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.xl,
  },
  heroWrap: {
    alignItems: "center",
    marginBottom: theme.spacing.md,
  },
  heroIconCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: `${theme.colors.primary}18`,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing.md,
  },
  title: {
    fontSize: theme.fontSize.hero + 2,
    fontWeight: "800",
    color: theme.colors.text,
    textAlign: "center",
  },
  messageText: {
    textAlign: "center",
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.lg,
  },
  hintRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: `${theme.colors.primary}0D`,
    borderRadius: theme.radius.md,
    paddingVertical: theme.spacing.sm + 2,
    paddingHorizontal: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    borderWidth: 1,
    borderColor: `${theme.colors.primary}22`,
  },
  hintIconBox: {
    width: 40,
    height: 40,
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colors.surface,
    alignItems: "center",
    justifyContent: "center",
    marginRight: theme.spacing.md,
  },
  hintLabel: {
    fontSize: theme.fontSize.caption,
    fontWeight: "700",
    color: theme.colors.text,
    marginBottom: 2,
  },
  hintSub: {
    fontSize: theme.fontSize.small,
    color: theme.colors.textMuted,
  },
});
