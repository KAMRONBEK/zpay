import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Back,
  Back2,
  Exit,
  Games,
  Gas,
  Goverment,
  Internet,
  Lovehome,
  Mobsvyaz,
  Movie,
  Simkartu,
  Telephone,
  Vallet,
} from '../../assets/icons/icon';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const buttonDimensions = SCREEN_HEIGHT * 0.05;
const buttonBorderWidth = SCREEN_WIDTH * 0.3;

const Bonuses1 = () => {
  let navigation = useNavigation();
  const Bonuses2 = () => {
    navigation.navigate('bonuses2');
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#FFF'}}>
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
              <Text style={styles.text}>Бонусы</Text>
            </View>
            <View style={styles.back1}></View>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.zcoin}>
            <View style={styles.zcointext}>
              <Text style={styles.textin}>560 000</Text>
              {/* <Text style={styles.textin2}>ZCoin</Text> */}
              <Image
                source={require('../../assets/images/ZcoinOrange.png')}
                style={{height: 40, width: 40, marginLeft: 15}}
              />
            </View>
            <View style={styles.zcointext2}>
              <Text style={styles.textin3}>накопленые</Text>
              <Text style={styles.textin4}>бонусы</Text>
            </View>
          </View>
          <View style={styles.simkartus}>
            <Text style={styles.simkartutext}>Потратьте бонусы</Text>
          </View>
          <View style={styles.spisok}>
            <Text style={styles.spisoktext}>Ниже приведен список </Text>
          </View>
          <View style={styles.sims}>
            <TouchableOpacity onPress={Bonuses2}>
              <View style={styles.littlecontainer}>
                <Mobsvyaz />
                <Text style={styles.text1}>Моб. связь</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.littlecontainer}>
              <Internet />
              <Text style={styles.text1}>Интернет</Text>
            </View>
            <View style={styles.littlecontainer}>
              <Movie />
              <Text style={styles.text1}>Кино и ТВ</Text>
            </View>
          </View>
          <View style={styles.sims3}>
            <View style={styles.littlecontainer}>
              <Games />
              <Text style={styles.text1}>Развлечения</Text>
            </View>
            <View style={styles.littlecontainer}>
              <Vallet />
              <Text style={styles.text1}>Web Кошельки</Text>
            </View>
            <View style={styles.littlecontainer}>
              <Goverment />
              <Text style={styles.text1}>Гос. услуги</Text>
            </View>
          </View>
          <View style={styles.sims3}>
            <View style={styles.littlecontainer}>
              <Telephone />
              <Text style={styles.text1}>Телефония</Text>
            </View>
            <View style={styles.littlecontainer}>
              <Gas />
              <Text style={styles.text1}>Коммуналка</Text>
            </View>
            <View style={styles.littlecontainer}>
              <Lovehome />
              <Text style={styles.text1}>Приюты</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Bonuses1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  head: {
    height: 109,
    width: '100%',
    backgroundColor: '#33409E',
    paddingHorizontal: 24,
  },
  bonus: {
    // marginLeft: 115,
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
  back1: {
    borderWidth: 0.9,
    borderRadius: 10,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#33409E',
    borderColor: '#33409E',
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
    color: '#FFFFFF',
    fontSize: 18,
  },
  container2: {
    paddingHorizontal: 24,
    paddingVertical: 45,
  },
  zcoin: {
    // height: 101,
    width: '100%',
    backgroundColor: '#3554D1',
    borderRadius: 10,
    borderColor: '#1E3CA5',
    paddingHorizontal: 28,
    paddingVertical: 20,
  },
  zcointext: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  zcointext2: {
    flexDirection: 'row',
    marginTop: 10,
  },
  textin: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  textin2: {
    fontSize: 24,
    color: '#FFFFFF',
    marginLeft: 20,
  },
  textin3: {
    fontSize: 16,
    color: '#44E79F',
  },
  textin4: {
    fontSize: 16,
    color: '#44E79F',
    marginLeft: 15,
  },
  simkartus: {
    marginTop: 30,
  },
  simkartutext: {
    color: '#3554D1',
    fontSize: 24,
  },
  sims: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  sims3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  sims2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  spisok: {
    marginTop: 10,
  },
  spisoktext: {
    color: '#96A0B5',
    fontSize: 14,
  },
  littlecontainer: {
    height: 100,
    width: 100,
    backgroundColor: '#F2F5F8',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: '#121F3E',
    fontSize: 12,
  },
});
