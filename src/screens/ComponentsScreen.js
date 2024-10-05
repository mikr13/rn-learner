import { Button, Text, TouchableOpacity, View } from "react-native";
import { Basic } from "../components/Basic";
import { baseStyles } from "../lib/basic-styles";

export const ComponentsScreen = ({ navigation }) => {
  return (
    <View>
      <View style={baseStyles.view}>
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
