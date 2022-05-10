import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Back} from '../../assets/icons/icon';

const Notifications = () => {
  let navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.head2}>
        <TouchableOpacity onPress={navigation.goBack}>
          <View style={styles.back}>
            <Back />
          </View>
        </TouchableOpacity>
        <View style={styles.bonus}>
          <Text style={styles.text}>Уведомления</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.row}>
          <Text style={styles.rowtext}>Показать все</Text>
          <Text style={styles.rowtext}>Отметить как прочитано</Text>
        </View>
        <View style={styles.container3}>
          <View style={styles.row2}>
            <Text style={styles.headtext}>Начислен Бонус</Text>
            <Image source={require('../../assets/images/orange.png')} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical: 5,
              paddingHorizontal: 15,
              // backgroundColor: 'red',
            }}>
            <Image
              source={require('../../assets/images/ZCoinBlueIcon.png')}
              style={{height: 36, width: 36}}
            />
            <View style={{marginHorizontal: 25}}>
              <Text style={styles.notificationText}>
                Hurmatli RAXMANOV SHAXBOZ RASULDJON O`G`LI! Sizning 191400
                so'mlik to'lovingiz muvaffaqiyatli o'tkazildi. Shartnoma
                bo’yicha qolgan qarzdorlik...
              </Text>
            </View>
          </View>
          <View style={styles.data}>
            <Text style={styles.datatext}>03.17.2022, 14:04</Text>
          </View>
        </View>

        <View style={styles.container5}>
          <View style={styles.row2}>
            <Text style={styles.headtext}>Начислен Бонус</Text>
            <Image source={require('../../assets/images/orange.png')} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical: 5,
              paddingHorizontal: 15,
              // backgroundColor: 'red',
            }}>
            <Image
              source={require('../../assets/images/ZCoinBlueIcon.png')}
              style={{height: 36, width: 36}}
            />
            <View style={{marginHorizontal: 25}}>
              <Text style={styles.notificationText}>
                Hurmatli RAXMANOV SHAXBOZ RASULDJON O`G`LI! Sizning 191400
                so'mlik to'lovingiz muvaffaqiyatli o'tkazildi. Shartnoma
                bo’yicha qolgan qarzdorlik...
              </Text>
            </View>
          </View>
          <View style={styles.data}>
            <Text style={styles.datatext}>03.17.2022, 14:04</Text>
          </View>
        </View>
        <View style={styles.container3}>
          <View style={styles.row2}>
            <Text style={styles.headtext}>Списание</Text>
            <Image source={require('../../assets/images/orange.png')} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical: 5,
              paddingHorizontal: 15,
              // backgroundColor: 'red',
            }}>
            <Image
              source={require('../../assets/images/ZCoinBlueIcon.png')}
              style={{height: 36, width: 36}}
            />
            <View style={{marginHorizontal: 25}}>
              <Text style={styles.notificationText}>
                Hurmatli RAXMANOV SHAXBOZ RASULDJON O`G`LI! Sizning 191400
                so'mlik to'lovingiz muvaffaqiyatli o'tkazildi. Shartnoma
                bo’yicha qolgan qarzdorlik...
              </Text>
            </View>
          </View>
          <View style={styles.data}>
            <Text style={styles.datatext}>03.17.2022, 14:04</Text>
          </View>
        </View>
        <View style={styles.container5}>
          <View style={styles.row2}>
            <Text style={styles.headtext}>Списание</Text>
            <Image source={require('../../assets/images/orange.png')} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical: 5,
              paddingHorizontal: 15,
              // backgroundColor: 'red',
            }}>
            <Image
              source={require('../../assets/images/ZCoinBlueIcon.png')}
              style={{height: 36, width: 36}}
            />
            <View style={{marginHorizontal: 25}}>
              <Text style={styles.notificationText}>
                Hurmatli RAXMANOV SHAXBOZ RASULDJON O`G`LI! Sizning 191400
                so'mlik to'lovingiz muvaffaqiyatli o'tkazildi. Shartnoma
                bo’yicha qolgan qarzdorlik...
              </Text>
            </View>
          </View>
          <View style={styles.data}>
            <Text style={styles.datatext}>03.17.2022, 14:04</Text>
          </View>
        </View>
        {/* <View style={styles.container4}>
          <View style={{}}>
            <View style={styles.row2}>
              <Text style={styles.headtext}>Начислен Бонус</Text>
              <View>
                <Image source={require('../../assets/images/orange.png')} />
              </View>
            </View>
            <View style={styles.flex}>
              <Image source={require('../../assets/images/zcoinblue.png')} />
              <View style={styles.text2}>
                <Text style={styles.notificationText}>
                  Hurmatli RAXMANOV SHAXBOZ RASULDJON O`G`LI! Sizning 191400
                  so'mlik to'lovingiz muvaffaqiyatli o'tkazildi. Shartnoma
                  bo’yicha qolgan qarzdorlik...
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.data1}>
            <Text style={styles.datatext}>03.17.2022, 14:04</Text>
          </View>
        </View>
        <View style={styles.container3}>
          <View style={{}}>
            <View style={styles.row2}>
              <Text style={styles.headtext}>Списание</Text>
              <View>
                <Image source={require('../../assets/images/orange.png')} />
              </View>
            </View>
            <View style={styles.flex}>
              <Image source={require('../../assets/images/zcoinblue.png')} />
              <View style={styles.text2}>
                <Text style={styles.notificationText}>
                  Hurmatli RAXMANOV SHAXBOZ RASULDJON O`G`LI! Sizning 191400
                  so'mlik to'lovingiz muvaffaqiyatli o'tkazildi. Shartnoma
                  bo’yicha qolgan qarzdorlik...
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.data1}>
            <Text style={styles.datatext}>03.17.2022, 14:04</Text>
          </View>
        </View>
        <View style={styles.container3}>
          <View style={{}}>
            <View style={styles.row2}>
              <Text style={styles.headtext}>Списание</Text>
              <View>
                <Image source={require('../../assets/images/orange.png')} />
              </View>
            </View>
            <View style={styles.flex}>
              <Image source={require('../../assets/images/zcoinblue.png')} />

              <View style={styles.text2}>
                <Text style={styles.notificationText}>
                  Hurmatli RAXMANOV SHAXBOZ RASULDJON O`G`LI! Sizning 191400
                  so'mlik to'lovingiz muvaffaqiyatli o'tkazildi. Shartnoma
                  bo’yicha qolgan qarzdorlik...
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.data1}>
            <Text style={styles.datatext}>03.17.2022, 14:04</Text>
          </View>
        </View> */}
      </View>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container2: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 6.5,
    borderWidth: 0.3,
    borderColor: '#878B9A',
  },
  container3: {
    // height: 126,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    marginTop: 20,
    borderLeftWidth: 6,
    borderLeftColor: '#F3F2F4',
    paddingHorizontal: 10,
    paddingVertical: 13,
    borderWidth: 0.3,
    borderColor: '#878B9A',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container5: {
    // height: 126,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    marginTop: 20,
    borderLeftWidth: 6,
    borderLeftColor: '#32B179',
    borderWidth: 0.3,
    borderColor: '#878B9A',
    paddingHorizontal: 10,
    paddingVertical: 13,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container4: {
    // height: 126,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    marginTop: 20,
    borderLeftWidth: 6,
    borderLeftColor: '#32B179',
    borderWidth: 0.3,
    borderColor: '#878B9A',
    paddingHorizontal: 14,
    paddingVertical: 13,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  back: {
    borderWidth: 0.9,
    borderRadius: 10,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#EBF0FA',
    marginTop: 52,
    // position: 'absolute',
  },
  bonus: {
    // alignItems: 'center',
    marginLeft: 90,
    marginTop: 62,
    // justifyContent: 'center',
  },
  headback: {
    // position: 'absolute',
  },
  head2: {
    flexDirection: 'row',
    // alignItems: 'center',
    height: 109,
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    // justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#3554D1',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  rowtext: {
    fontSize: 14,
    color: '#878B9A',
  },
  flex: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-between',
  },
  data: {
    marginTop: 10,
    marginLeft: 60,
    // justifyContent: 'flex-end',
  },
  data1: {
    marginTop: 8,
    marginLeft: 55,
  },
  datatext: {
    fontSize: 12,
    color: '#878B9A',
  },
  headtext: {
    fontSize: 16,
    color: '#12154C',
    // paddingVertical: 5,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text2: {
    marginLeft: 10,
    paddingHorizontal: 30,
  },
  notificationText: {
    color: '#12154C',
    fontSize: 12,
    // marginHorizontal: 20,
  },
});
