import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Back} from '../../assets/icons/icon';
import MoneyPayment from '../MoneyPayment';
import Modal from 'react-native-modal';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const buttonHeight = SCREEN_HEIGHT * 0.71;

// const buttonDimensions = SCREEN_HEIGHT * 0.42; // this is equivalent to 255 from a 393 device width
// const contractBorderHeight = SCREEN_HEIGHT * 0.09; // this is equivalent to 2 from a 393 device width

const Contractss = () => {
  let navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.head1}>
          <TouchableOpacity onPress={navigation.goBack}>
            <View style={styles.back}>
              <Back />
            </View>
          </TouchableOpacity>
          <View style={styles.no}>
            <Text style={styles.text}>№202013 от 22.01.2022</Text>
          </View>
          <View style={styles.back1}></View>
        </View>
      </View>
      <SafeAreaView style={styles.safeariaview}>
        <ScrollView style={styles.scrollview}>
          <View style={styles.container2}>
            <View style={styles.number}>
              <Text style={styles.numbertext}>№2002123 от 21/02/2022</Text>
            </View>
            <View style={styles.text2}>
              <Text style={styles.text3}>Телевизор LG 43 UHD, Thinq Ai</Text>
            </View>
            <View style={styles.grafik}>
              <Text style={styles.numbertext}>График платежей</Text>
            </View>
            <View style={styles.text2}>
              <Text style={styles.text3}>Срок погашения 6 месяцев</Text>
            </View>
            <View style={styles.grafiktext}>
              <Text style={styles.grafika}>Сумма платежа</Text>
              <Text style={styles.grafika}>Остаток</Text>
              <Text style={styles.grafika}>Статус</Text>
            </View>
            <View style={styles.reference}>
              {/* <ScrollView> */}
              <View style={styles.series}>
                <View>
                  <Text style={styles.seriestext}>299 000</Text>
                  <Text style={styles.datatext}>01.01.2022</Text>
                </View>

                <Text style={styles.seriestext}>299 000</Text>
                <TouchableOpacity>
                  <View style={styles.may}>
                    <Text style={styles.maytext1}>оплачен</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.bottom}></View>
              <View style={styles.series}>
                <View>
                  <Text style={styles.seriestext}>299 000</Text>
                  <Text style={styles.datatext}>01.01.2022</Text>
                </View>

                <Text style={styles.seriestext}>299 000</Text>
                <TouchableOpacity>
                  <View style={styles.may}>
                    <Text style={styles.maytext1}>оплачен</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.bottom}></View>
              <View style={styles.series}>
                <View>
                  <Text style={styles.seriestext}>299 000</Text>
                  <Text style={styles.datatext}>01.01.2022</Text>
                </View>

                <Text style={styles.seriestext}>299 000</Text>
                <TouchableOpacity>
                  <View style={styles.may2}>
                    <Text style={styles.maytext3}>оплатить</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.bottom}></View>
              <View style={styles.series}>
                <View>
                  <Text style={styles.seriestext}>299 000</Text>
                  <Text style={styles.datatext}>01.01.2022</Text>
                </View>

                <Text style={styles.seriestext}>299 000</Text>
                <TouchableOpacity>
                  <View style={styles.may3}>
                    <Text style={styles.maytext2}>не оплачен</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.bottom}></View>
              <View style={styles.series}>
                <View>
                  <Text style={styles.seriestext}>299 000</Text>
                  <Text style={styles.datatext}>01.01.2022</Text>
                </View>

                <Text style={styles.seriestext}>299 000</Text>
                <TouchableOpacity>
                  <View style={styles.may}>
                    <Text style={styles.maytext1}>оплачен</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.bottom}></View>
              <View style={styles.series}>
                <View>
                  <Text style={styles.seriestext}>299 000</Text>
                  <Text style={styles.datatext}>01.01.2022</Text>
                </View>

                <Text style={styles.seriestext}>299 000</Text>
                <TouchableOpacity>
                  <View style={styles.may3}>
                    <Text style={styles.maytext2}>не оплачен</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.grafik2}>
              <Text style={styles.numbertext}>4 990 570 UZS</Text>
            </View>
            <View style={styles.text5}>
              <Text style={styles.text3}>Остаток: 1 670 900 сум</Text>
            </View>
            <View style={styles.oferta}>
              <Image
                source={require('../../assets/images/Document.png')}
                style={{height: 48, width: 48}}
              />
              <View style={styles.contract}>
                <Text style={styles.ofertatext}>Оферта</Text>
                <Text style={styles.ofertatext2}>Договор оферты №15390</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View style={styles.button}>
                <Text style={styles.buttontext}>Погасить досрочно</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
      <Modal
        onSwipeComplete={() => setModalVisible(false)}
        isVisible={modalVisible}
        swipeDirection="down"
        style={{
          flex: 1,
          margin: 0,
          justifyContent: 'flex-end',
        }}
        onBackdropPress={() => setModalVisible(false)}>
        <View style={{margin: 0}}>
          <MoneyPayment />
        </View>
      </Modal>
    </View>
  );
};

export default Contractss;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container2: {
    paddingHorizontal: 24,
  },
  head: {
    height: 109,
    width: '100%',
    backgroundColor: '#FFF',
    paddingHorizontal: 24,
  },
  head1: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 52,
  },
  back: {
    height: 40,
    width: 40,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#EAEFF3',
  },
  back1: {
    height: 40,
    width: 40,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },

  no: {
    marginHorizontal: 37,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color: '#3554D1',
    fontSize: 18,
    fontWeight: '600',
  },
  number: {
    marginTop: 30,
  },
  numbertext: {
    fontSize: 24,
    color: '#12154C',
    fontWeight: '800',
  },
  text2: {
    marginTop: 8,
  },
  text5: {
    marginTop: 4,
  },
  text3: {
    fontSize: 16,
    color: '#878B9A',
    fontWeight: '600',
  },
  grafik: {
    marginTop: 28,
  },
  grafik2: {
    marginTop: 25,
  },
  grafiktext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    // height: 53,
    width: '100%',
    backgroundColor: '#F3F5F7',
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 20,
  },
  grafika: {
    fontSize: 12,
    color: '#5F6C7A',
  },
  reference: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: '#EAE9EE',
  },
  safeariaview: {
    flex: 1,
  },
  scrollview: {},
  oferta: {
    // height: contractBorderHeight,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#E8EBF0',
    marginTop: 32,
    paddingHorizontal: 22,
    paddingVertical: 20,
    flexDirection: 'row',
  },
  button: {
    // height: 50,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#427CF8',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  buttontext: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  contract: {
    marginLeft: 14,
  },
  ofertatext: {
    color: '#000000',
    fontSize: 16,
  },
  ofertatext2: {
    fontSize: 14,
    color: '#878B9A',
  },
  series: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    // paddingHorizontal: 20,
  },
  seriestext: {
    fontSize: 12,
    color: '#12154C',
  },
  may: {
    borderRadius: 50,
    backgroundColor: '#EBFFF4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#32B179',
  },
  may2: {
    borderRadius: 50,
    backgroundColor: '#FFB21E',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#FFB21E',
  },
  may3: {
    borderRadius: 50,
    backgroundColor: '#FFDBDB',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#E71010',
  },
  maytext1: {
    fontSize: 12,
    color: '#32B179',
  },
  maytext2: {
    fontSize: 12,
    color: '#E71010',
  },
  maytext3: {
    fontSize: 12,
    color: '#FFF',
  },
  data: {
    // marginTop: 5,
    // marginLeft: 30,
    marginVertical: 10,
  },
  datatext: {
    fontSize: 10,
    color: '#878B9A',
    marginTop: 5,
  },
  bottom: {
    // marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EAE9EE',
    marginVertical: 10,
  },
});
