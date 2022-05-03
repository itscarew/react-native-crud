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
          backgroundColor: "#001219",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontFamily: "nunito-regular",
        },
      }}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

const AppDrawerRoute = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#001219",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontFamily: "nunito-regular",
        },
      }}
    >
      <Drawer.Screen
        name="Drawer Dashboard"
        component={Dashboard}
        options={{ title: "Dashboard" }}
      />
      <Drawer.Screen
        name="Drawer Terms and Condition"
        component={TermsCondition}
        options={{ title: "Terms and Condition" }}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawerRoute;
