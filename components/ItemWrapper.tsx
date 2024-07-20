import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import LinearGradient from "expo-linear-gradient";

interface ItemWrapperProps {
  index: number;
  children: ReactNode;
}

export const ItemWrapper = ({ index, children }: ItemWrapperProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
