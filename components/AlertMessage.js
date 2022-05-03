import { StyleSheet, Text } from "react-native";
import { globalStyles } from "../styles/global";

export const AlertMessage = ({ message, type }) => {
  if (message) {
    return (
      <Text
        style={
          type === "error"
            ? globalStyles.errorMessage
            : globalStyles.warningMessage
        }
      >
        {message}
      </Text>
    );
  } else return null;
};

const styles = StyleSheet.create({});
