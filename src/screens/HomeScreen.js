import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export const HomeScreen = () => {
  return (
    <Text style={styles.text}>Hello there!
    </Text>
  );
};

