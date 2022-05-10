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

const ScanerFace = () => {
  let navigation = useNavigation();
  const Scanerojidaniya = () => {
    navigation.navigate('scanerojidaniya');
  };
  return (
    <View style={styles.container1}>
      <View style={styles.headflex}>
        <Text>hjvhbm</Text>
        <View style={styles.headback}>
          <RU />
        </View>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: windowHeight / 4.5,
            width: windowWidth / 2,
            borderRadius: 120,
            backgroundColor: '#EAE9EE',
          }}>
          <View>
            <Image
              source={require('../../assets/images/ScanerIconImg.png')}
              style={{
                position: 'absolute',
                zIndex: 99,
                height: windowHeight / 6.8,
                width: windowWidth / 3.2,
                // backgroundColor: 'red',
                marginLeft: 30,
              }}
            />
          </View>
          <Image source={require('../../assets/images/Person1.png')} />
        </View>

        <View style={styles.img}>
          <Image
            source={require('../../assets/images/IndicatorIconScaner.png')}
            style={{height: 17, width: 21}}
          />
        </View>

        <View style={styles.text}>
          <Text style={styles.text1}>Идет сканирование</Text>
        </View>
        <View style={styles.text2}>
          <Text style={styles.text3}>Идет сканирование лица убедитесь</Text>
          <Text style={styles.text3}>что голова находиться в центре круга</Text>
        </View>
      </View>
      <TouchableOpacity onPress={Scanerojidaniya}>
        <View style={styles.nextButton}>
          <Text style={{color: '#427CF8', fontSize: 14}}>
            Вам нужна помощь?
          </Text>
        </View>
        <View style={styles.bottomicon}>
          <BottomIcon />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ScanerFace;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#ffff',
  // },
  container1: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingHorizontal: 24,
    paddingVertical: 51,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headback: {
    // position: 'absolute',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EAEFF3',
    borderRadius: 10,
    // alignItems: 'center',
    // padding: 17,
    height: 57,
    width: 41,
    justifyContent: 'center',
    // marginLeft: 320,
    // marginTop: -405,
    alignItems: 'center',
    right: 0,
  },
  headflex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  headbar: {
    marginTop: -360,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headscaner: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 150,
  },
  scanerIcon: {
    // marginTop: 90,
    // paddingLeft: 65,
    // position: 'absolute',
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
  nextButton: {
    // backgroundColor: '#427CF8',
    // borderRadius: 20,
    // marginHorizontal: 30,
    alignItems: 'center',
    padding: 18,
    // marginTop: 121,
    // borderWidth: 1,
    // borderColor: '#EAEFF3',
  },
  bottomicon: {
    alignItems: 'center',
  },
  img: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30.7,
  },
});
