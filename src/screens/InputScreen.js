import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { baseStyles } from "../lib/basic-styles";

const styles = StyleSheet.create({
  input: {
    padding: 5,
    margin: 5,
  },
  error: {
    color: "red",
  }
})

export const InputScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordHint, setPasswordHint] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onChangePassword = (val) => {
    if (val.length < 8) {
      setPasswordHint("Password must be at least 8 characters long.");
    } else {
      setPasswordHint("");
    }
    setPassword(val);
  };

  return (
    <View>
      <View style={baseStyles.view}>
        <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      </View>
      <View style={baseStyles.view}>
        <Text>Enter Name:</Text>
        <TextInput
          aria-label="Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Name"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={baseStyles.view}>
        <Text>Enter Password:</Text>
        <TextInput
          aria-label="Password"
          style={styles.input}
          value={password}
          onChangeText={onChangePassword}
          placeholder="Password"
          secureTextEntry={!showPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {passwordHint ? <Text style={styles.error}>{passwordHint}</Text> : null}
        <Button
          title={`${showPassword ? "Hide" : "Show"} Password`}
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>
      <View style={baseStyles.view}>
        <Text>Name: {name}</Text>
      </View>
    </View>
  );
}
