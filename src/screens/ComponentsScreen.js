import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Basic } from "../components/Basic";

export const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "red",
  },
  view: {
    margin: 10,
  }
});

export const ComponentsScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.view}>
        <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      </View>
      <Text>This is component screen!</Text>
      <Basic />
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
}
