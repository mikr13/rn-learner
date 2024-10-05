import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { baseStyles } from "../lib/basic-styles";
import { randomRgb } from "../lib/color-generator";

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    margin: 10,
    alignItems: 'center',
  }
});

export const ColorScreen = ({ navigation }) => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <View style={baseStyles.view}>
        <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      </View>
      <View>
        <Button title="Generate color" onPress={() => setColors((prev) => ([...prev, randomRgb()]))} />
      </View>
      <FlatList
        data={colors}
        renderItem={({ item }, idx) => (
          <View key={idx} style={styles.view}>
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
            <Text>Color key: {item}</Text>
          </View>
        )}
      />
    </View>
  );
}
