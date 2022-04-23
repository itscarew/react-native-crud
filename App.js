import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";

import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [taskIndex, setTaskIndex] = useState();

  const handleChange = (value) => {
    setTask(value);
  };

  const addTask = () => {
    if (task) {
      Keyboard.dismiss();
      setTaskList([...taskList, task]);
      setTask("");
    } else {
      Alert.alert("MiniTweet", "Mini tweet can't be empty");
    }
  };

  const removeTask = (i) => {
    let tempArr = [...taskList];
    tempArr.splice(i, 1);
    setTaskList(tempArr);
  };

  const getTaskText = (tasksText, index) => {
    setIsEditing(true);
    setTask(tasksText);
    setTaskIndex(index);
  };

  const editATask = () => {
    if (task) {
      taskList[taskIndex] = task;
      setIsEditing(false);
      Keyboard.dismiss();
      setTask("");
    } else {
      Alert.alert("MiniTweet", "Mini tweet can't be empty");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}> Todays Mini Tweet </Text>
        <View style={styles.items}>
          <View>
            {taskList.length < 1 ? (
              <Text style={{ marginHorizontal: 10 }}>Mini tweet something</Text>
            ) : (
              <View>
                {taskList.map((tasksText, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => getTaskText(tasksText, index)}
                    >
                      <Task
                        task={tasksText}
                        removeTask={() => removeTask(index)}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </View>
        </View>
      </ScrollView>

      {isEditing ? (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            multiline
            style={styles.input}
            placeholder="Edit this task"
            value={task}
            onChangeText={handleChange}
          />
          <TouchableOpacity onPress={editATask}>
            <View style={styles.editTask}>
              <Text style={styles.addText}>#</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      ) : (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            multiline
            style={styles.input}
            placeholder="Write a task"
            value={task}
            onChangeText={handleChange}
          />
          <TouchableOpacity onPress={addTask}>
            <View style={styles.addTask}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#457B9D",
  },
  taskWrapper: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 60,
    borderColor: "#F1FAEE",
    borderWidth: 1,
    width: 250,
  },
  addTask: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#F1FAEE",
    borderWidth: 1,
  },
  editTask: {
    width: 60,
    height: 60,
    backgroundColor: "#1D3557",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#1D3557",
    borderWidth: 1,
  },
  addText: {
    fontSize: 24,
    color: "#A8DADC",
  },
});
