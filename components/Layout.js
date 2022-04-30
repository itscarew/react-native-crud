import { StyleSheet, View, SafeAreaView } from "react-native";
import { globalStyles } from "../styles/global";

export const Layout = ({ children }) => {
  return (
    <SafeAreaView style={[globalStyles.container]}>
      <View style={{ flex: 1 }}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
