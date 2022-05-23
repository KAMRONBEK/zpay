import {
  Text,
  View,
  ImageBackground,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RU} from '../../assets/icons/icon';
import {EntranceCarousel} from '../EntranceCarousel';
import {strings} from '../../locales/strings';
import LanguageDropDown from '../LanguageDropDown';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const imgBackgroundHeight = SCREEN_HEIGHT * 0.95;
const imgBackgroundWidth = SCREEN_WIDTH * 0.99;

const Intro = () => {
  let navigation = useNavigation();
  const RegisterCarousel = () => {
    navigation.navigate('registercarousel');
  };
  const EntranceCarousel = () => {
    navigation.navigate('entrancecarousel');
  };
  const DrawerNavigator = () => {
    navigation.navigate('DrawerNavigator');
  };
  return (
    <ImageBackground
      style={{
        height: imgBackgroundHeight,
        width: imgBackgroundWidth,
        paddingHorizontal: 24,
        paddingVertical: 51,
      }}
      source={require('../../assets/images/backgroundimg.png')}>
      <View style={style.headback}>
        <LanguageDropDown />
      </View>

      <View style={style.flex}>
        <View>
          <View style={style.head}>
            <Image
              source={require('../../assets/images/backzpay.png')}
              style={{height: 58.15, width: 141}}
            />
          </View>
          <View style={style.incontainer}>
            <Text style={style.text}>Купи сейчас плати позже</Text>
          </View>
        </View>
        <View style={style.carter}>
          <TouchableOpacity onPress={RegisterCarousel}>
            <View style={style.nextButton}>
              <Text style={{color: 'white', fontSize: 16}}>
                {strings.Зарегистрироваться}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={EntranceCarousel}>
            <View style={style.skipButton}>
              <Text style={{color: 'white', fontSize: 16}}>
                {strings.Войти}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={DrawerNavigator}>
            <View style={style.skipButton2}>
              <Text style={{color: '#3554D1', fontSize: 16}}>
                {strings.Пропустить}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Intro;

const style = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#E5E5E5',
  // },
  ugl: {
    paddingHorizontal: 24,
  },
  // headLogo: {
  //   alignItems: 'center',
  // },
  headback: {
    position: 'absolute',

    right: 0,
    marginTop: 51,
    marginRight: 24,
  },
  ru: {
    alignItems: 'center',
  },

  text: {
    color: 'grey',
    fontSize: 16,
  },
  incontainer: {
    marginTop: 31,
    alignItems: 'center',
  },
  // headimage: {
  //   marginHorizontal: 10,
  // },
  carter: {
    // marginTop: 269.85,
    // justifyContent: 'flex-end',
  },

  nextButton: {
    backgroundColor: 'green',
    borderRadius: 10,
    // width: '100%'

    marginVertical: 10,
    alignItems: 'center',
    paddingVertical: 15,
  },
  skipButton: {
    backgroundColor: '#3554D1',
    borderRadius: 10,
    // padding: 20,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 15,
  },
  skipButton2: {
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#3554D1',
    borderRadius: 10,
  },
  head: {
    // flexDirection: 'row',
    alignItems: 'center',
    marginTop: 120,
  },
  flex: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
