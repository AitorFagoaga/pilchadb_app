// navigation/StackNavigator.tsx
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../(tabs)/index";
import ExploreScreen from "../(tabs)/explore";
import WardrobeScreen from "../(tabs)/wardrobe";
import BrandDetailScreen from "../(screens)/brand/[id]";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="Wardrobe" component={WardrobeScreen} />
        <Stack.Screen name="BrandDetail" component={BrandDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
