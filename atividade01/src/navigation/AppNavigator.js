import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomModalScreen } from "../components";
import {
  FlatListScreen,
  HomeScreen,
  ScrollViewScreen,
  SectionListScreen,
} from "../screens";
import { theme } from "../styles/theme";

const Drawer = createDrawerNavigator();
const TabModal = createBottomTabNavigator();
const TabScroll = createBottomTabNavigator();

const
  tabBarOptions = {
    headerShown: false,
    tabBarActiveTintColor: theme.colors.primary,
    tabBarInactiveTintColor: theme.colors.textMuted,
    tabBarLabelStyle: { fontSize: 12, fontWeight: "700" },
    tabBarStyle: {
      backgroundColor: theme.colors.tabBar,
      borderTopColor: theme.colors.border,
    },
  };

const ModalTabsNavigator = () => (
  <TabModal.Navigator screenOptions={tabBarOptions}>
    <TabModal.Screen
      name="Modal Slide"

    >
      {() => (
        <CustomModalScreen
          animation="slide"
          themeColor={theme.colors.modalSlide}
        />
      )}
    </TabModal.Screen>
    <TabModal.Screen name="Modal Fade">
      {() => (
        <CustomModalScreen
          animation="fade"
          themeColor={theme.colors.modalFade}
        />
      )}
    </TabModal.Screen>
    <TabModal.Screen
      name="Modal None"
    >
      {() => (
        <CustomModalScreen
          animation="none"
          themeColor={theme.colors.modalNone}
        />
      )}
    </TabModal.Screen>
  </TabModal.Navigator>
);

const ScrollTabsNavigator = () => (
  <TabScroll.Navigator screenOptions={tabBarOptions}>
    <TabScroll.Screen
      name="ScrollView"
      component={ScrollViewScreen}
    />
    <TabScroll.Screen
      name="FlatList"
      component={FlatListScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="format-list-bulleted" size={size} color={color} />
        ),
      }}
    />
    <TabScroll.Screen
      name="SectionList"
      component={SectionListScreen}
    />
  </TabScroll.Navigator>
);

const AppNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: theme.colors.primary },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "800", fontSize: 18 },
      drawerActiveTintColor: theme.colors.primary,
      drawerInactiveTintColor: theme.colors.textSecondary,
      drawerLabelStyle: { fontWeight: "600", fontSize: 15 },
      drawerStyle: { backgroundColor: theme.colors.surface },
    }}
  >
    <Drawer.Screen
      name="Inicio"
      component={HomeScreen}
      options={{
        title: "Início",
        drawerLabel: "Início"
      }}
    />
    <Drawer.Screen
      name="Modais"
      component={ModalTabsNavigator}
      options={{
        title: "Modais",
        drawerLabel: "Modais",
      }}
    />
    <Drawer.Screen
      name="ListasRolagem"
      component={ScrollTabsNavigator}
      options={{
        title: "Listas com rolagem",
        drawerLabel: "Listas com rolagem",
        drawerIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="format-list-checkbox" size={size} color={color} />
        ),
      }}
    />
  </Drawer.Navigator>
);

export default AppNavigator;
