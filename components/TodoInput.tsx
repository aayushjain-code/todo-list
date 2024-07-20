import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Text,
  Pressable,
} from "react-native";
import { TabBarIcon } from "./navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";

interface TodoInputProps {
  addTask: (task: string) => void;
  setModalVisible: (arg: boolean) => void;
}

export function TodoInput({ addTask, setModalVisible }: TodoInputProps) {
  const [task, setTask] = useState("");

  function handleAddNewTask() {
    if (task) {
      addTask(task);
      setTask("");
      setModalVisible(false);
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add Task"
        placeholderTextColor={Colors.default.checkboxGray}
        returnKeyType="send"
        selectionColor={Colors.default.darkGray}
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={styles.addButton}
        onPress={handleAddNewTask}
      >
        <TabBarIcon name="add-circle-outline" size={24} color={Colors.default.checkboxGray} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.default.white,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    padding: 10,
    borderBottomLeftRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.default.mediumGray,
    color: Colors.default.darkGray,
  },
  addButton: {
    backgroundColor: Colors.default.white,
    height: 56,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
