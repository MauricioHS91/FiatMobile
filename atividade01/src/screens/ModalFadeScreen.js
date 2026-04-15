import CustomModalScreen from "../components/CustomModalScreen";
import { theme } from "../styles/theme";

export default function ModalFadeScreen() {
  return (
    <CustomModalScreen animation="fade" themeColor={theme.colors.modalFade} />
  );
}
