import { StyleSheet, Text, View, Pressable } from "react-native";
import { Layout } from "../components/Layout";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import { CustomButton } from "../components/Button";
import { CustomTextInput } from "../components/TextInput";

const ForgotPassword = ({ navigation }) => {
  return (
    <Layout>
      <View style={styles.container1}>
        <Text style={styles.titleText}>Mindix</Text>

        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(props) => {
            return (
              <View>
                <CustomTextInput
                  placeholder="email address"
                  value={props.values.email}
                  onChangeText={props.handleChange("email")}
                  style={{ marginVertical: 5 }}
                />
                <View style={{ marginVertical: 10 }}>
                  <Pressable onPress={props.handleSubmit}>
                    <Text
                      style={[
                        globalStyles.paragraphSemiBold,
                        { textAlign: "right" },
                      ]}
                    >
                      Resend Otp ?
                    </Text>
                  </Pressable>
                  <CustomButton
                    text="Send Otp"
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

export default ForgotPassword;
