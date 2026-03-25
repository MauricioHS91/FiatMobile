import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { ScreenContainer } from "./components";
import { globalStyles } from "./styles/globalStyles";
import { homeStyles } from "./styles/screenStyles";
import { theme } from "./styles/theme";

export default function HomeScreen() {
    const style = homeStyles;

    return (
        <ScreenContainer>
            <View style={[globalStyles.screenContainer, style.wrap]}>
                <View style={style.iconCircle}>
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
}