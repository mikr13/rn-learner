import { Button, Text, View } from 'react-native';

export const ColorCounter = ({ colorName, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{colorName}:</Text>
      <Button title={`More ${colorName}`} onPress={() => onIncrease()} />
      <Button title={`Less ${colorName}`} onPress={() => onDecrease()} />
    </View>
  );
};
