import { Button, FlatList, Text, View } from "react-native";
import { baseStyles } from "../lib/basic-styles";

const friends = [
  { name: "Friend #1", age: 20 },
  { name: "Friend #2", age: 21 },
  { name: "Friend #3", age: 22 },
  { name: "Friend #4", age: 23 },
];

export const ListScreen = ({ navigation }) => {

  return (
    <View>
      <View style={baseStyles.view}>
        <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      </View>
      <View style={baseStyles.view}>
        <Text>Normal List (with Array.map):</Text>
        {friends.map((friend) => (
          <Text key={friend.name} style={baseStyles.text}>
            {friend.name} - Age {friend.age}
          </Text>
        ))}
      </View>
      <View style={baseStyles.view}>
        <Text>Flat List (preferred in RN as it has built in scrolling & other optimizations): </Text>
        <FlatList
          data={friends}
          renderItem={({ item }, idx) => (
            <Text style={baseStyles.text} key={idx}>
              {/* Can either do key like this or use keyExtractor prop */}
              {item.name} - Age {item.age}
            </Text>
          )}
        />
      </View>
    </View>
  );
}
