import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList, ScrollView, SectionList, Text, View } from "react-native";
import { ScreenContainer } from "./components";
import { globalStyles } from "./styles/globalStyles";
import {
  flatListStyles,
  homeStyles,
  scrollViewStyles,
  sectionListStyles,
} from "./styles/screenStyles";
import { theme } from "./styles/theme";


export const flatListSampleData = Array.from({ length: 16 }).map((_, i) => ({
  id: String(i + 1),
  title: `Item ${i + 1}`,
  subtitle: `Linha ${i + 1} — FlatList virtualiza o que está fora da tela.`,
}));

export const sectionListSampleData = [
  { title: "Grupo A", data: ["Item A1", "Item A2"] },
  { title: "Grupo B", data: ["Item B1", "Item B2", "Item B3"] },
];

export const scrollViewBlocks = [
  {
    id: "b1",
    title: "ScrollView",
    text: "Envolve o conteúdo e permite rolar quando ele passa da altura da tela.",
  },
  {
    id: "b2",
    title: "Exemplo",
    text: "Role para baixo para ver mais caixas de texto.",
  },
  ...Array.from({ length: 4 }).map((_, i) => ({
    id: `b${i + 3}`,
    title: `Bloco ${i + 1}`,
    text: "Texto extra só para gerar rolagem.",
  })),
];

const hs = homeStyles;
const sv = scrollViewStyles;
const fl = flatListStyles;
const sl = sectionListStyles;

export const HomeScreen = () => (
  <ScreenContainer>
    <View style={[globalStyles.screenContainer, hs.wrap]}>
      <View style={hs.iconCircle}>
        <MaterialCommunityIcons
          name="home-outline"
          size={32}
          color={theme.colors.primary}
        />
      </View>
      <View style={globalStyles.card}>
        <Text style={globalStyles.title}>Início</Text>
        <Text style={globalStyles.body}>
          Bem-vindo ao aplicativo. Utilize o menu de navegação para acessar as
          telas de modais e as listas com rolagem.
        </Text>
      </View>
    </View>
  </ScreenContainer>
);

export const ScrollViewScreen = () => (
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

export const FlatListScreen = () => (
  <ScreenContainer>
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
            <Text style={fl.avatarText}>{item.id}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={fl.rowTitle}>{item.title}</Text>
            <Text style={fl.rowSub}>{item.subtitle}</Text>
          </View>
        </View>
      )}
    />
  </ScreenContainer>
);

export const SectionListScreen = () => (
  <ScreenContainer>
    <SectionList
      style={sl.list}
      sections={sectionListSampleData}
      keyExtractor={(item, index) => `${item}-${index}`}
      contentContainerStyle={{ paddingBottom: theme.spacing.xl }}
      ListHeaderComponent={
        <View style={globalStyles.screenContainer}>
          <Text style={[globalStyles.subtitle, sl.intro]}>SectionList</Text>
          <Text
            style={[
              globalStyles.body,
              { textAlign: "left", marginBottom: theme.spacing.md },
            ]}
          >
            Lista em seções, com cabeçalho por grupo.
          </Text>
        </View>
      }
      renderSectionHeader={({ section: { title } }) => (
        <View
          style={[
            globalStyles.screenContainer,
            { paddingBottom: 0, paddingTop: theme.spacing.sm },
          ]}
        >
          <View style={sl.sectionHeader}>
            <Text style={sl.sectionHeaderText}>{title}</Text>
          </View>
        </View>
      )}
      renderItem={({ item }) => (
        <View style={globalStyles.screenContainer}>
          <View style={sl.item}>
            <Text style={sl.itemText}>{item}</Text>
          </View>
        </View>
      )}
    />
  </ScreenContainer>
);
