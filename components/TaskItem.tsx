import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Task } from "./TasksList";
import { TabBarIcon } from "./navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";

interface TaskItemProps {
  index: number;
  task: Task;
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  updateTaskName: (id: number, newTaskName: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  index,
  task,
  toggleTaskDone,
  removeTask,
  updateTaskName,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingTaskText, setEditingTaskText] = useState(task.title);
  const textInputRef = useRef<TextInput>(null);

  function handleStartEdition() {
    setIsEditing(true);
  }

  function handleCancelEdition() {
    setIsEditing(false);
    setEditingTaskText(task.title);
  }

  function handleSubmitEditing() {
    updateTaskName(task.id, editingTaskText);
    setIsEditing(false);
  }

  function handleRemoveTask(id: number) {
    if (!isEditing) {
      Alert.alert("Delete task", "Are you sure?", [
        { text: "No" },
        {
          text: "Yes",
          onPress: () => removeTask(id),
        },
      ]);
    }
  }

  useEffect(() => {
    if (isEditing) {
      textInputRef.current?.focus();
    } else {
      textInputRef.current?.blur();
    }
  }, [isEditing]);

  return (
    <>
      <View>
        <TouchableOpacity
          testID={`button-${index}`}
          activeOpacity={1}
          style={styles.taskButton}
        >
          <TouchableOpacity
            testID={`marker-${index}`}
            style={task.done ? styles.taskMarkerDone : styles.taskMarker}
            onPress={() => toggleTaskDone(task.id)}
          >
            {task.done && (
              <TabBarIcon name="checkmark-outline" size={12} color={Colors.default.white} />
            )}
          </TouchableOpacity>
          <TextInput
            ref={textInputRef}
            style={task.done ? styles.taskTextDone : styles.taskText}
            editable={isEditing}
            onChangeText={setEditingTaskText}
            value={editingTaskText}
            onSubmitEditing={handleSubmitEditing}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.iconsContainer}>
        <TouchableOpacity
          testID={`edit-${index}`}
          style={styles.editBorderRight}
          onPress={!isEditing ? handleStartEdition : handleCancelEdition}
        >
          {!isEditing ? (
            <TabBarIcon name="pencil" color={Colors.default.darkGray} size={20} />
          ) : (
            <TabBarIcon
              name="close"
              size={24}
              color={Colors.default.mediumGray}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          testID={`trash-${index}`}
          style={styles.padding}
          onPress={() => handleRemoveTask(task.id)}
        >
          <TabBarIcon name="trash-outline" color={Colors.default.darkGray} size={20} />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  taskButton: {
    paddingHorizontal: 24,
    paddingVertical: 15,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.default.checkboxGray,
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  taskText: {
    color: Colors.default.text,
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 4,
    backgroundColor: Colors.default.success,
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  taskTextDone: {
    color: Colors.default.success,
    textDecorationLine: "line-through",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  editBorderRight: {
    paddingHorizontal: 12,
    borderRightColor: Colors.default.grayTranslucent,
    borderRightWidth: 1,
  },
  padding: {
    paddingLeft: 12,
    paddingRight: 24,
  },
});
