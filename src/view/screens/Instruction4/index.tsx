import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {rgba} from 'polished';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const buttonDimensions = SCREEN_HEIGHT * 0.05; // this is equivalent to 255 from a 393 device width
const buttonBorderWidth = SCREEN_WIDTH * 0.9; // this is equivalent to 2 from a 393 device width
const buttonBorderColor = '#BAD0FF';

const instructionBarWidth = SCREEN_HEIGHT * 0.41;

// const instructionBarHeight = SCREEN_WIDTH * 0.0085;
// const instructionBarColor = '#FFFFFF';
const imgHeight = SCREEN_HEIGHT * 0.73;
const imgWidth = SCREEN_WIDTH * 0.78;

const Instruction4 = () => {
  let navigation = useNavigation();
  const Register = () => {
    navigation.navigate('register');
  };
  const Intro = () => {
    navigation.navigate('intro');
  };

  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <TouchableOpacity onPress={Intro}>
          <Text style={styles.skibText}>Пропустить</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.img}>
        <Image
          source={require('../../assets/images/InstructionImg4.png')}
          style={{
            height: imgHeight,
            width: imgWidth,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </View>
      <LinearGradient
        colors={[
          '#ffffff00',
          'white',
          'white',
          'white',
          'white',
          'white',
          'white',
          'white',
        ]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.instruction}>
        <View>
          <Text style={styles.instructionText}>
            Просматривайте и управляйте своими покупками!
          </Text>
          <Text style={styles.instructionText2}>
            Просматривайте свои прошлые и текущие договора, и платежи.
            Управляйте своими данными в едином приложении
          </Text>
        </View>
        {/* <View style={styles.flex}> */}
        {/* <Text style={{color: 'red'}}>jknklj</Text> */}
        <TouchableOpacity onPress={Register}>
          <View style={styles.nextButton}>
            <Text style={styles.buttonText}>Дальше</Text>
          </View>
        </TouchableOpacity>
        {/* </View> */}
      </LinearGradient>
    </View>
  );
};

export default Instruction4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  skibText: {
    color: '#3554D1',
    fontSize: 16,
    marginTop: 69,
    textAlign: 'right',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#3554D1',
    fontWeight: '700',
  },
  line: {
    paddingHorizontal: 24,
  },
  img: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  instruction: {
    // flex: 1,
    position: 'absolute',
    height: instructionBarWidth,
    width: '100%',
    // backgroundColor: 'red',
    marginTop: 470,
    paddingHorizontal: 24,
    paddingVertical: 60,
    // alignItems: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  instructionText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  instructionText2: {
    color: '#878B9A',
    fontSize: 14,
    // marginTop: 10,
    paddingVertical: 10,
    // backgroundColor: 'red',
  },
  buttons: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // marginTop: 40,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'black',
  },
  nextButton: {
    paddingVertical: 15,
    alignItems: 'center',
    width: '100%',
    backgroundColor: buttonBorderColor,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    color: '#2740A6',
  },
  flex: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'flex-end',
  },
});
