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
import DotIndicator from '../indicator';
import {IndicatorInstruction1} from '../../assets/icons/icon';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const buttonDimensions = SCREEN_HEIGHT * 0.05;
const buttonBorderWidth = SCREEN_WIDTH * 0.3;
const buttonBorderColor = '#BAD0FF';

const instructionBarWidth = SCREEN_HEIGHT * 0.41;

const imgHeight = SCREEN_HEIGHT * 0.69;
const imgWidth = SCREEN_WIDTH * 0.75;

const Instruction1 = () => {
  let navigation = useNavigation();
  const Intro = () => {
    navigation.navigate('intro');
  };
  const Instruction2 = () => {
    navigation.navigate('instruction2');
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
          source={require('../../assets/images/InstructionImg1.png')}
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
            Приобретайте в рассрочку с ZPAY менее чем за 2 минуты
          </Text>
          <Text style={styles.instructionText2}>
            Покупайте сейчас и платите равными частями в срок до 6 месяцев!
            Пройдите быструю регистрацию, имея только Паспорт и платежную карту
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{alignItems: 'center'}}>
            <IndicatorInstruction1 />
          </View>
          <TouchableOpacity onPress={Instruction2}>
            <View style={styles.nextButton}>
              <Text style={styles.buttonText}>Дальше</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* </View> */}
      </LinearGradient>
    </View>
  );
};

export default Instruction1;

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
    marginTop: 30,
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
    fontSize: 14,
    fontWeight: 'bold',
  },
  instructionText2: {
    color: '#878B9A',
    fontSize: 12,
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
    // backgroundColor: 'black',
  },
  nextButton: {
    paddingVertical: 15,
    paddingHorizontal: 37.5,
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