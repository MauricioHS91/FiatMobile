import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../styles/globalStyles";
import { homeStyles } from "../styles/homeStyles";
import { theme } from "../styles/theme";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={[globalStyles.flex1, { backgroundColor: theme.colors.background }]}
    >
      <View style={globalStyles.screenCentered}>
        <View style={[globalStyles.card, homeStyles.messageCard]}>
          <View style={homeStyles.heroWrap}>
            <View style={homeStyles.heroIconCircle}>
              <Ionicons
                name="phone-portrait-outline"
                size={44}
                color={theme.colors.primary}
              />
            </View>
            <Text style={homeStyles.title}>Bem-vindo</Text>
          </View>
          <Text style={[globalStyles.body, homeStyles.messageText]}>
            Utilize o menu de navegação para acessar as telas de modais e as listas
            com rolagem.
          </Text>
          <View style={homeStyles.hintRow}>
            <View style={homeStyles.hintIconBox}>
              <Ionicons
                name="layers-outline"
                size={22}
                color={theme.colors.modalSlide}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={homeStyles.hintLabel}>Modais</Text>
              <Text style={homeStyles.hintSub}>
                Slide, fade e sem animação
              </Text>
            </View>
          </View>
          <View style={homeStyles.hintRow}>
            <View style={homeStyles.hintIconBox}>
              <Ionicons
                name="list-outline"
                size={22}
                color={theme.colors.accent}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={homeStyles.hintLabel}>Listas</Text>
              <Text style={homeStyles.hintSub}>
                ScrollView, FlatList e SectionList
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
