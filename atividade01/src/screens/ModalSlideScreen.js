import CustomModalScreen from "../components/CustomModalScreen";
import { theme } from "../styles/theme";

export default function ModalSlideScreen() {
  return (
    <CustomModalScreen animation="slide" themeColor={theme.colors.modalSlide} />
  );
}
