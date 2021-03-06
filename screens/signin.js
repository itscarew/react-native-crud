import { StyleSheet, Text, View, Pressable } from "react-native";
import { Layout } from "../components/Layout";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import { CustomButton } from "../components/Button";
import { CustomTextInput } from "../components/TextInput";
import { signInSchema } from "../schema/validationSchema";
import { AlertMessage } from "../components/AlertMessage";

const SignIn = ({ navigation }) => {
  return (
    <Layout>
      <View style={styles.container1}>
        <Text style={styles.titleText}>Mindix</Text>
        <Formik
          initialValues={{ identifier: "", password: "" }}
          validationSchema={signInSchema}
          onSubmit={(values) => {
            console.log(values);
            navigation.navigate("Dashboard");
          }}
        >
          {(props) => {
            console.log(props.errors);
            return (
              <View>
                <CustomTextInput
                  placeholder="email or username"
                  value={props.values.identifier}
                  name="identifier"
                  onChangeText={props.handleChange("identifier")}
                  style={{ marginVertical: 5 }}
                />
                <AlertMessage
                  message={
                    props.touched.identifier && props.errors["identifier"]
                  }
                  type="error"
                />
                <CustomTextInput
                  placeholder="password"
                  secureTextEntry={true}
                  value={props.values.password}
                  name="password"
                  onChangeText={props.handleChange("password")}
                  style={{ marginVertical: 5 }}
                />
                <AlertMessage
                  message={props.touched.password && props.errors["password"]}
                  type="error"
                />
                <View style={{ marginVertical: 10 }}>
                  <Pressable>
                    <Text
                      style={[
                        globalStyles.paragraphSemiBold,
                        { textAlign: "right" },
                      ]}
                      onPress={() => navigation.navigate("ForgotPassword")}
                    >
                      Forgotten password ?
                    </Text>
                  </Pressable>
                  <CustomButton
                    text="Sign In"
                    onPress={props.handleSubmit}
                    style={{ marginTop: 5 }}
                  />
                </View>
              </View>
            );
          }}
        </Formik>
      </View>
      <View style={styles.container2}>
        <Text style={globalStyles.paragraph}>
          Don't have a Mindix account?
          <Text
            style={globalStyles.paragraphBold}
            onPress={() => navigation.navigate("SignUp")}
          >
            {" "}
            Sign Up
          </Text>
        </Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 40,
    textAlign: "center",
    color: "#fff",
    marginVertical: 30,
  },
  container1: {
    flex: 0.92,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  container2: {
    flex: 0.08,
    borderTopColor: "#0a9396",
    borderWidth: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignIn;
