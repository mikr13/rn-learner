import { Text, TouchableOpacity, View } from "react-native";
import { Basic } from "../components/Basic";

export const ComponentsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>This is component screen!</Text>
      <Basic />
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
}
