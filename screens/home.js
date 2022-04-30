import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { CustomButton } from "../components/Button";

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={require(`../assets/snow.jpg`)}
      style={styles.imageBackground}
    >
      <SafeAreaView style={styles.homeWraper}>
        <View style={styles.titleLogo}>
          <Text style={styles.titleText}>Mindix, Just speak your thought.</Text>
        </View>

        <View style={styles.authButtons}>
          <CustomButton
            text="Sign Up"
            onPress={() => navigation.navigate("SignUp")}
            style={{ marginVertical: 5 }}
          />
          <CustomButton
            text="Sign In"
            onPress={() => navigation.navigate("SignIn")}
            bc="#005f73"
            style={{ marginVertical: 5 }}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  homeWraper: {
    backgroundColor: "rgba(0,0,0,0.6)",
    flex: 1,
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 64,
    textAlign: "center",
    color: "#fff",
  },
  titleLogo: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  authButtons: {
    flex: 2,
    marginHorizontal: 15,
  },
});

export default Home;
