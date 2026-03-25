import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { modalStyles } from "./styles/screenStyles";

export const CustomModalScreen = ({ animation, themeColor }) => {
    const [visible, setVisible] = useState(false);
    const styles = modalStyles;

    return (
        <SafeAreaView
            style={[styles.screenContainer, { backgroundColor: `${themeColor}10` }]}
        >
            <Text style={[styles.headerText, { color: themeColor }]}>
                Modo: {animation.toUpperCase()}
            </Text>

            <TouchableOpacity
                style={[styles.mainButton, { backgroundColor: themeColor }]}
                onPress={() => setVisible(true)}
                activeOpacity={0.85}
            >
                <Text style={styles.buttonText}>
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
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPressOut={() => setVisible(false)}
                >
                    <View style={styles.modalCard}>
                        <View
                            style={[styles.colorIndicator, { backgroundColor: themeColor }]}
                        />
                        <Text style={styles.modalTitle}>Animação {animation}</Text>
                        <Text style={styles.modalBody}>
                            Esta transição demonstra o comportamento nativo do tipo &quot;
                            {animation}&quot;.
                        </Text>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>FECHAR</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
        </SafeAreaView>
    );
}