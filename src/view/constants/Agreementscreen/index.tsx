import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Calendar, Littlehome, Monitoring} from '../../assets/icons/icon';
import Search from '../../screens/Search';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const buttonDimensions = SCREEN_HEIGHT * 0.023; // this is equivalent to 255 from a 393 device width
const buttonBorderWidth = SCREEN_WIDTH * 0.21; // this is equivalent to 2 from a 393 device width

const AgreementScreen = () => {
  let navigation = useNavigation();
  const Contractss = () => {
    navigation.navigate('contractss');
  };
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.texthead}>
          <Text style={styles.headtext}>Мои договора</Text>
        </View>
      </View>
      <View style={styles.ekran}>
        {/* <View style={styles.monitoring}>
          <Monitoring />
        </View>
        <View style={styles.monitoringtext}>
          <Text style={styles.mtext}>Мониторинг</Text>
        </View> */}
        {/* <Search /> */}
        <TouchableOpacity onPress={Contractss}>
          <View style={styles.magazin}>
            <View style={styles.two}>
              <View style={styles.setmagazin}>
                <View style={styles.home}>
                  <Image
                    source={require('../../assets/images/HomeContract.png')}
                    style={{height: 40, width: 40}}
                  />
                </View>
                <View style={styles.setmagazintext}>
                  <Text style={styles.text}>Сеть</Text>
                  <Text style={styles.text}>магазинов</Text>
                </View>
              </View>
              <View style={styles.mediapark}>
                <Text style={styles.mediaparktext}>MediaPark</Text>
                <Text style={styles.notext}>№202013 от 22.01.2022</Text>
                <View style={styles.mediapark2}>
                  <Calendar />
                  <View style={styles.calendar}>
                    <Text style={styles.notext1}>
                      Срок рассрочки: 12 месяцев
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.uglkub}>
              <Text style={styles.uglkubno}>2/6</Text>
            </View>
            <View style={styles.aktiv}>
              <Text style={styles.aktivtext}>Активный</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={Contractss}>
          <View style={styles.magazin1}>
            <View style={styles.two}>
              <View style={styles.setmagazin}>
                <View style={styles.home}>
                  <Image
                    source={require('../../assets/images/HomeContract.png')}
                    style={{height: 40, width: 40}}
                  />
                </View>
                <View style={styles.setmagazintext}>
                  <Text style={styles.text}>Сеть</Text>
                  <Text style={styles.text}>магазинов</Text>
                </View>
              </View>
              <View style={styles.mediapark}>
                <Text style={styles.mediaparktext}>Texnomart*</Text>
                <Text style={styles.notext}>№202013 от 22.01.2022</Text>
                <View style={styles.mediapark2}>
                  <Calendar />
                  <View style={styles.calendar}>
                    <Text style={styles.notext1}>
                      Срок рассрочки: 12 месяцев
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.uglkub}>
              <Text style={styles.uglkubno}>2/6</Text>
            </View>
            <View style={styles.aktiv1}>
              <Text style={styles.aktivtext1}>В просрочке</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AgreementScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  head: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 109,
    borderWidth: 1,
    borderColor: '#F2F5F8',
  },
  headtext: {
    color: '#12154C',
    fontSize: 16,
    fontWeight: '600',
  },
  texthead: {
    alignSelf: 'center',
    marginTop: 58,
  },
  search: {
    height: 50,
    width: '100%',
    borderRadius: 10,
    // borderWidth: 1,
    backgroundColor: '#E8EBF0',
    marginTop: 20,
  },
  ekran: {
    paddingHorizontal: 12,
  },
  monitoring: {
    marginHorizontal: 15,
    marginVertical: 15,
  },
  monitoringtext: {
    paddingLeft: 60,
    marginTop: -35,
  },
  mtext: {
    color: '#33409E',
    fontSize: 14,
  },
  magazin: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 37,
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#F2F5F8',
    position: 'relative',
  },
  magazin1: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 22,
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#F2F5F8',
    position: 'relative',
  },
  setmagazin: {
    // marginHorizontal: 10,
    backgroundColor: '#F2F5F8',
    // height: 101,
    width: 92,
    borderRadius: 8.6,
    paddingHorizontal: 17,
    paddingVertical: 11,
  },
  home: {
    alignItems: 'center',
    paddingHorizontal: 17,
    // marginVertical: 9,
    marginTop: 11,
  },
  setmagazintext: {
    alignItems: 'center',
    // marginHorizontal: 9,
  },
  text: {
    fontSize: 10,
    color: '#121F3E',
    // textAlign: 'center',
  },
  mediapark: {
    marginHorizontal: 15,
  },
  mediaparktext: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  notext: {
    fontSize: 12,
    color: '#000000',
  },
  notext1: {
    fontSize: 8,
    color: '#6B7280',
  },
  mediapark2: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendar: {
    marginHorizontal: 8,
  },
  uglkub: {
    backgroundColor: '#33409E',
    height: 13,
    width: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  two: {
    flexDirection: 'row',
  },
  uglkubno: {
    fontSize: 8,
  },
  aktiv: {
    // height: buttonDimensions,
    // width: buttonBorderWidth,
    position: 'absolute',
    backgroundColor: '#EBFFF4',
    borderWidth: 0.5,
    borderColor: 'green',
    borderRadius: 32,
    alignItems: 'center',
    // marginHorizontal: 233,
    marginTop: -10,
    // marginLeft: 190,
    paddingVertical: 1,
    paddingHorizontal: 1,
    right: 0,
    marginRight: 35,
  },
  aktivtext: {
    fontSize: 10,
    color: '#218F5F',
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  aktiv1: {
    // height: buttonDimensions,
    // width: buttonBorderWidth,
    position: 'absolute',
    backgroundColor: '#FFDBDB',
    borderWidth: 0.5,
    borderColor: '#E71010',
    borderRadius: 32,
    alignItems: 'center',
    // marginHorizontal: 233,
    marginTop: -10,
    // marginLeft: 190,
    paddingVertical: 1,
    paddingHorizontal: 1,
    right: 0,
    marginRight: 35,
  },
  aktivtext1: {
    fontSize: 10,
    color: '#E71010',
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
});
