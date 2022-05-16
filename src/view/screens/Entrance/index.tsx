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

const Entrance = () => {
  let navigation = useNavigation();
  const VerificationNumber = () => {
    navigation.navigate('verificationnumber');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headbar}>
        <TouchableOpacity onPress={navigation.goBack}>
          <View style={styles.headback}>
            <Back />
          </View>
        </TouchableOpacity>
        <View style={styles.headback}>
          <RU />
        </View>
      </View>
      <View style={styles.enter}>
        <Text style={styles.entertext}>Вход</Text>
      </View>
      <View style={styles.number}>
        <Text style={styles.numbertext}>Номер телефона</Text>
      </View>
      <View style={styles.sectionInput}>
        <Flag style={{marginLeft: 18}} />
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
      <TouchableOpacity onPress={VerificationNumber}>
        <View style={styles.nextButton}>
          <Text style={{color: 'white', fontSize: 16}}>Продолжить</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.img}>
        <Image
          source={require('../../assets/images/IndicatorIcon.png')}
          style={{height: 10, width: 35}}
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
