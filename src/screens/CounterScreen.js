import { useState } from "react";
import { Button, Text, View } from "react-native";
import { baseStyles } from "../lib/basic-styles";

export const CounterScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <View style={baseStyles.view}>
        <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      </View>
      <View>
        <Button title="Increase" onPress={() => setCount(count + 1)} />
        <Button title="Decrease" onPress={() => setCount(count - 1)} />
        <Text>Current Count: {count}</Text>
      </View>
    </View>
  );
}
