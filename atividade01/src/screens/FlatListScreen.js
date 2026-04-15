import { Ionicons } from "@expo/vector-icons";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../styles/globalStyles";
import { flatListStyles } from "../styles/scrollStyles";
import { theme } from "../styles/theme";
import { flatListSampleData } from "../utils/data";

const fl = flatListStyles;

export default function FlatListScreen() {
  return (
    <SafeAreaView
      style={[globalStyles.flex1, { backgroundColor: theme.colors.background }]}
    >
      <FlatList
        style={fl.list}
        data={flatListSampleData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[
          globalStyles.screenContainer,
          { paddingBottom: theme.spacing.xl },
        ]}
        ListHeaderComponent={
          <>
            <Text style={[globalStyles.subtitle, fl.intro]}>FlatList</Text>
            <Text
              style={[
                globalStyles.body,
                { textAlign: "left", marginBottom: theme.spacing.md },
              ]}
            >
              Lista com muitas linhas — só parte delas é renderizada por vez.
            </Text>
          </>
        }
        ItemSeparatorComponent={() => <View style={fl.separator} />}
        renderItem={({ item }) => (
          <View style={fl.row}>
            <View style={fl.avatar}>
              <Ionicons
                name="person-outline"
                size={22}
                color={theme.colors.primary}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={fl.rowTitle}>{item.title}</Text>
              <Text style={fl.rowSub}>{item.subtitle}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
