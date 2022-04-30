import { createDrawerNavigator } from "@react-navigation/drawer";
import TermsCondition from "../screens/terms-conditions";
import Dashboard from "../screens/Dashboard/dashboard";
const Drawer = createDrawerNavigator();
const Stack = createDrawerNavigator();

export const AuthStackRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

const AppDrawerRoute = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Drawer Dashboard" component={Dashboard} />
      <Drawer.Screen
        name="Drawer Terms and Condition"
        component={TermsCondition}
        options={{ title: "Terms and Condition" }}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawerRoute;
