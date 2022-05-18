import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  BackHandler,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Back, CheckIcon, RU} from '../../assets/icons/icon';
import MaskInput, {createNumberMask} from 'react-native-mask-input';

const CPF_MASK = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
const CNPJ_MASK = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

const Id = () => {
  let navigation = useNavigation();
  const Scaner = () => {
    navigation.navigate('scaner');
  };
  const [value, setValue] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <View style={{}}>
          <View style={styles.text}>
            <Text style={styles.text1}>Паспортные данные</Text>
          </View>
          <View style={styles.text2}>
            <Text style={styles.text3}>Создание нового аккунта</Text>
          </View>
          <View style={styles.nomer1}>
            <Text style={styles.nomer}>Номер паспорта</Text>
          </View>
          <View style={styles.headinput}>
            <View style={styles.littleinput}>
              <TextInput
                style={styles.input}
                placeholder="AA"
                placeholderTextColor={'grey'}
                // value={value}
              />
            </View>
            {/* <View style={styles.section}> */}

            <View style={styles.sectionInput}>
              <TextInput
                style={styles.input}
                placeholder="Номер паспорта"
                placeholderTextColor={'grey'}
                keyboardType="number-pad"
                // value={value}
              />
              {/* <View style={styles.checkIcon}>
              <CheckIcon />
            </View> */}
            </View>
          </View>
          <View style={styles.nomer1}>
            <Text style={styles.nomer}>Год рождения</Text>
          </View>
          <View style={styles.sectionInput1}>
            <MaskInput
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
            />
            {/* <View style={styles.checkIcon1}>
            <CheckIcon />
          </View> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Id;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    // paddingHorizontal: 24,
    // paddingVertical: 51,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headback: {
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderColor: '#EAEFF3',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  nomer: {
    color: '#12154C',
    fontSize: 14,
    fontWeight: '800',
  },
  nomer1: {
    marginTop: 20,
  },
  head: {},
  textIdentifikatsiya: {
    color: '#3554D1',
    fontSize: 18,
    fontWeight: '700',
  },
  headbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 109,
    width: '100%',
    backgroundColor: '#FFF',
    // alignItems: 'center',
    paddingHorizontal: 24,
  },
  headbar1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    width: '100%',
    alignItems: 'center',
    marginTop: 52,
  },
  text: {
    // marginTop: 52,
  },
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
    fontSize: 16,
  },
  headinput: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginTop: 11,
  },
  littleinput: {
    backgroundColor: '#ffff',
    height: 50,
    width: 56,
    borderRadius: 10,
    borderWidth: 0.9,
    borderColor: '#EAEFF3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionInput: {
    height: 50,
    width: '80%',
    backgroundColor: '#ffff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 5,
    borderWidth: 1,
    borderColor: '#EAEFF3',
    marginLeft: 15,
    justifyContent: 'space-between',
    paddingHorizontal: 17,
  },
  sectionInput1: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 17,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#EAEFF3',
    justifyContent: 'space-between',
  },
  section: {},

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
    alignItems: 'center',
    width: '100%',
  },
  checkIcon: {},
  checkIcon1: {
    // paddingLeft: 210,
  },
  nextButton: {
    backgroundColor: '#427CF8',
    borderRadius: 10,
    alignItems: 'center',
    // padding: 18,
    // marginTop: 200,
    borderWidth: 1,
    borderColor: '#EAEFF3',
    paddingVertical: 15,
  },
  skipButton: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    alignItems: 'center',
    // padding: 18,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#EAEFF3',
    paddingVertical: 15,
  },
  img: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  flex: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 45,
  },
});
