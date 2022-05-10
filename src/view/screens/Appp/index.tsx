import React, {useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import * as Animatable from 'react-native-animatable';
import {
  Button,
  Dimensions,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {XIcon} from '../../assets/icons/icon';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
import {transparent} from 'react-native-paper/lib/typescript/styles/colors';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const rectDimensions = SCREEN_WIDTH * 0.75; // this is equivalent to 255 from a 393 device width
const rectBorderWidth = SCREEN_WIDTH * 0.009; // this is equivalent to 2 from a 393 device width
const rectBorderColor = '#FFFFFF';

const scanBarWidth = SCREEN_WIDTH * 0.56; // this is equivalent to 180 from a 393 device width
const scanBarHeight = SCREEN_WIDTH * 0.0085; //this is equivalent to 1 from a 393 device width
const scanBarColor = '#FFFFFF';

const overlayColor = 'rgba(0,0,0,0.5)';

const Appp = () => {
  let navigation = useNavigation();
  const [text, setText] = useState('Вкл');
  const onPressHandler = event => setText('Выкл');

  const onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };

  const makeSlideOutTranslation = (translationType, fromValue) => {
    return {
      from: {
        [translationType]: SCREEN_WIDTH * 0.3,
      },
      to: {
        [translationType]: fromValue,
      },
    };
  };

  return (
    <QRCodeScanner
      showMarker
      onRead={onSuccess}
      cameraStyle={{height: SCREEN_HEIGHT}}
      customMarker={
        <View style={{}}>
          <View style={styles.rectangleContainer}>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 88,
                paddingHorizontal: 24,
              }}>
              <View style={styles.topOverlay}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'white',
                    marginHorizontal: 90,
                    fontWeight: '800',
                    textDecorationLine: 'underline',
                    textDecorationStyle: 'solid',
                    textDecorationColor: '#FFF',
                  }}>
                  Оплата по QR
                </Text>
              </View>
              <TouchableOpacity onPress={navigation.goBack}>
                <XIcon />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={styles.leftAndRightOverlay} />

              <View style={styles.rectangle}>
                <Animatable.View
                  style={styles.scanBar}
                  direction="alternate-reverse"
                  iterationCount="infinite"
                  duration={1700}
                  easing="linear"
                  animation={makeSlideOutTranslation(
                    'translateY',
                    SCREEN_WIDTH * -0.3,
                  )}
                />
              </View>

              <View style={styles.leftAndRightOverlay} />
            </View>
            <TouchableOpacity onPress={onPressHandler}>
              <View style={styles.icon}>
                <Image source={require('../../assets/images/flash.png')} />
                <Text
                  style={{
                    fontSize: 14,
                    color: onPressHandler ? '#32B179' : '#878B9A',
                  }}>
                  {text}
                </Text>
              </View>
            </TouchableOpacity>

            <View style={styles.bottomOverlay} />
          </View>
        </View>
      }
    />
  );
};

export default Appp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  rectangleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 24,
    paddingVertical: 24,
    // flex: 1,
  },

  rectangle: {
    // height: rectDimensions,
    width: rectDimensions,
    borderWidth: rectBorderWidth,
    borderColor: rectBorderColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: 'transparent',
  },

  topOverlay: {
    // flex: 1,
    // height: SCREEN_WIDTH,
    // width: SCREEN_WIDTH,
    // justifyContent: 'center',
    alignItems: 'center',
  },

  bottomOverlay: {
    // flex: 1,
    // height: SCREEN_WIDTH,
    // width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    // backgroundColor: 'red',
  },

  leftAndRightOverlay: {
    height: SCREEN_WIDTH * 0.75,
    width: SCREEN_WIDTH,
    // backgroundColor: overlayColor,
  },

  scanBar: {
    width: scanBarWidth,
    height: scanBarHeight,
    backgroundColor: scanBarColor,
    borderRadius: 50,
  },
  icon: {
    height: 65,
    width: 54,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
