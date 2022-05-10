import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  BackHandler,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Back, CheckIcon, RU} from '../../assets/icons/icon';

const Id = () => {
  let navigation = useNavigation();
  const Scaner = () => {
    navigation.navigate('scaner');
  };

  return (
    <View style={styles.container}>
      {/* <ScrollView
        style={{
          backgroundColor: 'blue',
          flexDirection: 'column',
        }}
        showsVerticalScrollIndicator={false}> */}
      <View style={styles.headbar}>
        <TouchableOpacity onPress={navigation.goBack}>
          <View style={styles.headback}>
            <Back />
          </View>
        </TouchableOpacity>
        <View style={styles.head}>
          <Text style={styles.textIdentifikatsiya}>Идентификация</Text>
        </View>
        <View style={styles.headback}>
          <RU />
        </View>
      </View>
      {/* <View style={styles.flex}> */}
      <View style={{position: 'absolute', marginTop: 154, marginLeft: 24}}>
        <View style={styles.text}>
          <Text style={styles.text1}>Паспортные данные</Text>
        </View>
        <View style={styles.text2}>
          <Text style={styles.text3}>Создание нового аккунта</Text>
        </View>
        <View style={styles.nomer1}>
          <Text style={styles.nomer}>Номер паспорта</Text>
        </View>
        <View style={styles.headinput}>
          <View style={styles.littleinput}>
            <TextInput
              style={styles.input}
              placeholder="AA"
              placeholderTextColor={'grey'}
            />
          </View>
          {/* <View style={styles.section}> */}

          <View style={styles.sectionInput}>
            <TextInput
              style={styles.input}
              placeholder="Номер паспорта"
              placeholderTextColor={'grey'}
            />
            {/* <View style={styles.checkIcon}>
              <CheckIcon />
            </View> */}
          </View>
          {/* </View> */}
        </View>
        <View style={styles.nomer1}>
          <Text style={styles.nomer}>Год рождения</Text>
        </View>
        <View style={styles.sectionInput1}>
          <TextInput
            style={styles.input}
            placeholder="16.09.2002"
            placeholderTextColor={'grey'}
          />
          {/* <View style={styles.checkIcon1}>
            <CheckIcon />
          </View> */}
        </View>
      </View>

      <View style={{marginTop: 500}}>
        <TouchableOpacity onPress={Scaner}>
          <View style={styles.nextButton}>
            <Text style={{color: 'white', fontSize: 14}}>Потвердить</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.skipButton}>
            <Text style={{color: '#427CF8', fontSize: 14}}>Пропустить</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.img}>
        <Image
          source={require('../../assets/images/IndicatorIcon2.png')}
          style={{height: 9, width: 32}}
        />
      </View>
      {/* </View> */}
      {/* </ScrollView> */}
    </View>
  );
};

export default Id;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 24,
    paddingVertical: 51,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headback: {
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderColor: '#EAEFF3',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  nomer: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  nomer1: {
    marginTop: 20,
  },
  head: {
    marginTop: 15,
  },
  textIdentifikatsiya: {
    color: '#427CF8',
    fontSize: 16,
  },
  headbar: {
    // marginVertical: 52,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    // marginTop: 52,
  },
  text1: {
    color: '#427CF8',
    fontSize: 22,
  },
  text2: {
    marginTop: 10,
  },
  text3: {
    color: 'grey',
    fontSize: 14,
  },
  headinput: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginTop: 11,
  },
  littleinput: {
    backgroundColor: '#ffff',
    height: 50,
    width: 56,
    borderRadius: 10,
    borderWidth: 0.9,
    borderColor: '#EAEFF3',
    alignItems: 'center',
  },
  sectionInput: {
    height: 50,
    width: '80%',
    backgroundColor: '#ffff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 5,
    borderWidth: 1,
    borderColor: '#EAEFF3',
    marginLeft: 15,
    justifyContent: 'space-between',
    paddingHorizontal: 17,
  },
  sectionInput1: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 17,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#EAEFF3',
    justifyContent: 'space-between',
  },
  section: {},

  border: {
    height: 23,
    width: 1,
    backgroundColor: 'grey',
    marginRight: 10,
    marginLeft: 20,
  },
  input: {
    padding: 8,
    color: '#12154C',
  },
  checkIcon: {},
  checkIcon1: {
    // paddingLeft: 210,
  },
  nextButton: {
    backgroundColor: '#427CF8',
    borderRadius: 10,
    alignItems: 'center',
    // padding: 18,
    // marginTop: 200,
    borderWidth: 1,
    borderColor: '#EAEFF3',
    paddingVertical: 15,
  },
  skipButton: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    alignItems: 'center',
    // padding: 18,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#EAEFF3',
    paddingVertical: 15,
  },
  img: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 5,
  },
  flex: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    // backgroundColor: 'white',
  },
});
