import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Back, BottomIcon, RU, ScanerIcon} from '../../assets/icons/icon';

const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;

const Scanerfinish = () => {
  let navigation = useNavigation();
  const Id3 = () => {
    navigation.navigate('id3');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigation.goBack}>
        <View style={styles.headback}>
          <View style={styles.ru}>
            <Back />
          </View>
        </View>
      </TouchableOpacity>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 3,
            borderColor: 'red',
            height: 200,
            width: 200,
            borderRadius: 120,
            backgroundColor: '#F5F5F5',
          }}>
          <Text style={styles.hour}>0:00</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.text1}>Упс</Text>
        </View>
        <View style={styles.text2}>
          <Text style={styles.text3}>
            Попройбуйте пройти верификацию занова
          </Text>
          <Text style={styles.text3}>возможна технический сбой </Text>
        </View>
      </View>
      <TouchableOpacity onPress={Id3}>
        <View style={styles.textnazad}>
          <Text style={styles.text4}>Назад</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Scanerfinish;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 52,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headback: {
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderColor: '#EAEFF3',
    borderRadius: 10,
    height: 57,
    width: 41,
    justifyContent: 'center',
  },
  ru: {
    alignItems: 'center',
  },
  hour: {
    position: 'absolute',
    color: '#878B9A',
    fontSize: 62,
  },

  scanerIcon: {
    marginTop: -240,
    paddingLeft: 65,
  },
  text: {
    alignItems: 'center',
    marginTop: 75,
  },
  text1: {
    color: 'black',
    fontSize: 22,
  },
  text2: {
    alignItems: 'center',
    marginTop: 5,
  },
  text3: {
    color: 'grey',
    fontSize: 12,
  },
  text4: {
    color: '#3554D1',
    fontSize: 14,
  },
  textnazad: {
    alignItems: 'center',
    // marginTop: 139,
  },
  time: {
    color: 'black',
  },
});
