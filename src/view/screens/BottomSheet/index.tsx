import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Torch from 'react-native-torch';

const TorchLight = () => {
  const [isTorchON, setisTorchON] = useState(false);

  const handlerTurnOnOFFTorch = () => {
    Torch.switchState(!isTorchON);
    setisTorchON(!isTorchON);
  };
  const onPressHandler = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {backgroundColor: handlerTurnOnOFFTorch ? '#FFF' : '#E5EBF0'},
        ]}
        onPress={handlerTurnOnOFFTorch}>
        <Image source={require('../../assets/images/flash.png')} />
        <Text
          style={{
            fontSize: 14,
            color: handlerTurnOnOFFTorch ? '#32B179' : '#878B9A',
          }}>
          {isTorchON ? 'Выкл ' : 'Вкл'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default TorchLight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 22,
    color: 'red',
  },
  buttonStyle: {
    height: 65,
    width: 54,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    textAlign: 'center',
    color: 'red',
  },
});
