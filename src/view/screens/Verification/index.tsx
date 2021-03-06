import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import 'react-native-gesture-handler';
import {
  KeyboardAvoidingView,
  BackHandler,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';
import {Back, CheckIcon, Flag, RU} from '../../assets/icons/icon';
import VerifiyInput from '../TextInput';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const inputHeight = SCREEN_HEIGHT * 0.055; // this is equivalent to 255 from a 393 device width
const inputWidth = SCREEN_WIDTH * 0.12; // this is equivalent to 2 from a 393 device width

const Verification = () => {
  let navigation = useNavigation();
  let textInput = useRef(null);
  const Id = () => {
    navigation.navigate('id');
  };

  const lengthInput = 4;

  const [internalVal, setInterVal] = useState('');

  const onChangeText = val => {
    setInterVal(val);
  };

  useEffect(() => {
    let handler = BackHandler.addEventListener('hardwareBackPress', () => {
      textInput.current.blur();
      return true;
    });
    if (textInput.current) {
      console.log('Focusing');
      textInput.current.focus();
    }
    return () => BackHandler.removeEventListener('hardwareBackPress', handler);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.text1}>Верификация номера</Text>
      </View>
      <View style={styles.text2}>
        <Text style={styles.text3}>Мы выслали код подверждения</Text>
        <View style={styles.headnumber}>
          <Text style={styles.text3}> на номер: </Text>
          <Text style={styles.number}>+998909900110</Text>
        </View>
        {/* <View style={styles.hour}>
          <Text style={styles.hourtext}>0:57</Text>
        </View> */}
      </View>

      <VerifiyInput />
      <View style={styles.codetext}>
        <Text style={styles.code}>Не получили код?</Text>
        <Text style={styles.code1}>Переслать</Text>
      </View>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingHorizontal: 24,
    // paddingVertical: 51,
  },
  headback: {
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderColor: '#EAEFF3',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  headbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headnumber: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    marginTop: 62,
    alignItems: 'center',
  },
  text1: {
    color: '#3554D1',
    fontSize: 24,
    fontWeight: '600',
    // paddingLeft: 20,
  },
  text2: {
    marginTop: 10,
    alignItems: 'center',
  },
  text3: {
    color: '#878B9A',
    fontSize: 16,
    justifyContent: 'center',
  },
  number: {
    color: 'blue',
    fontSize: 16,
    marginTop: 3,
  },
  hour: {
    marginVertical: 20,
  },
  hourtext: {
    color: 'black',
    fontSize: 14,
  },
  code: {
    color: 'grey',
    fontSize: 14,
    alignItems: 'center',
  },
  code1: {
    color: '#3554D1',
    fontSize: 14,
    alignItems: 'center',
    marginLeft: 5,
  },
  codetext: {
    marginTop: 20,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  nextButton: {
    backgroundColor: '#427CF8',
    borderRadius: 10,
    // marginHorizontal: 30,
    alignItems: 'center',
    marginTop: 70,
    borderWidth: 1,
    borderColor: '#EAEFF3',
    paddingVertical: 15,
  },
  img: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellView: {
    width: inputHeight,
    height: inputWidth,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EAEFF3',
  },
  cellText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
  },
});
