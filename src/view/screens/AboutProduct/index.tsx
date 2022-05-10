import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Back, EnterIcon} from '../../assets/icons/icon';

const AboutProduct = () => {
  let navigation = useNavigation();
  const ZCoin = () => {
    navigation.navigate('zcoin');
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.head2}>
          <View style={styles.headback}>
            <TouchableOpacity onPress={navigation.goBack}>
              <View style={styles.back}>
                <Back />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container3}>
          <View>
            <View>
              <Image source={require('../../assets/images/jewrly.png')} />
            </View>
            <View style={styles.dolcevita}>
              <Text style={styles.dolcevitatext}>Серьги Etude из</Text>
              <Text style={styles.dolcevitatext}>золочёного серебра</Text>
            </View>
            <View style={styles.narx}>
              <Text style={styles.narxtext}>136 000 сум/мес</Text>
            </View>
            <TouchableOpacity onPress={AboutProduct}></TouchableOpacity>
          </View>
          <View style={{marginTop: -10}}>
            <Image source={require('../../assets/images/jewerlies.png')} />
          </View>
        </View>
        <View style={styles.about}>
          <Text style={styles.abouttext}>
            ETUDE.Прикоснись к прекрасному. Серьги из золочёного серебра с
            фианитами. Общие сведения: Вставка-фианит 38 шт. Тип
            замка:Английский; Примерный вес: 9,05 гр. Покрытие:
            Золочение,Родирование,Чернение. Проба 925.
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={ZCoin}>
        <View style={styles.button}>
          <Text style={styles.buttontext}>Перейки к партнеру</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AboutProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 24,
    paddingVertical: 51,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  bonus: {
    marginLeft: 70,
  },
  back: {
    borderWidth: 1,
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
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
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
    borderWidth: 1,
    borderColor: '#E5E5E5',
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

  about: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  abouttext: {
    color: '#878B9A',
    fontSize: 12,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#427CF8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  buttontext: {
    fontSize: 14,
    color: '#FFFFFF',
  },
});
