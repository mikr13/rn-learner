import { useState } from "react";
import { Button, Text, View } from "react-native";
import { ColorCounter } from "../components/ColorCounter";
import { baseStyles } from "../lib/basic-styles";

export const ColorAdjusterScreen = ({ navigation }) => {
  const [color, setColor] = useState([0, 0, 0]);

  return (
    <View>
      <View style={baseStyles.view}>
        <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      </View>
      <ColorCounter colorName="Red" colorIndex={0} setColor={setColor} />
      <ColorCounter colorName="Green" colorIndex={1} setColor={setColor} />
      <ColorCounter colorName="Blue" colorIndex={2} setColor={setColor} />

      <View style={baseStyles.view}>
        <View style={{ height: 100, width: 100, backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})` }} />
        <Text>Color key: rgb({`${color[0]}`}, {`${color[1]}`}, {`${color[2]}`})</Text>
      </View>
    </View>
  );
}
