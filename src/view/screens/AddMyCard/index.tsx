import {useNavigation} from '@react-navigation/native';
import React, {useState, useRef, useEffect} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Animated,
  Dimensions,
} from 'react-native';
import {Back, RU, Scan} from '../../assets/icons/icon';
import AddCardFinish from '../AddCardFinish';
import {Carusel} from '../Carusel';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

const instructionBarWidth = SCREEN_HEIGHT * 0.24;

const AddMyCard = () => {
  let navigation = useNavigation();
  const AddCardFinish = () => {
    navigation.navigate('addcardfinish');
  };

  const [state, setState] = useState('false');
  // useEffect(() => {
  //   // number.length<=9
  //   if (number.length < 9 && number.length > 0) {
  //     setErrorMessage('Incorrect phone number');
  //   } else {
  //     setErrorMessage('');
  //   }
  // }, [number]);

  // const onNext = () => {
  //   navigation.navigate(AddCardFinish);
  // };

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#FFF'}}>
      <View style={styles.container}>
        <View style={styles.headbar}>
          <TouchableOpacity onPress={navigation.goBack}>
            <View style={styles.headback}>
              <Back />
            </View>
          </TouchableOpacity>
          <Text style={styles.headtext}>Мои карты</Text>

          <View style={styles.headback}>
            <RU />
          </View>
        </View>
        <View style={styles.container1}>
          <View style={styles.head2}>
            <Text style={styles.head2text}>Добавление карты</Text>
          </View>
          <View style={styles.head3}>
            <Text style={styles.head3text}>Выберите дизайн карты</Text>
          </View>
          <View
            style={{
              backgroundColor: '#FFF',
              alignItems: 'center',
              height: instructionBarWidth,
              paddingVertical: 10,
              marginVertical: 28,
            }}>
            <Carusel />
          </View>
          <View style={styles.numberkarta}>
            <Text style={styles.numberkartatext}>Номер карты</Text>
          </View>
          <View style={styles.sectionInput1}>
            <TextInput
              style={styles.input}
              placeholder="0000 0000 0000 0000"
              placeholderTextColor={'grey'}
              keyboardType="number-pad"
            />
            <Scan />
          </View>
          <View style={styles.numberkarta2}>
            <Text style={styles.numberkartatext}>Срок действия карты</Text>
          </View>
          <View style={styles.sectionInput1}>
            <TextInput
              style={styles.input}
              placeholder="дата/год истечения"
              placeholderTextColor={'grey'}
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.numberkarta2}>
            <Text style={styles.numberkartatext}>Название карты</Text>
          </View>
          <View style={styles.sectionInput1}>
            <TextInput
              style={styles.input}
              placeholder="Дайте название карты"
              placeholderTextColor={'grey'}
              // keyboardType="number-pad"
            />
          </View>
          <TouchableOpacity onPress={AddCardFinish}>
            <View style={styles.nextButton}>
              <Text style={{color: '#fff', fontSize: 16}}>Добавить карту</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AddMyCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container1: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 24,
    paddingVertical: 30,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headback: {
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderColor: '#EAEFF3',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginTop: 52,
  },
  headbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  kartu: {
    height: 109,
    width: '100%',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EAE9EE',
  },
  headtext: {
    color: '#12154C',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 52,
  },
  head2: {},
  head2text: {
    color: '#12154C',
    fontSize: 24,
  },
  head3: {
    marginTop: 10,
  },
  head3text: {
    color: '#33409E',
    fontSize: 16,
  },

  numberkarta: {},
  numberkarta2: {
    marginTop: 20,
  },
  numberkartatext: {
    color: '#12154C',
    fontSize: 14,
    fontWeight: 'bold',
  },
  sectionInput1: {
    height: 52,
    width: '100%',
    backgroundColor: '#ffff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 11,
    borderWidth: 0.9,
    borderColor: '#EAEFF3',
    paddingHorizontal: 18,
    justifyContent: 'space-between',
  },
  input: {
    padding: 10,
    color: '#12154C',
    width: '80%',
  },
  nextButton: {
    backgroundColor: '#3554D1',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // height: 50,
    marginTop: 20,
    borderWidth: 0.9,
    borderColor: '#EAEFF3',
    paddingVertical: 15,
  },

  scan: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scaner: {
    // marginLeft: 130,
    // textAlign: 'right',
  },
  zpay: {
    position: 'absolute',
    marginLeft: 200,
    marginTop: 20,
  },
});
