import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../styles/globalStyles";
import { scrollViewStyles } from "../styles/scrollStyles";
import { theme } from "../styles/theme";
import { scrollViewBlocks } from "../utils/data";

const sv = scrollViewStyles;

function scrollBlockIcon(id) {
  if (id === "b1") return "document-text-outline";
  if (id === "b2") return "cube-outline";
  return "bookmark-outline";
}

export default function ScrollViewScreen() {
  return (
    <SafeAreaView
      style={[globalStyles.flex1, { backgroundColor: theme.colors.background }]}
    >
      <ScrollView
        style={sv.scroll}
        contentContainerStyle={[globalStyles.screenContainer, sv.scrollContent]}
        showsVerticalScrollIndicator
      >
        <Text style={[globalStyles.subtitle, sv.intro]}>ScrollView</Text>
        <Text
          style={[
            globalStyles.body,
            { textAlign: "left", marginBottom: theme.spacing.md },
          ]}
        >
          Conteúdo rolável dentro de um único ScrollView.
        </Text>
        {scrollViewBlocks.map((p) => (
          <View key={p.id} style={sv.block}>
            <View style={sv.blockHeader}>
              <View style={sv.blockIconBox}>
                <Ionicons
                  name={scrollBlockIcon(p.id)}
                  size={20}
                  color={theme.colors.primary}
                />
              </View>
              <Text style={sv.blockTitle}>{p.title}</Text>
            </View>
            <Text style={sv.blockText}>{p.text}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
