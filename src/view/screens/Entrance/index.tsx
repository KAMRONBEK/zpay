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
        <Flag />
        <View style={styles.border} />
        <TextInput
          style={styles.input}
          placeholder="номер телефона"
          placeholderTextColor={'grey'}
        />
      </View>
      <TouchableOpacity onPress={VerificationNumber}>
        <View style={styles.nextButton}>
          <Text style={{color: 'white', fontSize: 14}}>Продолжить</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.img}>
        <Image
          source={require('../../assets/images/IndicatorIcon.png')}
          style={{height: 10, width: 33}}
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
    color: '#427CF8',
    fontSize: 24,
    marginTop: 62,
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
    backgroundColor: '#ffff',
    // height: 52,
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    marginTop: 11,
    borderWidth: 1,
    borderColor: '#EAEFF3',
  },

  border: {
    height: 23,
    width: 1,
    backgroundColor: 'grey',
    marginLeft: 20,
  },
  input: {
    color: '#12154C',
    padding:12
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
