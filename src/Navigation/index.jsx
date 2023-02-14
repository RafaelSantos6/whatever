import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { SobreScreen } from "../screens/SobreScreen";
import { Local } from "../screens/LocalScreen";
import { Configuracao } from "../screens/ConfiguraScreen";

const Stack = createBottomTabNavigator();
export const RootNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Home"} component={HomeScreen} />
            <Stack.Screen name={"Sobre"} component={SobreScreen} />
            <Stack.Screen name={"Local"} component={Local} />
            <Stack.Screen name={"Configuracao"} component={Configuracao} />
        </Stack.Navigator>
    );
};