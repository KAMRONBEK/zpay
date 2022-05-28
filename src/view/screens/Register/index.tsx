import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
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
import Mask from '../Mask';
import VerificationNumber from '../VerificationNumber';
// import TextInputMask from 'react-native-text-input-mask';
import MaskInput from 'react-native-mask-input';
import {strings} from '../../locales/strings';

const creditCardMask = [
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
];

const Register = () => {
  const [value, setValue] = React.useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  let navigation = useNavigation();
  const Verification = () => {
    navigation.navigate('verification');
  };

  // const pressHandler = () => {
  //   if (phone.length == 9) {
  //   } else {
  //   }
  // };
  const [creditCard, setCreditCard] = React.useState('');

  return (
    <View style={styles.container}>
      {/* <KeyboardAwareScrollView showsVerticalScrollIndicator={false}> */}

      <View style={styles.text}>
        <Text style={styles.text1}>{strings.Регистрация}</Text>
      </View>
      <Text style={{fontSize: 16, color: '#878B9A', marginTop: 10}}>
        Создание нового аккунта
      </Text>
      <View style={styles.text2}>
        <Text style={styles.text3}>Номер телефона</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          creditCard;
        }}>
        <View
          style={[
            styles.sectionInput,
            {borderColor: creditCard ? '#3554D1' : '#EAEFF3'},
          ]}>
          <Image
            source={require('../../assets/images/FlagImg.png')}
            style={{height: 24, width: 24, marginLeft: 18}}
          />
          <View style={styles.border} />
          <Text style={{color: '#12154C'}}>+998</Text>
          <MaskInput
            value={creditCard}
            keyboardType="number-pad"
            mask={creditCardMask}
            showObfuscatedValue
            obfuscationCharacter="#"
            style={{color: '#12154C', width: '100%', padding: 12}}
            onChangeText={(masked, unmasked, obfuscated) => {
              setCreditCard(unmasked);
              console.log(masked);
              console.log(unmasked);
              console.log(obfuscated);
            }}
          />
        </View>
      </TouchableOpacity>
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
