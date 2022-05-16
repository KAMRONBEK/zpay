import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Back, EnterIcon} from '../../assets/icons/icon';
import CaruselStore from '../CaruselStore';
import FlatlistTitle from '../FlatList';
import {StoreCarousel} from '../StoreCarousel';

const PartnerStore = () => {
  let navigation = useNavigation();
  const AboutProduct = () => {
    navigation.navigate('aboutproduct');
  };
  const [product, setProduct] = useState(false);
  const handle = () => {
    setProduct(!product);
  };
  // const [limeted, setLimeted] = useState(false);
  // const handle2 = () => {
  //   setLimeted(!limeted);
  // };
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
          <View style={styles.bonus}>
            <Text style={styles.text}>Магазин партнеров</Text>
          </View>
        </View>
      </View>
      <ScrollView
        style={styles.container2}
        showsVerticalScrollIndicator={false}>
        <View style={styles.scroll}>
          <FlatlistTitle />
        </View>
        <StoreCarousel />
        <View style={styles.tovari}>
          <Text style={styles.tovaritext}>Лучшие товары</Text>
          <TouchableOpacity onPress={handle}>
            <Text style={styles.tovaritext2}>Все</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          style={[{height: product ? 310 : 110, overflow: 'hidden'}]}
          showVerticalIndicator={false}>
          <View style={styles.row}>
            <View style={styles.kub}>
              <Image
                source={require('../../assets/images/chair.png')}
                style={{height: 60, width: 60}}
              />
            </View>
            <View style={styles.kub}>
              <Image
                source={require('../../assets/images/chair2.png')}
                style={{height: 68, width: 68}}
              />
            </View>
            <View style={styles.kub}>
              <Image
                source={require('../../assets/images/table.png')}
                style={{height: 54, width: 73}}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.kub}></View>
            <View style={styles.kub}></View>
            <View style={styles.kub}></View>
          </View>
          <View style={styles.row}>
            <View style={styles.kub}></View>
            <View style={styles.kub}></View>
            <View style={styles.kub}></View>
          </View>
          <View style={styles.row}>
            <View style={styles.kub}></View>
            <View style={styles.kub}></View>
            <View style={styles.kub}></View>
          </View>
        </ScrollView>

        <View style={styles.tovari2}>
          <Text style={styles.tovaritext}>Лимитированое предложение</Text>
          <TouchableOpacity onPress={handle}>
            <Text style={styles.tovaritext2}>Все</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={[
            {
              height: product ? 310 : 110,
              overflow: 'hidden',
            },
          ]}
          showVerticalIndicator={false}>
          <View style={styles.row}>
            <View style={styles.kub}>
              <Image
                source={require('../../assets/images/chair.png')}
                style={{height: 60, width: 60}}
              />
            </View>
            <View style={styles.kub}>
              <Image
                source={require('../../assets/images/chair2.png')}
                style={{height: 68, width: 68}}
              />
            </View>
            <View style={styles.kub}>
              <Image
                source={require('../../assets/images/table.png')}
                style={{height: 54, width: 73}}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.kub}></View>
            <View style={styles.kub}></View>
            <View style={styles.kub}></View>
          </View>
          <View style={styles.row}>
            <View style={styles.kub}></View>
            <View style={styles.kub}></View>
            <View style={styles.kub}></View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default PartnerStore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  head: {
    height: 109,
    width: '100%',
    backgroundColor: '#FFF',
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: '#F2F5F8',
  },
  bonus: {
    marginLeft: 70,
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
    marginTop: 52,
  },
  text: {
    color: '#12154C',
    fontSize: 18,
  },
  scroll: {
    marginTop: 30,
  },
  container2: {
    paddingHorizontal: 24,
  },
  container3: {
    height: 150,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dolcevita: {
    marginTop: 6,
  },
  dolcevitatext: {
    color: '#926C4B',
    fontSize: 14,
  },
  narx: {
    marginTop: 6,
  },
  narxtext: {
    color: '#878B9A',
    fontSize: 12,
  },
  icon: {
    marginTop: 13,
  },
  tovari: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tovari2: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tovaritext: {
    color: '#12154C',
    fontSize: 16,
    fontWeight: '700',
  },
  tovaritext2: {
    color: '#FFA011',
    fontSize: 14,
  },
  kub: {
    height: 90,
    width: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
