import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const scrollViewStyles = StyleSheet.create({
  scroll: { flex: 1 },
  scrollContent: { paddingBottom: theme.spacing.xl },
  block: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.primary,
    ...theme.shadow.button,
  },
  blockHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing.xs,
    gap: theme.spacing.sm,
  },
  blockIconBox: {
    width: 36,
    height: 36,
    borderRadius: theme.radius.sm,
    backgroundColor: `${theme.colors.primary}18`,
    alignItems: "center",
    justifyContent: "center",
  },
  blockTitle: {
    flex: 1,
    fontSize: theme.fontSize.subtitle,
    fontWeight: "700",
    color: theme.colors.text,
  },
  blockText: {
    fontSize: theme.fontSize.body,
    color: theme.colors.textSecondary,
    lineHeight: 22,
  },
  intro: { marginBottom: theme.spacing.md },
});

export const flatListStyles = StyleSheet.create({
  list: { flex: 1 },
  intro: { marginBottom: theme.spacing.md },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
    ...theme.shadow.button,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: `${theme.colors.primary}22`,
    alignItems: "center",
    justifyContent: "center",
    marginRight: theme.spacing.md,
  },
  rowTitle: {
    fontSize: theme.fontSize.body,
    fontWeight: "700",
    color: theme.colors.text,
  },
  rowSub: {
    fontSize: theme.fontSize.caption,
    color: theme.colors.textMuted,
    marginTop: 2,
  },
  separator: { height: theme.spacing.xs },
});

export const sectionListStyles = StyleSheet.create({
  list: { flex: 1 },
  intro: { marginBottom: theme.spacing.md },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
    backgroundColor: theme.colors.primaryDark,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.radius.sm,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  sectionHeaderText: {
    flex: 1,
    color: "#fff",
    fontWeight: "800",
    fontSize: theme.fontSize.caption,
    letterSpacing: 0.6,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
    backgroundColor: theme.colors.surface,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.radius.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: theme.spacing.xs,
  },
  itemText: {
    flex: 1,
    fontSize: theme.fontSize.body,
    color: theme.colors.text,
  },
});
