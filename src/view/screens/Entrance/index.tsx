import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Back, CheckIcon, Flag, RU} from '../../assets/icons/icon';
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

const Entrance = () => {
  let navigation = useNavigation();
  const VerificationNumber = () => {
    navigation.navigate('verificationnumber');
  };
  const [creditCard, setCreditCard] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.enter}>
        <Text style={styles.entertext}>{strings.Вход}</Text>
      </View>
      <View style={styles.number}>
        <Text style={styles.numbertext}>Номер телефона</Text>
      </View>
      <View style={styles.sectionInput}>
        <Flag style={{marginLeft: 18}} />
        <View style={styles.border} />
        <Text style={{color: '#12154C'}}>+998</Text>
        <MaskInput
          value={creditCard}
          keyboardType="number-pad"
          mask={creditCardMask}
          showObfuscatedValue
          obfuscationCharacter="#"
          style={{color: '#12154C', marginTop: 1, width: '100%'}}
          onChangeText={(masked, unmasked, obfuscated) => {
            setCreditCard(unmasked); // you can use the masked value as well

            // assuming you typed "1234123412341234":
            console.log(masked); // "1234 1234 1234 1234"
            console.log(unmasked); // "1234123412341234"
            console.log(obfuscated); // "1234 #### #### 1234"
          }}
        />
      </View>
    </View>
  );
};

export default Entrance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  enter: {},
  entertext: {
    color: '#3554D1',
    fontSize: 24,
    marginTop: 62,
    fontWeight: '700',
  },
  number: {
    marginTop: 30,
  },
  numbertext: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
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

  nextButton: {
    backgroundColor: '#427CF8',
    borderRadius: 10,
    alignItems: 'center',
    padding: 12,
    marginTop: 130,
    borderWidth: 0.9,
    borderColor: '#EAEFF3',
  },
  img: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
