import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FaceidIcon} from '../../assets/icons/icon';
import {strings} from '../../locales/strings';
import Memo from '../FaceId';
import TouchId from '../TouchId';

const SetPin2 = () => {
  let {navigate} = useNavigation();
  const FaceDetection = () => {
    navigate('facedetection');
  };
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [password, setPassword] = useState('');

  // const[phonenumber, setPhoneNumber]= useState();
  const onPressNumber = node => {
    setPassword(password + node);
  };
  const onPressDelete = node => {
    let newpass = password.substring(0, password.length - 1);
    setPassword(newpass);
  };

  useEffect(() => {
    if (password.split('').length === 4) {
      console.log(password);

      navigate('DrawerNavigator');
    }
  }, [password]);

  return (
    <View style={styles.container}>
      <View style={styles.pin}>
        <Text style={styles.text}>Установите PIN</Text>
      </View>
      <View style={styles.code}>
        {new Array(password.split('').length).fill('').map(() => (
          <View style={styles.ellipseBlue}></View>
        ))}
        {new Array(Math.abs(4 - password.split('').length)).fill('').map(() => (
          <View style={styles.ellipse}></View>
        ))}
      </View>
      <View style={styles.numbers}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              onPressNumber('1');
            }}>
            <View style={styles.kub}>
              <Text style={styles.number}>1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onPressNumber('2');
            }}>
            <View style={styles.kub}>
              <Text style={styles.number}>2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onPressNumber('3');
            }}>
            <View style={styles.kub}>
              <Text style={styles.number}>3</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              onPressNumber('4');
            }}>
            <View style={styles.kub1}>
              <Text style={styles.number}>4</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onPressNumber('5');
            }}>
            <View style={styles.kub1}>
              <Text style={styles.number}>5</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onPressNumber('6');
            }}>
            <View style={styles.kub1}>
              <Text style={styles.number}>6</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              onPressNumber('7');
            }}>
            <View style={styles.kub1}>
              <Text style={styles.number}>7</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onPressNumber('8');
            }}>
            <View style={styles.kub1}>
              <Text style={styles.number}>8</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onPressNumber('9');
            }}>
            <View style={styles.kub1}>
              <Text style={styles.number}>9</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.flex}>
          <TouchableOpacity onPress={TouchId}>
            <View style={styles.kub5}>
              <TouchId />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onPressNumber('0');
            }}>
            <View style={styles.kub2}>
              <Text style={styles.number}>0</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressDelete}>
            <View style={styles.udalit}>
              <Text style={styles.udalittext}>{strings.Удалить}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SetPin2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 49,
  },
  pin: {
    alignItems: 'center',
    marginTop: 188,
  },
  text: {
    color: '#000000',
    fontSize: 18,
  },
  kub: {
    height: 76,
    width: 76,
    borderRadius: 15.83,
    borderWidth: 1,
    borderColor: '#EAEFF3',
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  kub1: {
    height: 76,
    width: 76,
    borderRadius: 15.83,
    borderWidth: 1,
    borderColor: '#EAEFF3',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  kub2: {
    height: 76,
    width: 76,
    borderRadius: 15.83,
    borderWidth: 1,
    borderColor: '#EAEFF3',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  kub5: {
    height: 76,
    width: 76,
    borderRadius: 15.83,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  number: {
    color: '#878B9A',
    fontSize: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  udalit: {
    height: 76,
    width: 76,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  udalittext: {
    color: '#878B9A',
    fontSize: 16,
  },

  facetext: {
    color: '#121F3E',
    fontSize: 14,
  },

  ellipse: {
    height: 16,
    width: 16,
    backgroundColor: '#878B9A',
    borderRadius: 100,
    marginHorizontal: 10,
  },
  code: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  ellipseBlue: {
    height: 16,
    width: 16,
    backgroundColor: 'blue',
    borderRadius: 100,
    marginHorizontal: 10,
  },
  numbers: {
    paddingHorizontal: 15,
  },
  memo: {},
});
