import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "./styles/globalStyles";
import { theme } from "./styles/theme";

export const ScreenContainer = ({ children, edges = ["left", "right"] }) => (
  <SafeAreaView
    style={[globalStyles.flex1, { backgroundColor: theme.colors.background }]}
    edges={edges}
  >
    {children}
  </SafeAreaView>
);
