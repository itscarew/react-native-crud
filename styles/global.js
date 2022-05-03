import { StyleSheet, Text, View } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#005f73",
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "#333",
  },
  paragraph: {
    fontFamily: "nunito-regular",
    marginVertical: 5,
  },

  paragraphBold: {
    fontFamily: "nunito-bold",
    marginVertical: 5,
  },

  paragraphSemiBold: {
    fontFamily: "nunito-semibold",
    marginVertical: 5,
  },

  errorMessage: {
    fontFamily: "nunito-regular",
    marginVertical: 2,
    color: "#e9d8a6",
    textTransform: "lowercase",
  },

  warningMessage: {
    fontFamily: "nunito-regular",
    marginVertical: 2,
    textTransform: "lowercase",
  },
});
