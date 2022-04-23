import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Task = ({ task, removeTask }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemsLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}> {task} </Text>
      </View>
      <TouchableOpacity style={styles.circular} onPress={removeTask}>
        <Text style={{ color: "#E63946" }}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemsLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 26,
    height: 26,
    backgroundColor: "#A8DADC",
    opacity: 0.4,
    borderRadius: 10,
    marginRight: 10,
  },
  itemText: {
    maxWidth: "80%",
  },
  circular: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#E63946",
    backgroundColor: "#fff",
    opacity: 0.4,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Task;
