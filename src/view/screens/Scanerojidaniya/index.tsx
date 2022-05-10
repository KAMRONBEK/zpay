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
// import {LinearGradient} from 'react-native-svg';
import {Back, BottomIcon, RU, ScanerIcon} from '../../assets/icons/icon';

const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;

const Scanerojidaniya = () => {
  let navigation = useNavigation();
  const Scanerfinish = () => {
    navigation.navigate('scanerfinish');
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 400,
          width: '100%',
          // backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'red',
            height: 200,
            width: 201,
            borderRadius: 120,
            backgroundColor: '#EAE9EE',
          }}>
          <Text style={styles.hour}>0:26</Text>
        </View>
        <View style={styles.img}>
          <Image
            source={require('../../assets/images/IndicatorIconScaner.png')}
            style={{height: 17, width: 21}}
          />
        </View>
        <TouchableOpacity onPress={Scanerfinish}>
          <View style={styles.text}>
            <Text style={styles.text1}>Ожидайте</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.text2}>
          <Text style={styles.text3}>Идет считывание данных, ожидайте</Text>
          <Text style={styles.text3}>осталось еще чучуть</Text>
        </View>
      </View>
    </View>
  );
};

export default Scanerojidaniya;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  hour: {
    color: '#878B9A',
    fontSize: 62,
    position: 'absolute',
  },

  text: {
    alignItems: 'center',
    marginTop: 30.7,
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
  time: {
    color: 'black',
  },
  img: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30.7,
  },
});
