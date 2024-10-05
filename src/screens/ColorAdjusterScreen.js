import { useReducer } from "react";
import { Button, Text, View } from "react-native";
import { ColorCounter } from "../components/ColorCounter";
import { baseStyles } from "../lib/basic-styles";

const INCREMENT = 15;

const reducer = (state, action) => {
  const isValueValid = (value) => {
    return value >= 0 && value <= 255;
  };

  switch (action.type) {
    case "CHANGE_RED":
      return { ...state, red: isValueValid(action.payload) ? action.payload : state.red };
    case "CHANGE_GREEN":
      return { ...state, green: isValueValid(action.payload) ? action.payload : state.green };
    case "CHANGE_BLUE":
      return { ...state, blue: isValueValid(action.payload) ? action.payload : state.blue };
    default:
      return state;
  }
};

export const ColorAdjusterScreen = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <View style={baseStyles.view}>
        <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      </View>
      <ColorCounter
        colorName="Red"
        onIncrease={() => {
          dispatch({ type: "CHANGE_RED", payload: state.red + INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "CHANGE_RED", payload: state.red - INCREMENT });
        }}
      />
      <ColorCounter
        colorName="Green"
        onIncrease={() => {
          dispatch({ type: "CHANGE_GREEN", payload: state.green + INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "CHANGE_GREEN", payload: state.green - INCREMENT });
        }}
      />
      <ColorCounter
        colorName="Blue"
        onIncrease={() => {
          dispatch({ type: "CHANGE_BLUE", payload: state.blue + INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "CHANGE_BLUE", payload: state.blue - INCREMENT });
        }}
      />

      <View style={baseStyles.view}>
        <View style={{ height: 100, width: 100, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` }} />
        <Text>Color key: rgb({`${state.red}`}, {`${state.green}`}, {`${state.blue}`})</Text>
      </View>
    </View>
  );
}
