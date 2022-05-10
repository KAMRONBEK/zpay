import React, {Component} from 'react';

import QRCodeScanner from 'react-native-qrcode-scanner';
import * as Animatable from 'react-native-animatable';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {XIcon} from '../../assets/icons/icon';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

console.disableYellowBox = true;

class QrCodeCamera extends Component {
  goBack() {
    const {navigation} = this.props;
    navigation.goBack();
    navigation.state.params.onSelect({selected: true});
  }
  onSuccess(e) {
    alert(e);
  }

  makeSlideOutTranslation(translationType, fromValue) {
    return {
      from: {
        [translationType]: SCREEN_WIDTH * 0.3,
      },
      to: {
        [translationType]: fromValue,
      },
    };
  }

  render() {
    return (
      <QRCodeScanner
        showMarker
        onRead={this.onSuccess.bind(this)}
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
                <TouchableOpacity onPress={this.goBack}>
                  <XIcon />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View style={styles.leftAndRightOverlay} />

                <View style={styles.rectangle}>
                  {/* <Icon
                  name="ios-qr-scanner"
                  size={SCREEN_WIDTH * 0.73}
                  color={iconScanColor}
                /> */}
                  <Animatable.View
                    style={styles.scanBar}
                    direction="alternate-reverse"
                    iterationCount="infinite"
                    duration={1700}
                    easing="linear"
                    animation={this.makeSlideOutTranslation(
                      'translateY',
                      SCREEN_WIDTH * -0.35,
                    )}
                  />
                </View>

                <View style={styles.leftAndRightOverlay} />
              </View>

              <View style={styles.icon}>
                <Image source={require('../../assets/images/flash.png')} />
                <Text style={styles.text}>Вкл</Text>
              </View>
              <View style={styles.bottomOverlay} />
            </View>
          </View>
        }
      />
    );
  }
}

const overlayColor = 'rgba(0,0,0,0.5)'; // this gives us a black color with a 50% transparency

const rectDimensions = SCREEN_WIDTH * 0.75; // this is equivalent to 255 from a 393 device width
const rectBorderWidth = SCREEN_WIDTH * 0.009; // this is equivalent to 2 from a 393 device width
const rectBorderColor = '#FFFFFF';

const scanBarWidth = SCREEN_WIDTH * 0.56; // this is equivalent to 180 from a 393 device width
const scanBarHeight = SCREEN_WIDTH * 0.0085; //this is equivalent to 1 from a 393 device width
const scanBarColor = '#FFFFFF';

const iconScanColor = 'blue';

export default QrCodeCamera;

const styles = StyleSheet.create({
  rectangleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 24,
    paddingVertical: 24,
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
    // backgroundColor: overlayColor,
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
  text: {
    fontSize: 14,
    color: '#32B179',
  },
});
