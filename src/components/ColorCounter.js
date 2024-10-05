import { Button, Text, View } from 'react-native';

export const ColorCounter = ({ colorName, colorIndex, setColor }) => {
  const isValueValid = (value) => {
    return value >= 0 && value <= 255;
  };

  return (
    <View>
      <Text>{colorName}:</Text>
      <Button title={`More ${colorName}`} onPress={() => setColor((prev) => {
        const newColor = [...prev];
        const newValue = newColor[colorIndex] + 15;
        if (isValueValid(newValue)) {
          newColor[colorIndex] = newValue;
        }
        return newColor;
      })} />
      <Button title={`Less ${colorName}`} onPress={() => setColor((prev) => {
        const newColor = [...prev];
        const newValue = newColor[colorIndex] - 15;
        if (isValueValid(newValue)) {
          newColor[colorIndex] = newValue;
        }
        return newColor;
      })} />
    </View>
  );
};
