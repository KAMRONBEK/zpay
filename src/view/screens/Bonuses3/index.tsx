import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Back, Simkartu} from '../../assets/icons/icon';
import MaskInput, {createNumberMask} from 'react-native-mask-input';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
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

const dollarMask = createNumberMask({
  delimiter: '.',
  separator: '.',
  precision: 3,
  // prefix: ['cum'],
});

const Bonuses3 = () => {
  let navigation = useNavigation();
  const [value, setValue] = React.useState('');
  const [creditCard, setCreditCard] = React.useState('');

  return (
    // <SafeAreaView>
    <ScrollView style={{backgroundColor: '#FFF'}}>
      <View style={styles.container}>
        <View style={styles.head}>
          <View style={styles.head2}>
            <View style={styles.headback}>
              <TouchableOpacity onPress={navigation.goBack}>
                <View style={styles.back}>
                  <Back />
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.text}>Мобильная связь</Text>
            </View>
            <View style={styles.back}>
              <Simkartu />
            </View>
          </View>
        </View>

        {/* <KeyboardAwareScrollView> */}

        <View style={styles.container2}>
          <View>
            <View style={styles.sim}>
              <Image
                source={require('../../assets/images/SimCart.png')}
                style={{height: 78, width: 110}}
              />
            </View>
            <View style={styles.nomer}>
              <Text style={styles.nomertext}>Номер телефона</Text>
            </View>
            {/* <View style={styles.button}>
            <TextInput
              style={styles.input}
              placeholder="|"
              placeholderTextColor={'grey'}
              keyboardType="number-pad"
              // value={value}
            />
          </View> */}
            <View style={styles.sectionInput}>
              <Image
                source={require('../../assets/images/FlagImg.png')}
                style={{height: 24, width: 24, marginLeft: 18}}
              />
              <View style={styles.border} />
              <Text style={{color: '#12154C'}}>+998</Text>
              {/* <Mask /> */}
              <MaskInput
                value={creditCard}
                keyboardType="number-pad"
                mask={creditCardMask}
                showObfuscatedValue
                obfuscationCharacter="#"
                style={{
                  color: '#12154C',
                  marginTop: 1,
                  width: '100%',
                  padding: 12,
                }}
                onChangeText={(masked, unmasked, obfuscated) => {
                  setCreditCard(unmasked);
                  console.log(masked);
                  console.log(unmasked);
                  console.log(obfuscated);
                }}
              />
            </View>
            <View style={styles.nomer1}>
              <Text style={styles.nomertext1}>Сумма платежа</Text>
            </View>
            <View style={styles.button1}>
              <MaskInput
                mask={dollarMask}
                placeholder="Укажите сумму пополнения"
                placeholderTextColor={'grey'}
                value={value}
                keyboardType="number-pad"
                style={{
                  color: '#12154C',
                  marginTop: 1,
                  width: '100%',
                  paddingHorizontal: 18,
                  padding: 12,
                }}
                onChangeText={(masked, unmasked) => {
                  setValue(unmasked); // you can use the masked value as well

                  console.log(unmasked); // "123456"
                  console.log(masked); // "R$ 1.234,56"
                }}
              />
            </View>
          </View>
          <View>
            <TouchableOpacity>
              <View style={styles.skipbutton}>
                <Text style={styles.skipbuttontext}>{strings.Оплатить}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
    // </SafeAreaView>
  );
};

export default Bonuses3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    // flexDirection: 'column',
    // justifyContent: 'space-between',
  },
  container2: {
    flex: 1,
    paddingHorizontal: 24,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 45,
    backgroundColor: '#FFF',
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
  head: {
    height: 109,
    width: '100%',
    backgroundColor: '#33409E',
    paddingHorizontal: 24,
    paddingVertical: 51,
  },
  back: {
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#EBF0FA',
  },
  headback: {
    justifyContent: 'center',
  },
  head2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop: 52,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  sim: {
    alignItems: 'center',
    // marginTop: 45,
  },
  nomer: {
    marginTop: 44,
  },
  nomertext: {
    color: '#12154C',
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    // height: 52,
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EAEFF3',
    backgroundColor: '#FFFFFF',
    marginTop: 11,
    justifyContent: 'center',
  },
  input: {
    padding: 12,
    color: '#12154C',
  },
  nomer1: {
    marginTop: 20,
  },
  nomertext1: {
    color: '#12154C',
    fontSize: 14,
    fontWeight: '700',
  },
  button1: {
    // height: 50,
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EAEFF3',
    backgroundColor: '#FFFFFF',
    marginTop: 11,
    justifyContent: 'center',
  },
  input1: {
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#12154C',
  },
  skipbutton: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#3554D1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginTop: 100,
  },
  skipbuttontext: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
