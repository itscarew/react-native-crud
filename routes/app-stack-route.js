import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "../screens/signup";
import Home from "../screens/home";
import TermsCondition from "../screens/terms-conditions";
import SignIn from "../screens/signin";
import AppDrawerRoute from "./app-drawer-route";
import { Image, View, Text, ImageBackground } from "react-native";
import ForgotPassword from "../screens/forgotPassword";

const Stack = createNativeStackNavigator();

function LogoTitle(props) {
  return (
    <ImageBackground
      source={require(`../assets/snow.jpg`)}
      style={{ width: 800, height: 800 }}
    >
      <Image
        style={{ width: 50, height: 50 }}
        source={require(`../assets/snow.jpg`)}
      />
    </ImageBackground>
  );
}

export const UnAuthStackRoute = () => {
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
        // headerBackground: (props) => <LogoTitle {...props} />,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={Signup}
        options={{ title: "Sign Up", headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: "Sign In", headerShown: false }}
      />
      <Stack.Screen
        name="TermsCondition"
        component={TermsCondition}
        options={{ title: "Terms and Condition" }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ title: "Forgot Password", headerShown: false }}
      />
      <Stack.Screen
        name="Dashboard"
        component={AppDrawerRoute}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
