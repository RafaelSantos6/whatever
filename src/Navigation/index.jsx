import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { SobreScreen } from "../screens/SobreScreen";
const Stack = createNativeStackNavigator();
export const RootNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Home"} component={HomeScreen} />
            <Stack.Screen name={"Sobre"} component={SobreScreen} />
        </Stack.Navigator>
    );
};