import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";
import { Layout } from "../components/Layout";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import { CustomButton } from "../components/Button";
import { CustomTextInput } from "../components/TextInput";
import { signUpSchema } from "../schema/validationSchema";
import { AlertMessage } from "../components/AlertMessage";

const SignUp = ({ navigation }) => {
  return (
    <Layout>
      <View style={styles.container1}>
        <Text style={styles.titleText}>Mindix</Text>

        <Formik
          initialValues={{
            fullName: "",
            userName: "",
            email: "",
            password: "",
          }}
          validationSchema={signUpSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(props) => {
            return (
              <View>
                <CustomTextInput
                  placeholder="full name"
                  value={props.values.fullName}
                  onChangeText={props.handleChange("fullName")}
                  style={{ marginVertical: 5 }}
                />
                <AlertMessage
                  message={props.touched.fullName && props.errors["fullName"]}
                  type="error"
                />
                <CustomTextInput
                  placeholder="choose a username"
                  value={props.values.userName}
                  onChangeText={props.handleChange("userName")}
                  style={{ marginVertical: 5 }}
                />
                <AlertMessage
                  message={props.touched.userName && props.errors["userName"]}
                  type="error"
                />
                <CustomTextInput
                  placeholder="email address"
                  value={props.values.email}
                  onChangeText={props.handleChange("email")}
                  style={{ marginVertical: 5 }}
                />
                <AlertMessage
                  message={props.touched.email && props.errors["email"]}
                  type="error"
                />
                <CustomTextInput
                  placeholder="choose a password"
                  secureTextEntry={true}
                  value={props.values.password}
                  onChangeText={props.handleChange("password")}
                  style={{ marginVertical: 5 }}
                />
                <AlertMessage
                  message={props.touched.password && props.errors["password"]}
                  type="error"
                />
                <View style={{ marginVertical: 10 }}>
                  <Pressable>
                    <Text style={globalStyles.paragraph}>
                      By creating an account, you agree to our{" "}
                      <Text
                        onPress={() => navigation.navigate("TermsCondition")}
                        style={globalStyles.paragraphBold}
                      >
                        Terms and Condiition.
                      </Text>
                    </Text>
                  </Pressable>
                  <CustomButton
                    text="Sign Up"
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
          Already have a Mindix account?
          <Text
            style={globalStyles.paragraphBold}
            onPress={() => navigation.navigate("SignIn")}
          >
            {" "}
            Sign In
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

export default SignUp;
