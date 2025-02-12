import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { ItemWrapper } from "./ItemWrapper";
import { TaskItem } from "./TaskItem";

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TasksListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  updateTaskName: (id: number, newTaskName: string) => void;
}

export function TasksList({
  tasks,
  toggleTaskDone,
  removeTask,
  updateTaskName,
}: TasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <ItemWrapper index={index}>
            <TaskItem
              index={index}
              task={item}
              toggleTaskDone={toggleTaskDone}
              removeTask={removeTask}
              updateTaskName={updateTaskName}
            />
          </ItemWrapper>
        );
      }}
      style={styles.marginTop}
    />
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: 24
  },
  marginTop: {
    marginTop: 32
  }
})
