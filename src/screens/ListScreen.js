import { FlatList, StyleSheet, Text, View } from "react-native";

export const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "red",
  },
  view: {
    margin: 10,
  }
});

const friends = [
  { name: "Friend #1", age: 20 },
  { name: "Friend #2", age: 21 },
  { name: "Friend #3", age: 22 },
  { name: "Friend #4", age: 23 },
  { name: "Friend #5", age: 24 },
  { name: "Friend #6", age: 25 },
  { name: "Friend #7", age: 26 },
  { name: "Friend #8", age: 27 },
  { name: "Friend #9", age: 28 },
];

export const ListScreen = () => {

  return (
    <View>
      <View style={styles.view}>
        <Text>Normal List (with Array.map):</Text>
        {friends.map((friend) => (
          <Text key={friend.name} style={styles.text}>
            {friend.name} - Age {friend.age}
          </Text>
        ))}
      </View>
      <View style={styles.view}>
        <Text>Flat List (preferred in RN as it has built in scrolling & other optimizations): </Text>
        <FlatList
          data={friends}
          renderItem={({ item }, idx) => (
            <Text style={styles.text} key={idx}>
              {/* Can either do key like this or use keyExtractor prop */}
              {item.name} - Age {item.age}
            </Text>
          )}
        />
      </View>
    </View>
  );
}
