import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello there!</Text>
      <Button title="Go to components screen" onPress={() => navigation.navigate("Components")} />
      <Button title="Go to list screen" onPress={() => navigation.navigate("List")} />
    </View>
  );
};

