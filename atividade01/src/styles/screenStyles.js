import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const homeStyles = StyleSheet.create({
  wrap: { flex: 1, justifyContent: "center" },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: `${theme.colors.primary}18`,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: theme.spacing.md,
  },
});

export const modalStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.lg,
  },
  headerText: {
    fontSize: theme.fontSize.hero,
    fontWeight: "900",
    marginBottom: theme.spacing.md,
  },
  mainButton: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: 28,
    borderRadius: theme.radius.md,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: theme.fontSize.body,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
    justifyContent: "center",
    alignItems: "center",
  },
  modalCard: {
    width: "80%",
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg + 4,
    alignItems: "center",
    overflow: "hidden",
  },
  colorIndicator: {
    width: "120%",
    height: 10,
    position: "absolute",
    top: 0,
  },
  modalTitle: {
    fontSize: theme.fontSize.subtitle + 1,
    fontWeight: "bold",
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    color: theme.colors.text,
  },
  modalBody: {
    fontSize: theme.fontSize.body,
    textAlign: "center",
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.md,
  },
  closeButton: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.radius.sm,
  },
  closeButtonText: {
    color: theme.colors.textSecondary,
    fontWeight: "bold",
  },
});

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
  },
  blockTitle: {
    fontSize: theme.fontSize.subtitle,
    fontWeight: "700",
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
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
  avatarText: {
    fontWeight: "800",
    color: theme.colors.primary,
    fontSize: theme.fontSize.caption,
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
    backgroundColor: theme.colors.primaryDark,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.radius.sm,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  sectionHeaderText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: theme.fontSize.caption,
    letterSpacing: 0.6,
  },
  item: {
    backgroundColor: theme.colors.surface,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.radius.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: theme.spacing.xs,
  },
  itemText: {
    fontSize: theme.fontSize.body,
    color: theme.colors.text,
  },
});
