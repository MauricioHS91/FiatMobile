import { ScrollView, Text, View } from "react-native";
import { ScreenContainer } from "./components";
import { globalStyles } from "./styles/globalStyles";
import { theme } from "./styles/theme";

export default function ScrollViewScreen() {
  return (
    <ScreenContainer>
      <ScrollView
        style={sv.scroll}
        contentContainerStyle={[
          globalStyles.screenContainer,
          sv.scrollContent,
        ]}
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
            <Text style={sv.blockTitle}>{p.title}</Text>
            <Text style={sv.blockText}>{p.text}</Text>
          </View>
        ))}
      </ScrollView>
    </ScreenContainer>
  );
}