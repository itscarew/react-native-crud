import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export const CustomButton = ({ text, onPress, bc, tc, style }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, buttonBackgroundColor(bc || "#0a9396")]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          globalStyles.paragraphBold,
          buttonTextColor(tc || "#fff"),
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const buttonBackgroundColor = function (value) {
  return {
    backgroundColor: value,
  };
};

const buttonTextColor = function (value) {
  return {
    color: value,
  };
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: "100%",
    borderRadius: 50,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
});
