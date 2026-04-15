import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FlatListScreen from "../screens/FlatListScreen";
import HomeScreen from "../screens/HomeScreen";
import ModalFadeScreen from "../screens/ModalFadeScreen";
import ModalNoneScreen from "../screens/ModalNoneScreen";
import ModalSlideScreen from "../screens/ModalSlideScreen";
import ScrollViewScreen from "../screens/ScrollViewScreen";
import SectionListScreen from "../screens/SectionListScreen";
import { theme } from "../styles/theme";

const Drawer = createDrawerNavigator();
const TabModal = createBottomTabNavigator();
const TabScroll = createBottomTabNavigator();

const tabBarOptions = {
  headerShown: false,
  tabBarActiveTintColor: theme.colors.primary,
  tabBarInactiveTintColor: theme.colors.textMuted,
  tabBarLabelStyle: { fontSize: 13, fontWeight: "bold" },
};

const drawerScreenOptions = {
  headerStyle: { backgroundColor: theme.colors.primary },
  headerTintColor: "#fff",
  headerTitleStyle: { fontWeight: "700" },
  drawerActiveTintColor: theme.colors.primary,
  drawerInactiveTintColor: theme.colors.textMuted,
};

const ModalTabsNavigator = () => (
  <TabModal.Navigator screenOptions={tabBarOptions}>
    <TabModal.Screen
      name="Modal Slide"
      component={ModalSlideScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="swap-vertical-outline" size={size} color={color} />
        ),
      }}
    />
    <TabModal.Screen
      name="Modal Fade"
      component={ModalFadeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="contrast-outline" size={size} color={color} />
        ),
      }}
    />
    <TabModal.Screen
      name="Modal None"
      component={ModalNoneScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="remove-circle-outline" size={size} color={color} />
        ),
      }}
    />
  </TabModal.Navigator>
);

const ScrollTabsNavigator = () => (
  <TabScroll.Navigator screenOptions={tabBarOptions}>
    <TabScroll.Screen
      name="ScrollView"
      component={ScrollViewScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="document-text-outline" size={size} color={color} />
        ),
      }}
    />
    <TabScroll.Screen
      name="FlatList"
      component={FlatListScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="reorder-four-outline" size={size} color={color} />
        ),
      }}
    />
    <TabScroll.Screen
      name="SectionList"
      component={SectionListScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="albums-outline" size={size} color={color} />
        ),
      }}
    />
  </TabScroll.Navigator>
);

export default function AppNavigator() {
  return (
    <Drawer.Navigator screenOptions={drawerScreenOptions}>
      <Drawer.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          title: "Início",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Modais"
        component={ModalTabsNavigator}
        options={{
          title: "Modais",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="layers-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="ListasRolagem"
        component={ScrollTabsNavigator}
        options={{
          title: "Listas com rolagem",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
