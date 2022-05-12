import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {UzcartIcon, XIcon} from '../../assets/icons/icon';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const buttonHeight = SCREEN_HEIGHT * 0.58; // this is equivalent to 255 from a 393 device width
const contractBorderHeight = SCREEN_HEIGHT * 0.04;
const inputBorderHeight = SCREEN_HEIGHT * 0.05;
const buttonOplatitHeight = SCREEN_HEIGHT * 0.053;

const modalHeight = SCREEN_HEIGHT * 0.26;
const errorModalHeight = SCREEN_HEIGHT * 0.04;

const MoneyPayment = () => {
  let navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.modalView}>
        <View style={styles.bottom}>
          <View style={styles.head}></View>
          {/* <ScrollView> */}
          <View style={styles.padding}>
            <View>
              <View>
                <Text style={styles.summatext}>Сумма</Text>
              </View>
              <View style={styles.container2}>
                <TextInput
                  style={styles.input}
                  placeholder=""
                  placeholderTextColor={'grey'}
                />
              </View>
              <View style={styles.oplati}>
                <Text style={styles.summatext}>Выберите способ оплаты</Text>
              </View>
              <TouchableOpacity>
                <View style={styles.row}>
                  <View style={styles.kub}>
                    <UzcartIcon />
                  </View>
                  <View style={styles.kartanumber}>
                    <Text style={styles.number}>8600 00** **** **97</Text>
                    <View style={styles.data}>
                      <Text style={styles.datatext}>05/27</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.line}></View>
              <TouchableOpacity>
                <View style={styles.row}>
                  <View style={styles.kub}>
                    <Image source={require('../../assets/images/Humo.png')} />
                  </View>
                  <View style={styles.kartanumber}>
                    <Text style={styles.number}>9800 00** **** **97</Text>
                    <View style={styles.data}>
                      <Text style={styles.datatext}>05/27</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.line}></View>
              <TouchableOpacity>
                <View style={styles.row}>
                  <View style={styles.kub}>
                    <Image
                      source={require('../../assets/images/scotimg.png')}
                    />
                  </View>
                  <View style={styles.kartanumber}>
                    <Text style={styles.number}>Лицевой счет</Text>
                    <View style={styles.data}>
                      <Text style={styles.datatext2}>244 000 сум</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.line}></View>
            </View>
            <View>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View style={styles.button}>
                  <Text style={styles.buttontext}>Оплатить</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* </ScrollView> */}
        </View>
      </View>
      <View>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.modal}>
            <TouchableOpacity>
              <View style={styles.modalview}>
                <View style={styles.headmodal}>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <XIcon />
                  </TouchableOpacity>
                </View>

                <View style={styles.true}>
                  <Image
                    source={require('../../assets/images/true.png')}
                    style={{
                      height: 88,
                      width: 134,
                    }}
                  />
                </View>
                <View style={styles.bila}>
                  <Text style={styles.oplatatext}>Оплата произведена</Text>
                  {/* <Text style={styles.oplatatext}>выполнена успешно</Text> */}
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>

        {/* <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.modal}>
            <View style={styles.modalview}>
              <View style={styles.headmodal2}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <XIcon />
                </TouchableOpacity>
              </View>
              <View style={styles.true}>
                <Image
                  source={require('../../assets/images/ErrorImg.png')}
                  style={{
                    height: 88,
                    width: 134,
                  }}
                />
              </View>
              <View style={styles.bila}>
                <Text style={styles.oplatatext}>Нет доступных</Text>
                <Text style={styles.oplatatext}>средств на карте</Text>
                <View style={styles.sorry}>
                  <Text style={styles.oplatatext2}>
                    Пожалуйста пополните карту
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Modal> */}
      </View>
    </View>
  );
};

export default MoneyPayment;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'rgba(0,0,0,0.7)',
  },
  bottom: {
    height: buttonHeight,
    width: '100%',
    backgroundColor: '#FFF',
  },
  head: {
    height: contractBorderHeight,
    width: '100%',
    backgroundColor: '#3554D1',
  },
  padding: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 25,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  summatext: {
    fontSize: 14,
    color: '#12154C',
    fontWeight: 'bold',
  },
  container2: {
    height: inputBorderHeight,
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EAEFF3',
    marginTop: 10,
  },
  oplati: {
    marginTop: 20,
  },
  kub: {
    height: 38,
    width: 40,
    borderRadius: 10,
    backgroundColor: '#F3F7F9',
    borderColor: '#EAEFF3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    marginTop: 16,
  },
  kartanumber: {
    marginLeft: 16,
  },
  number: {
    fontSize: 14,
    color: '#000000',
  },
  data: {
    marginTop: 5,
  },
  datatext: {
    fontSize: 12,
    color: '#000000',
  },
  datatext2: {
    fontSize: 12,
    color: '#32B179',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#EAEFF3',
    marginTop: 10,
  },
  button: {
    // height: buttonOplatitHeight,
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#3554D1',
    backgroundColor: '#3554D1',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 30,
    paddingVertical: 15,
  },
  buttontext: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  input: {
    padding: 12,
    color: '#12154C',
  },
  modalView: {
    borderBottomWidth: 0.5,
    marginTop: 280,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalview: {
    height: modalHeight,
    width: 300,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  headmodal: {
    height: errorModalHeight,
    width: '100%',
    backgroundColor: '#199E59',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  headmodal2: {
    height: errorModalHeight,
    width: '100%',
    backgroundColor: '#DB4016',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  true: {
    alignItems: 'center',
    marginTop: 10,
  },
  bila: {
    alignItems: 'center',
    margin:10
  },
  oplatatext: {
    fontSize: 16,
    color: '#12154C',
  },
  oplatatext2: {
    fontSize: 12,
    color: '#96A0B5',
  },
  sorry: {
    marginTop: 5,
  },
});
