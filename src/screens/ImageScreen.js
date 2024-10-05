import { Button, View } from 'react-native';
import { ImageDetail } from '../components/ImageDetail';
import { baseStyles } from "../lib/basic-styles";

export const ImageScreen = ({ navigation }) => {
  return (
    <View>
      <View style={baseStyles.view}>
        <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      </View>
      <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} score={9} />
      <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} score={8} />
      <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} score={7} />
    </View>
  );
};
