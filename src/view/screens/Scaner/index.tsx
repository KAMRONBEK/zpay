import { useNavigation } from '@react-navigation/native';
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
import { Back, RU, ScanerIcon } from '../../assets/icons/icon';
import LanguageDropDown from '../LanguageDropDown';

const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;

const Scaner = () => {
  let navigation = useNavigation();
  const ScanerFace = () => {
    navigation.navigate('scanerface');
  };

  return (
    <View style={styles.container1}>
      <View style={styles.headbar}>
        <TouchableOpacity onPress={navigation.goBack}>
          <View style={styles.headback}>
            <Back />
          </View>
        </TouchableOpacity>
        <LanguageDropDown />
      </View>
      <View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('../../assets/images/UserImg1.png')}
            style={{
              position: 'absolute',
              height: windowHeight / 4.4,
              width: windowWidth / 1.8,
              // alignItems:'center',
              // justifyContent:'center'
            }}
          />
          <View>
            <Image
              source={require('../../assets/images/ScanerIconImg.png')}
              style={{
                position: 'absolute',
                zIndex: 99,
                height: windowHeight / 6.8,
                width: windowWidth / 3.1,
                left: 30,
                top: 30,
              }}
            />
          </View>
          <Image
            source={require('../../assets/images/MyId1.png')}
            style={{
              height: windowHeight / 3.3,
              width: windowWidth / 1.47,
              // backgroundColor: 'red',
            }}
          />
          {/* <Image
            source={require('../../assets/images/UserImg1.png')}
            style={{
              position: 'absolute',
              height: windowHeight / 4.6,
              width: windowWidth / 1.9,
            }}
          /> */}
        </View>
        {/* <View style={styles.scanerIcon}>
          <ScanerIcon />
        </View> */}
        <View style={styles.text}>
          <Text style={styles.text1}>???????????????? ???????? ????????</Text>
        </View>
        <View style={styles.text2}>
          <Text style={styles.text3}>
            ?????????????? ???????????? ?????????? ?? ???? ???????????????? ????
          </Text>
          <Text style={styles.text3}>?????????????? ???????? ???????????? ???????? ?? ????????????</Text>
          <Text style={styles.text3}>?????????? ?????? ?????????? ?? ??????????</Text>
        </View>
      </View>
      <TouchableOpacity onPress={ScanerFace}>
        <View style={styles.nextButton}>
          <Text style={{ color: 'white', fontSize: 17 }}>
            ???????????? ????????????????????????
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Scaner;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   // backgroundColor: '#ffff',
  // },
  container1: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingHorizontal: 24,
    paddingVertical: 51,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  ImageBackground: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: 218,
    width: 230,
    marginTop: 192,
  },
  ImageBackground1: {
    alignSelf: 'center',
    height: 186,
    width: 211,
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
    // marginTop: -360,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headscaner: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 170,
  },
  scanerIcon: {
    // position: 'absolute',
    backgroundColor: 'red',
    // height: 80,
    // width: 80,
  },
  text: {
    alignItems: 'center',
    marginTop: 52,
  },
  text1: {
    color: '#12154C',
    fontSize: 24,
    fontWeight: '600',
  },
  text2: {
    alignItems: 'center',
    marginTop: 5,
  },
  text3: {
    color: '#878B9A',
    fontSize: 14,
    fontWeight: '600',
  },
  nextButton: {
    backgroundColor: '#3554D1',
    borderRadius: 10,
    alignItems: 'center',
    // marginTop: 115,
    borderWidth: 0.9,
    borderColor: '#EAEFF3',
    paddingVertical: 15,
  },
});
