import React, { useState, useEffect } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import AppStackRoute, { UnAuthStackRoute } from "./routes/app-stack-route";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const getFonts = () => {
    return Font.loadAsync({
      "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
      "nunito-semibold": require("./assets/fonts/Nunito-SemiBold.ttf"),
      "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    });
  };

  useEffect(() => {
    getFonts();
  }, []);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <UnAuthStackRoute />
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
