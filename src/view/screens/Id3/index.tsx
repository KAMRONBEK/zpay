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
  ScrollView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Back, CheckIcon, RU} from '../../assets/icons/icon';
import Entrance from '../Entrance';
import MaskInput, {createNumberMask} from 'react-native-mask-input';
import {MaskedTextInput} from 'react-native-mask-text';
import LanguageDropDown from '../LanguageDropDown';
import {strings} from '../../locales/strings';

const CPF_MASK = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
const CNPJ_MASK = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

const dollarMask = createNumberMask({
  // delimiter: '.',
  separator: '.',
  precision: 4,
  // prefix: ['hjhd'],
});

const creditCardMask = [/\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/];

const Id3 = () => {
  let navigation = useNavigation();
  const Setpin = () => {
    navigation.navigate('setpin');
  };
  const DrawerNavigator = () => {
    navigation.navigate('DrawerNavigator');
  };
  const [creditCard, setCreditCard] = React.useState('');
  const [value, setValue] = React.useState('');
  const [number, setNumber] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.headbar}>
        <TouchableOpacity onPress={navigation.goBack}>
          <View style={styles.headback}>
            <Back />
          </View>
        </TouchableOpacity>
        <Text style={styles.headtext}>{strings.Идентификация}</Text>
        <View style={{marginTop: 52}}>
          <LanguageDropDown />
        </View>
      </View>

      <View style={styles.flex}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{backgroundColor: '#FFF', flex: 1}}>
          <View>
            <View style={styles.text}>
              <Text style={styles.text1}>Персональные Данные</Text>
            </View>
            <View style={styles.nomer1}>
              <Text style={styles.nomer}>{strings.ФИО}</Text>
            </View>
            <View style={styles.sectionInput1}>
              <TextInput
                style={styles.input}
                placeholder="Марина Волкова Александрова"
                placeholderTextColor={'grey'}
                // value={value}
              />
            </View>
            <View style={styles.nomer1}>
              <Text style={styles.nomer}>Номер паспорта</Text>
            </View>
            <View style={styles.headinput}>
              <View style={styles.littleinput}>
                <MaskedTextInput
                  mask="AA"
                  placeholder="AA"
                  placeholderTextColor={'grey'}
                  onChangeText={(text, rawText) => {
                    console.log(text);
                    console.log(rawText);
                  }}
                  style={{textAlign: 'center', color: '#12154C'}}
                />
              </View>

              <View style={styles.sectionInput}>
                <TextInput
                  style={styles.input}
                  placeholder="Номер паспорта"
                  placeholderTextColor={'grey'}
                  keyboardType="number-pad"
                  // value={value}
                />
              </View>
            </View>
            <View style={styles.nomer1}>
              <Text style={styles.nomer}>Год рождения</Text>
            </View>
            <View style={styles.sectionInput1}>
              {/* <MaskInput
                value={value}
                onChangeText={setValue}
                keyboardType="number-pad"
                style={{color: '#12154C', marginTop: 1, width: '100%'}}
                placeholder="12/07/2002"
                placeholderTextColor={'grey'}
                mask={text => {
                  if (text.replace(/\D+/g, '').length <= 11) {
                    return CPF_MASK;
                  } else {
                    return CNPJ_MASK;
                  }
                }}
              /> */}
              <MaskedTextInput
                mask="99.99.9999"
                placeholder="12.07.2002"
                placeholderTextColor={'grey'}
                keyboardType="number-pad"
                onChangeText={(text, rawText) => {
                  console.log(text);
                  console.log(rawText);
                }}
                style={styles.input}
              />
            </View>
            <View style={styles.nomer1}>
              <Text style={styles.nomer}>Адрес проживания</Text>
            </View>
            <View style={styles.sectionInput1}>
              <TextInput
                style={styles.input}
                placeholder="г. Ташкент, Мирабадский р-н, 5кв, д30-21"
                placeholderTextColor={'grey'}
                // value={value}
              />
            </View>
          </View>
        </ScrollView>

        <View>
          <TouchableOpacity onPress={Setpin}>
            <View style={styles.nextButton}>
              <Text style={{color: 'white', fontSize: 16}}>
                {strings.Продолжить}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Id3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  flex: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    paddingHorizontal: 24,
    paddingVertical: 45,
  },
  headback: {
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderColor: '#EAEFF3',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginTop: 52,
  },
  headbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    alignItems: 'center',
  },

  headtext: {
    color: '#12154C',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 52,
  },

  nomer: {
    color: '#12154C',
    fontSize: 14,
    fontWeight: '700',
  },
  nomer1: {
    marginTop: 20,
  },
  head: {
    height: 109,
    width: '100%',
    paddingHorizontal: 24,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EAE9EE',
  },
  headText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3554D1',
    marginTop: 52,
    textAlign: 'center',
  },
  text: {},
  text1: {
    color: '#3554D1',
    fontSize: 24,
    fontWeight: '600',
  },
  text2: {
    marginTop: 10,
  },
  text3: {
    color: 'grey',
    fontSize: 22,
    paddingLeft: 20,
  },
  headinput: {
    flexDirection: 'row',
    marginTop: 11,
  },
  littleinput: {
    backgroundColor: '#ffff',
    // height: 52,
    width: 56,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EAEFF3',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 1,
  },
  sectionInput: {
    // height: 52,
    width: '80%',
    backgroundColor: '#ffff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 5,
    borderWidth: 0.9,
    borderColor: '#EAEFF3',
    marginLeft: 15,
    justifyContent: 'space-between',
    paddingHorizontal: 17,
    paddingVertical: 1,
  },
  sectionInput1: {
    // height: 50,
    width: '100%',
    backgroundColor: '#ffff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 0.9,
    borderColor: '#EAEFF3',
    paddingHorizontal: 18,
    paddingVertical: 1,
  },
  two: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  border: {
    height: 23,
    width: 1,
    backgroundColor: 'grey',
    marginRight: 10,
    marginLeft: 20,
  },
  input: {
    padding: 12,
    color: '#12154C',
    fontSize: 14,
    width: '100%',
  },
  input2: {
    padding: 12,
    color: '#12154C',
    fontSize: 14,
    width: '100%',
    textAlign: 'center',
  },
  checkIcon: {
    paddingLeft: 90,
  },
  checkIcon1: {
    paddingLeft: 210,
  },
  nextButton: {
    backgroundColor: '#3554D1',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EAEFF3',
    paddingVertical: 15,
    // marginTop: 200,
    justifyContent: 'flex-end',
  },
  skipButton: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#EAEFF3',
    paddingVertical: 15,
  },
  img: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
