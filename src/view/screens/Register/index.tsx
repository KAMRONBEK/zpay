import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  BackHandler,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Back, CheckIcon, Flag, RU} from '../../assets/icons/icon';
import VerificationNumber from '../VerificationNumber';
// import TextInputMask from 'react-native-text-input-mask';

const Register = () => {
  let navigation = useNavigation();
  const Verification = () => {
    navigation.navigate('verification');
  };

  return (
    <View style={styles.container}>
      {/* <KeyboardAwareScrollView showsVerticalScrollIndicator={false}> */}
      {/* <View style={styles.headbar}>
        <TouchableOpacity onPress={navigation.goBack}>
          <View style={styles.headback}>
            <Back />
          </View>
        </TouchableOpacity>
        <View style={styles.headback}>
          <RU />
        </View>
      </View> */}
      <View style={styles.text}>
        <Text style={styles.text1}>Регистрация</Text>
      </View>
      <Text style={{fontSize: 16, color: '#878B9A', marginTop: 10}}>
        Создание нового аккунта
      </Text>
      <View style={styles.text2}>
        <Text style={styles.text3}>Номер телефона</Text>
      </View>
      <View style={styles.sectionInput}>
        <Image
          source={require('../../assets/images/FlagImg.png')}
          style={{height: 24, width: 24, marginLeft: 18}}
        />
        <View style={styles.border} />
        <Text style={{color: '#12154C'}}>+998</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          // placeholder="+998"
          // placeholderTextColor={'#12154C'}
          // value="This cannot be edited"
          // secureTextEntry={true}
        />
        {/* <TextInputMask
  onChangeText={(formatted, extracted) => {
    console.log(formatted) // +1 (123) 456-78-90
    console.log(extracted) // 1234567890
  }}
  mask={"+1 ([000]) [000] [00] [00]"}
/> */}
      </View>
      {/* <TouchableOpacity onPress={Verification}>
          <View style={styles.nextButton}>
            <Text style={{color: 'white', fontSize: 14}}>Продолжить</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.img}>
          <Image
            source={require('../../assets/images/IndicatorIcon.png')}
            style={{height: 9.1, width: 32}}
          />
        </View> */}
      {/* </KeyboardAwareScrollView> */}
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 24,
    // paddingVertical: 51,
  },
  headback: {
    backgroundColor: '#ffff',
    borderWidth: 0.5,
    borderColor: '#EAEFF3',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  headbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginVertical: 52,
  },
  text: {
    marginTop: 62,
  },
  text1: {
    color: '#3554D1',
    fontSize: 24,
    // paddingLeft: 20,
    fontWeight: '600',
  },
  text2: {
    marginTop: 20,
  },
  text3: {
    color: '#12154C',
    fontSize: 14,
    fontWeight: 'bold',
    // paddingLeft: 20,
  },
  sectionInput: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#EAEFF3',
    marginTop: 11,
  },
  border: {
    height: 23,
    width: 1,
    backgroundColor: 'grey',
    marginRight: 10,
    marginLeft: 15,
  },
  input: {
    color: '#12154C',
    padding: 12,
    width: '100%',
    paddingHorizontal: 2,
  },
  checkIcon: {
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
  },
  nextButton: {
    backgroundColor: '#427CF8',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EAEFF3',
    paddingVertical: 15,
    marginTop: 129,
  },
  img: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
