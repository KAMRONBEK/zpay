import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  BackHandler,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import TabNavigation from '../../../navigationtap';
import {Routes} from '../../../routes/routes';
import {Back, CheckIcon, Flag, RU} from '../../assets/icons/icon';
import {strings} from '../../locales/strings';
import VerifiyInput from '../TextInput';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const inputHeight = SCREEN_HEIGHT * 0.055; // this is equivalent to 255 from a 393 device width
const inputWidth = SCREEN_WIDTH * 0.12; // this is equivalent to 2 from a 393 device width

const VerificationNumber = () => {
  let navigation = useNavigation();

  // const TabNavigation = () => {
  //   navigation.navigate('DrawerNavigator');
  // };
  // const DrawerNavigator = () => {
  //   navigation.navigate('DrawerNavigator');
  // };

  // let textInput = useRef(null);

  // const lengthInput = 4;

  // const [internalVal, setInterVal] = useState('');

  // const onChangeText = val => {
  //   setInterVal(val);
  // };

  // useEffect(() => {
  //   let handler = BackHandler.addEventListener('hardwareBackPress', () => {
  //     textInput.current.blur();
  //     return true;
  //   });
  //   if (textInput.current) {
  //     console.log('Focusing');
  //     textInput.current.focus();
  //   }
  //   return () => BackHandler.removeEventListener('hardwareBackPress', handler);
  // }, []);

  // useEffect(() => {
  //   if (internalVal.length === 4) {
  //     navigation.navigate('Id');
  //   }
  // }, [internalVal]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.text}>
            <Text style={styles.text1}>{strings.Верификация}</Text>
            <Text style={styles.text1}>{strings.пользователя}</Text>
          </View>
          <View style={styles.text2}>
            <Text style={styles.text3}>Мы выслали код подверждения</Text>
            <View style={styles.headnumber}>
              <Text style={styles.text3}> на номер: </Text>
              <Text style={styles.number}>+998909900110</Text>
            </View>
          </View>

          <VerifiyInput />
          <View style={styles.codetext}>
            <Text style={styles.code}>Не получили код?</Text>
            <Text style={styles.code1}> Переслать</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerificationNumber;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    paddingHorizontal: 24,
  },
  headback: {
    backgroundColor: '#ffff',
    borderWidth: 0.5,
    borderColor: '#EAEFF3',
    borderRadius: 10,
    // marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 15,
    padding: 15,
  },
  headbar: {
    marginTop: 52,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headnumber: {
    flexDirection: 'row',
  },
  text: {
    marginTop: 62,
    paddingLeft: 27,
  },
  text1: {
    color: '#3554D1',
    fontSize: 24,
    fontWeight: '700',
  },
  text2: {
    marginTop: 20,
    paddingLeft: 27,
  },
  text3: {
    color: 'grey',
    fontSize: 16,
    fontWeight: '600',
  },
  number: {
    color: 'blue',
    fontSize: 16,
    marginTop: 3,
  },

  code: {
    color: 'grey',
    fontSize: 14,
    alignItems: 'center',
  },
  code1: {
    color: '#427CF8',
    fontSize: 14,
    alignItems: 'center',
  },
  codetext: {
    marginTop: 15,
    flexDirection: 'row',
    // alignItems: 'center',
    // paddingLeft: 43,
    justifyContent: 'center',
  },
  sectionInput: {
    backgroundColor: '#ffff',
    marginHorizontal: 30,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    padding: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#EAEFF3',
  },

  border: {
    height: 23,
    width: 1,
    backgroundColor: 'grey',
    marginRight: 10,
    marginLeft: 20,
  },
  input: {},
  checkIcon: {
    paddingLeft: 150,
  },
  nextButton: {
    backgroundColor: '#427CF8',
    // height: 52,
    paddingVertical: 15,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 18,
    marginTop: 43,
    borderWidth: 0.9,
    borderColor: '#EAEFF3',
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
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#EAEFF3',
  },
  cellText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
  },
  img: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
