import { Ionicons } from "@expo/vector-icons";
import { SectionList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../styles/globalStyles";
import { sectionListStyles } from "../styles/scrollStyles";
import { theme } from "../styles/theme";
import { sectionListSampleData } from "../utils/data";

const sl = sectionListStyles;

export default function SectionListScreen() {
  return (
    <SafeAreaView
      style={[globalStyles.flex1, { backgroundColor: theme.colors.background }]}
    >
      <SectionList
        style={sl.list}
        sections={sectionListSampleData}
        keyExtractor={(item, index) => `${item}-${index}`}
        contentContainerStyle={[
          globalStyles.screenContainer,
          { paddingBottom: theme.spacing.xl },
        ]}
        ListHeaderComponent={
          <>
            <Text style={[globalStyles.subtitle, sl.intro]}>SectionList</Text>
            <Text
              style={[
                globalStyles.body,
                { textAlign: "left", marginBottom: theme.spacing.md },
              ]}
            >
              Lista em seções, com cabeçalho por grupo.
            </Text>
          </>
        }
        renderSectionHeader={({ section: { title } }) => (
          <View style={sl.sectionHeader}>
            <Ionicons name="folder-outline" size={18} color="#fff" />
            <Text style={sl.sectionHeaderText}>{title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={sl.item}>
            <Ionicons
              name="chevron-forward"
              size={18}
              color={theme.colors.primary}
            />
            <Text style={sl.itemText}>{item}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
