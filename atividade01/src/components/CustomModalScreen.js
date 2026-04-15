import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { modalStyles } from "../styles/modalStyles";
import { theme } from "../styles/theme";

function modalAnimationIcon(animation) {
  switch (animation) {
    case "slide":
      return "swap-vertical-outline";
    case "fade":
      return "contrast-outline";
    case "none":
      return "remove-circle-outline";
    default:
      return "sparkles-outline";
  }
}

/**
 * Demonstra Modal com animationType: "slide" | "fade" | "none".
 * @param {{ animation: 'slide'|'fade'|'none', themeColor: string }} props
 */
export default function CustomModalScreen({ animation, themeColor }) {
  const [visible, setVisible] = useState(false);
  const headerIcon = modalAnimationIcon(animation);

  return (
    <SafeAreaView
      style={[modalStyles.screenContainer, { backgroundColor: `${themeColor}10` }]}
    >
      <View style={modalStyles.headerRow}>
        <Ionicons name={headerIcon} size={32} color={themeColor} />
        <Text style={[modalStyles.headerText, { color: themeColor }]}>
          Modo: {animation.toUpperCase()}
        </Text>
      </View>

      <TouchableOpacity
        style={[modalStyles.mainButton, { backgroundColor: themeColor }]}
        onPress={() => setVisible(true)}
        activeOpacity={0.85}
      >
        <Ionicons name="open-outline" size={22} color="#fff" />
        <Text style={modalStyles.buttonText}>
          ABRIR MODAL {animation.toUpperCase()}
        </Text>
      </TouchableOpacity>

      <Modal
        animationType={animation}
        transparent
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <TouchableOpacity
          style={modalStyles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setVisible(false)}
        >
          <View style={modalStyles.modalCard}>
            <View
              style={[modalStyles.colorIndicator, { backgroundColor: themeColor }]}
            />
            <View
              style={[
                modalStyles.modalIconCircle,
                { backgroundColor: `${themeColor}22` },
              ]}
            >
              <Ionicons name={headerIcon} size={28} color={themeColor} />
            </View>
            <Text style={modalStyles.modalTitle}>Animação {animation}</Text>
            <Text style={modalStyles.modalBody}>
              Esta transição demonstra o comportamento nativo do tipo &quot;
              {animation}&quot;.
            </Text>
            <TouchableOpacity
              style={modalStyles.closeButton}
              onPress={() => setVisible(false)}
            >
              <Ionicons
                name="close-circle-outline"
                size={20}
                color={theme.colors.textSecondary}
              />
              <Text style={modalStyles.closeButtonText}>FECHAR</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}
