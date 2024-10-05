import React from "react";
import { Button, Text, View } from "react-native";
import { baseStyles } from "../lib/basic-styles";

export const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={baseStyles.text}>Hello there!</Text>
      <Button title="Go to components screen" onPress={() => navigation.navigate("Components")} />
      <Button title="Go to list screen" onPress={() => navigation.navigate("List")} />
      <Button title="Go to image screen" onPress={() => navigation.navigate("Image")} />
      <Button title="Go to counter screen" onPress={() => navigation.navigate("Counter")} />
      <Button title="Go to color screen" onPress={() => navigation.navigate("Color")} />
      <Button title="Go to color adjuster screen" onPress={() => navigation.navigate("ColorAdjuster")} />
    </View>
  );
};

