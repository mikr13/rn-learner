import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'red'
  }
})

export const Basic = () => {
  return <Text style={styles.text}>Basic Component</Text>;
}

