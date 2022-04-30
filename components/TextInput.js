import { StyleSheet, TextInput } from "react-native";
import { globalStyles } from "../styles/global";

export const CustomTextInput = ({
  placeholder,
  name,
  value,
  onChangeText,
  placeholderTextColor,
  style,
  ...props
}) => {
  return (
    <TextInput
      style={[styles.input, globalStyles.paragraph, style]}
      placeholder={placeholder}
      name={name}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor={placeholderTextColor || "#fff"}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#001219",
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginVertical: 5,
    borderRadius: 30,
    borderColor: "#F1FAEE",
    color: "#fff",
    borderWidth: 0.2,
    width: "100%",
  },
});
