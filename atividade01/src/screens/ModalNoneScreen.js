import CustomModalScreen from "../components/CustomModalScreen";
import { theme } from "../styles/theme";

export default function ModalNoneScreen() {
  return (
    <CustomModalScreen animation="none" themeColor={theme.colors.modalNone} />
  );
}
