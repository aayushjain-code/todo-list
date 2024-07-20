import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { TabBarIcon } from "./navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";

interface HeaderProps {
  tasksCounter: number;
  setModalVisible: (arg: boolean) => void;
}

export function Header({ tasksCounter, setModalVisible }: HeaderProps) {
  const tasksCounterText = tasksCounter === 1 ? `Task` : `Tasks`;

  return (
    <View style={styles.container}>
      <View style={styles.tasks}>
        <Text style={styles.tasksCounter}>There are </Text>
        <Text style={styles.tasksCounterBold}>
          {tasksCounter} {tasksCounterText}
        </Text>
      </View>
      <Pressable
        onPress={() => setModalVisible(true)}
      >
        <TabBarIcon name={"add"} color={Colors.default.white} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingHorizontal: 24,
    backgroundColor: Colors.default.modernBlue,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  tasks: {
    alignItems: "center",
    flexDirection: "row",
  },
  tasksCounter: {
    fontSize: 15,
    color: Colors.default.white,
  },
  tasksCounterBold: {
    fontSize: 15,
    color: Colors.default.white,
  },
});
