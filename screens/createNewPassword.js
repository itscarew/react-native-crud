import { StyleSheet, Text, View, Pressable } from "react-native";
import { Layout } from "../components/Layout";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import { CustomButton } from "../components/Button";
import { CustomTextInput } from "../components/TextInput";
import { newPasswordSchema } from "../schema/validationSchema";
import { AlertMessage } from "../components/AlertMessage";

const CreateNewPassword = ({ navigation }) => {
  return (
    <Layout>
      <View style={styles.container1}>
        <Text style={styles.titleText}>Mindix</Text>

        <Formik
          initialValues={{
            password: "",
            confirmPassword: "",
          }}
          validationSchema={newPasswordSchema}
          onSubmit={(values) => {
            console.log(values);
            navigation.navigate("SignIn");
          }}
        >
          {(props) => {
            return (
              <View>
                <CustomTextInput
                  placeholder="password"
                  secureTextEntry={true}
                  value={props.values.password}
                  onChangeText={props.handleChange("password")}
                  style={{ marginVertical: 5 }}
                />
                <AlertMessage
                  message={props.touched.password && props.errors["password"]}
                  type="error"
                />
                <CustomTextInput
                  placeholder="confirm password"
                  secureTextEntry={true}
                  value={props.values.confirmPassword}
                  onChangeText={props.handleChange("confirmPassword")}
                  style={{ marginVertical: 5 }}
                />
                <AlertMessage
                  message={
                    props.touched.confirmPassword &&
                    props.errors["confirmPassword"]
                  }
                  type="error"
                />
                <View style={{ marginVertical: 10 }}>
                  <CustomButton
                    text="New Password"
                    onPress={props.handleSubmit}
                    style={{ marginTop: 5 }}
                  />
                </View>
              </View>
            );
          }}
        </Formik>
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

export default CreateNewPassword;
