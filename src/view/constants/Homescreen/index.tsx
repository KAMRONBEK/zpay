import {NavigationAction, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';
import 'react-native-gesture-handler';
import {
  BluearavaIcon,
  Circleplus,
  Greenprofil,
  Greenprofilfon,
  Kub,
  Plus,
  Profil,
  RadioIcon,
  Rectangle,
  RedaravaIcon,
  Undov,
  Whitecircle,
} from '../../assets/icons/icon';
import AddMyCard from '../../screens/AddMyCard';
import ProductItem from '../../screens/ProductItem';
import QrCodeCamera from '../../screens/ScanCamera';
import {openDrawer} from 'react-navigation-drawer/lib/typescript/src/routers/DrawerActions';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const buttonDimensions = SCREEN_HEIGHT * 0.059; // this is equivalent to 255 from a 393 device width

const kubDimensions = SCREEN_HEIGHT * 0.056; // this is equivalent to 255 from a 393 device width
const kubWidth = SCREEN_WIDTH * 0.12; // this is equivalent to 255 from a 393 device width

const HomeScreen = () => {
  let navigation = useNavigation();

  const Profilescreen = () => {
    navigation.navigate('Profile');
  };
  const AddMyCard = () => {
    navigation.navigate('addmycard');
  };
  const Appp = () => {
    navigation.navigate('appp');
  };
  const PartnerStore = () => {
    navigation.navigate('partnerstore');
  };
  const Bonuses1 = () => {
    navigation.navigate('bonuses1');
  };
  const ZCoin = () => {
    navigation.navigate('zcoin');
  };
  const [product, setProduct] = useState(false);
  const [limit, setLimit] = useState('8 000 000.00');
  const handle = () => {
    setProduct(!product);
  };

  let cards = [
    {
      id: 1,
      name: 'IQ',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.kub}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Kub />
          </TouchableOpacity>
          {/* <View style={styles.zcoins}>
            <Image
              source={require('../../assets/images/zcoin.png')}
              style={{marginLeft: 15}}
            />
            <Text style={styles.zcoinText}>2500 Zcoins начислено Стандарт</Text>
          </View> */}
          <View style={styles.notification}>
            <Image
              source={require('../../assets/images/CheckDegree.png')}
              style={{marginLeft: 10, height: 40, width: 40}}
            />
            <View style={styles.urovenText}>
              <Text style={styles.notificationText}>Уровень</Text>
              <Text style={styles.notificationText}>Стандарт</Text>
            </View>
            <View style={styles.profil}>
              <Image
                source={require('../../assets/images/ProfilUser.png')}
                style={{marginTop: 10, height: 51, width: 39}}
              />
              {/* <View
                style={{
                  position: 'absolute',
                }}>
                <Whitecircle style={{marginLeft: 35, marginTop: 30}} />
              </View> */}
            </View>
          </View>
        </View>
        <View style={styles.ekran}>
          {cards.length == 0 ? (
            <View style={styles.tex}>
              <View style={styles.undov}>
                <Undov />
              </View>
              <TouchableOpacity onPress={AddMyCard}>
                <View>
                  <Text style={styles.text}>Добавьте пластиковую карту</Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              {/* <View style={styles.tex}>
                <View style={styles.undov}>
                  <Undov />
                </View>
                <TouchableOpacity onPress={AddMyCard}>
                  <View>
                    <Text style={styles.text}>Добавьте пластиковую карту</Text>
                  </View>
                </TouchableOpacity>
              </View> */}
              <View style={styles.limit}>
                <Text style={styles.limittext}>Текущий лимит</Text>
              </View>
              <View style={styles.summa}>
                <TouchableOpacity
                  onPress={() => {
                    setLimit(prev => prev + 100);
                  }}>
                  <Text
                    style={[
                      styles.summatext,
                      {fontSize: limit.length > 9 ? 30 : 42},
                    ]}>
                    {limit} сум
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={ZCoin}>
                <View style={styles.zcoin}>
                  <Text style={styles.zcointext}>50 000 сум</Text>
                  <View style={styles.blue}>
                    <View style={styles.circle}>
                      <Image
                        source={require('../../assets/images/ZcoinOrange.png')}
                        style={{height: 36, width: 36}}
                      />
                    </View>
                    <Text style={styles.circletext}>ZCOINS</Text>
                  </View>
                </View>
              </TouchableOpacity>
              {/* <View style={styles.row3}>
                <View style={styles.uroven}>
                  <Image
                    source={require('../../assets/images/CheckDegree.png')}
                    style={{height: 40, width: 40, marginLeft: 10}}
                  />
                  <View style={styles.urovenText}>
                    <Text style={styles.notificationText}>Уровень</Text>
                    <Text style={styles.notificationText}>Стандарт</Text>
                  </View>
                </View>
                <TouchableOpacity onPress={ZCoin}>
                  <View style={styles.zcoinss}>
                    <View style={styles.circle}>
                       <Image
                        source={require('../../assets/images/ZcoinOrange.png')}
                        style={{height: 36, width: 36}}
                      />
                    </View>
                    <View style={{paddingHorizontal: 10}}>
                      <Text style={styles.circletext2}>ZCOINS</Text>
                      <Text style={styles.zcoinPrice}>50 000 сум</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View> */}
            </View>
          )}
          <View style={styles.direction}>
            <TouchableOpacity onPress={Appp}>
              <ProductItem
                title="QR-code Сканер"
                bgColor="#4581FC"
                url={require('../../assets/images/QRIcon.png')}
                style={{height: 54, width: 54}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={Bonuses1}>
              <ProductItem
                title="Потратить бонусы "
                bgColor="#E61C75"
                url={require('../../assets/images/GiftIcon.png')}
                style={{height: 45, width: 75, marginLeft: 20}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={PartnerStore}>
              <ProductItem
                title="Магазины партнеров"
                bgColor="#EB7350"
                url={require('../../assets/images/BagIcon.png')}
                style={{height: 54, width: 60, marginLeft: 15}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.pokazat}>
        <View style={styles.istoriya}>
          <Text style={styles.istoriyatext}>История списаний</Text>
          <Rectangle />
        </View>
        <TouchableOpacity onPress={handle}>
          <View style={styles.pokazattext}>
            <Text style={styles.pokazatvse}>Показать все</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.dogovor}>
        <Text style={styles.dogovortext}>У вас нет активных договоров</Text>
      </View>
      <View style={styles.smile}>
        <Image source={require('../../assets/images/smile.png')} />
      </View> */}

      <ScrollView>
        <View style={{marginBottom: 30, marginHorizontal: 20}}>
          <View style={styles.row}>
            <View style={styles.flex}>
              <View style={styles.kub2}>
                <RedaravaIcon />
              </View>
              <View style={styles.texno}>
                <Text style={styles.texnotext}>Texnomart</Text>
                <View style={styles.hour}>
                  <Text style={styles.hourtext}>14:45</Text>
                </View>
              </View>
            </View>
            <View style={styles.uzs}>
              <Text style={styles.uzstext}>-3 560 230  UZS</Text>
            </View>
          </View>
          <View style={styles.row2}>
            <View style={styles.flex}>
              <View style={styles.kub3}>
                <BluearavaIcon />
              </View>
              <View style={styles.texno}>
                <Text style={styles.texnotext}>MediaPark</Text>
                <View style={styles.hour}>
                  <Text style={styles.hourtext}>10:15</Text>
                </View>
              </View>
            </View>
            <View style={styles.uzs}>
              <Text style={styles.uzstext}>-7 980 370  UZS</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.flex}>
              <View style={styles.kub2}>
                <RedaravaIcon />
              </View>

              <View style={styles.texno}>
                <Text style={styles.texnotext}>Texnomart</Text>
                <View style={styles.hour}>
                  <Text style={styles.hourtext}>14:45</Text>
                </View>
              </View>
            </View>
            <View style={styles.uzs}>
              <Text style={styles.uzstext}>-3 560 230  UZS</Text>
            </View>
          </View>
          <View style={styles.row2}>
            <View style={styles.flex}>
              <View style={styles.kub3}>
                <BluearavaIcon />
              </View>
              <View style={styles.texno}>
                <Text style={styles.texnotext}>MediaPark</Text>
                <View style={styles.hour}>
                  <Text style={styles.hourtext}>10:15</Text>
                </View>
              </View>
            </View>
            <View style={styles.uzs}>
              <Text style={styles.uzstext}>-7 980 370  UZS</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.flex}>
              <View style={styles.kub2}>
                <RedaravaIcon />
              </View>
              <View style={styles.texno}>
                <Text style={styles.texnotext}>Texnomart</Text>
                <View style={styles.hour}>
                  <Text style={styles.hourtext}>14:45</Text>
                </View>
              </View>
            </View>
            <View style={styles.uzs}>
              <Text style={styles.uzstext}>-3 560 230  UZS</Text>
            </View>
          </View>
          <View style={styles.row2}>
            <View style={styles.flex}>
              <View style={styles.kub3}>
                <BluearavaIcon />
              </View>
              <View style={styles.texno}>
                <Text style={styles.texnotext}>MediaPark</Text>
                <View style={styles.hour}>
                  <Text style={styles.hourtext}>10:15</Text>
                </View>
              </View>
            </View>
            <View style={styles.uzs}>
              <Text style={styles.uzstext}>-7 980 370  UZS</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container1: {
    height: 450,
    backgroundColor: '#3949A9',
  },
  ekran: {
    paddingHorizontal: 20,
  },
  direction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  zcoins: {
    position: 'absolute',
    height: 60,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#FFB21E',
    zIndex: 99,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
  },
  zcoinText: {
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 10,
  },
  notification: {
    // position: 'absolute',
    height: 62,
    width: 208,
    backgroundColor: '#32B179',
    borderRadius: 10,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    // marginLeft: 178,
    // paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  notificationText2: {
    fontSize: 16,
    color: '#FFFFFF',
    marginHorizontal: 10,
  },
  urovenText: {
    marginLeft: 10,
    paddingHorizontal: 10,
  },
  kub: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 54,
    // position: 'relative',
  },

  whitefon: {
    position: 'absolute',
    marginTop: -25,
    marginLeft: 12,
  },
  undov: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 17,
  },
  text: {
    fontSize: 16,
  },
  profil: {
    height: 60,
    width: 60,
    backgroundColor: '#ffffff',
    borderRadius: 50,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  istoriya: {
    marginTop: 40,
  },
  istoriyatext: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  dogovor: {
    alignItems: 'center',
    // marginHorizontal: 22,
    justifyContent: 'center',
    marginTop: 30,
  },
  dogovortext: {
    color: '#878B9A',
    fontSize: 18,
  },
  smile: {
    alignItems: 'center',
    marginVertical: 10,
  },
  // arttext: {
  //   marginVertical: 15,
  // },
  // art3: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   marginTop: 27,
  // },
  tex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 157,
  },
  img: {
    marginVertical: 12,
    marginHorizontal: 21,
  },
  limit: {
    alignItems: 'center',
    marginTop: 45,
  },
  limittext: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  summa: {
    marginTop: 8,
    alignItems: 'center',
    paddingVertical: 10,
  },
  summatext: {
    fontSize: 36,
    color: '#FFFFFF',
  },
  zcoin: {
    height: buttonDimensions,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 30,
  },
  zcointext: {
    fontSize: 20,
    color: '#878B9A',
    // marginLeft: 50,
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  uroven: {
    height: 56.9,
    width: 152,
    borderRadius: 10,
    backgroundColor: '#32B179',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 10,
  },
  zcoinss: {
    height: 56.9,
    width: 157,
    borderRadius: 10,
    backgroundColor: '#636BF9',
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  blue: {
    height: buttonDimensions,
    backgroundColor: '#636BF9',
    borderRadius: 10,
    paddingHorizontal: 22,
    // marginLeft: 230,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    height: 36,
    width: 36,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    // marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circletext: {
    fontSize: 14,
    color: '#FFFFFF',
    marginHorizontal: 10,
  },
  circletext2: {
    fontSize: 16,
    color: '#FFFFFF',
    marginHorizontal: 10,
  },
  zcoinPrice: {
    fontSize: 12,
    color: '#FFFFFF',
    marginHorizontal: 10,
  },
  kub2: {
    height: kubDimensions,
    width: kubWidth,
    borderRadius: 10,
    backgroundColor: '#FFF2F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  kub3: {
    height: kubDimensions,
    width: kubWidth,
    borderRadius: 10,
    backgroundColor: '#EAE9F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 22,
    // justifyContent: 'space-between',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginTop: 20,
  },
  texno: {
    marginLeft: 10,
  },
  texnotext: {
    fontSize: 14,
    color: '#12154C',
  },
  hour: {
    marginTop: 15,
  },
  hourtext: {
    fontSize: 12,
    color: '#CBCACF',
  },
  uzs: {
    marginLeft: 100,
  },
  uzstext: {
    fontSize: 12,
    color: '#12154C',
    fontWeight: 'bold',
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pokazat: {
    marginTop: 10,
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  pokazattext: {
    marginTop: 40,
  },
  pokazatvse: {
    fontSize: 12,
    color: '#878B9A',
  },
});
