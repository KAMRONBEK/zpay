import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Back} from '../../assets/icons/icon';

const ZCoin = () => {
  let navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.head2}>
          <View style={styles.headback}>
            <TouchableOpacity onPress={navigation.goBack}>
              <View style={styles.back}>
                <Back />
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.text}>ZCOIN</Text>
          </View>
          <View style={styles.back}>
            <Image
              source={require('../../assets/images/ZcoinOrange.png')}
              style={{height: 32, width: 32}}
            />
          </View>
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.all}>
          <Text style={styles.alltext}>Показать все</Text>
        </View>
        <View style={styles.kub}>
          <View style={styles.flex}>
            <View style={styles.row}>
              <View>
                <Image
                  source={require('../../assets/images/ZcoinOrange.png')}
                  style={{height: 36, width: 36}}
                />
              </View>
              <View style={styles.summa}>
                <Text style={styles.summatext}>
                  Вам был начислен 2500 ZCoins
                </Text>
                <Text style={styles.data}>03.17.2022, 14:04</Text>
              </View>
            </View>
            <View style={styles.tocka}>
              <Image
                source={require('../../assets/images/OrangeCircle.png')}
                style={{height: 15, width: 15}}
              />
            </View>
          </View>
        </View>
        <View style={styles.kub}>
          <View style={styles.flex}>
            <View style={styles.row}>
              <View>
                <Image
                  source={require('../../assets/images/ZcoinOrange.png')}
                  style={{height: 36, width: 36}}
                />
              </View>
              <View style={styles.summa}>
                <Text style={styles.summatext}>
                  Вам был начислен 2500 ZCoins
                </Text>
                <Text style={styles.data}>03.17.2022, 14:04</Text>
              </View>
            </View>
            <View style={styles.tocka}>
              <Image
                source={require('../../assets/images/OrangeCircle.png')}
                style={{height: 15, width: 15}}
              />
            </View>
          </View>
        </View>
        <View style={styles.kub}>
          <View style={styles.flex}>
            <View style={styles.row}>
              <View>
                <Image
                  source={require('../../assets/images/ZcoinOrange.png')}
                  style={{height: 36, width: 36}}
                />
              </View>
              <View style={styles.summa}>
                <Text style={styles.summatext}>
                  Вам был начислен 2500 ZCoins
                </Text>
                <Text style={styles.data}>03.17.2022, 14:04</Text>
              </View>
            </View>
            <View style={styles.tocka}>
              <Image
                source={require('../../assets/images/OrangeCircle.png')}
                style={{height: 15, width: 15}}
              />
            </View>
          </View>
        </View>
        <View style={styles.kub}>
          <View style={styles.flex}>
            <View style={styles.row}>
              <View>
                <Image
                  source={require('../../assets/images/ZcoinOrange.png')}
                  style={{height: 36, width: 36}}
                />
              </View>
              <View style={styles.summa}>
                <Text style={styles.summatext}>
                  Вам был начислен 2500 ZCoins
                </Text>
                <Text style={styles.data}>03.17.2022, 14:04</Text>
              </View>
            </View>
            <View style={styles.tocka}>
              <Image
                source={require('../../assets/images/OrangeCircle.png')}
                style={{height: 15, width: 15}}
              />
            </View>
          </View>
        </View>
        <View style={styles.kub}>
          <View style={styles.flex}>
            <View style={styles.row}>
              <View>
                <Image
                  source={require('../../assets/images/ZcoinOrange.png')}
                  style={{height: 36, width: 36}}
                />
              </View>
              <View style={styles.summa}>
                <Text style={styles.summatext}>
                  Вам был начислен 2500 ZCoins
                </Text>
                <Text style={styles.data}>03.17.2022, 14:04</Text>
              </View>
            </View>
            <View style={styles.tocka}>
              <Image
                source={require('../../assets/images/OrangeCircle.png')}
                style={{height: 15, width: 15}}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ZCoin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  head: {
    height: 109,
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: '#E5E5E5',
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
  },
  headback: {
    justifyContent: 'center',
  },
  head2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 52,
  },
  text: {
    color: '#3554D1',
    fontSize: 16,
  },
  container2: {
    paddingHorizontal: 24,
    paddingVertical: 15,
  },
  all: {},
  alltext: {
    color: '#878B9A',
    fontSize: 14,
  },
  kub: {
    height: 60,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#FFB21E',
    borderWidth: 0.2,
    borderColor: '#FFB21E',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
  },
  summa: {
    marginLeft: 10,
  },
  summatext: {
    color: '#12154C',
    fontSize: 12,
  },
  data: {
    color: '#878B9A',
    fontSize: 12,
    marginTop: 4,
  },
  tocka: {},
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
