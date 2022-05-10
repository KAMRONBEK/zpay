import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  Briefcase,
  Cartholder,
  Circleplus,
  Home,
  Profil,
} from '../../assets/icons/icon';

const AddCart = () => {
  let navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.headtext}>Мои карты</Text>
      </View>
      <View style={styles.headimage}>
        <Image source={require('../../assets/images/simple.png')} />
      </View>
      <View style={styles.center}>
        <Text style={styles.centertext}>Пожалуйста</Text>
        <Text style={styles.centertext}>добавьте карту</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.bottomtext}>Нет доступных карт</Text>
      </View>
      <View style={styles.headimage1}>
        {/* <Image source={require('../../assets/images/koshlok.png')} /> */}
      </View>
      <View style={styles.circle}>
        <Circleplus />
      </View>
     
    </View>
  );
};

export default AddCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  head: {
    alignItems: 'center',
    marginTop: 50,
  },
  headtext: {
    color: 'black',
    fontSize: 18,
  },
  headimage: {
    alignItems: 'center',
    marginTop: 100,
  },
  headimage1: {
    alignItems: 'center',
    marginTop: 20,
  },
  center: {
    alignItems: 'center',
    marginTop: 30,
  },
  centertext: {
    color: '#3554D1',
    fontSize: 28,
  },
  bottom: {
    alignItems: 'center',
    marginTop: 20,
  },
  bottomtext: {
    color: '#878B9A',
    fontSize: 16,
  },
  circle: {
    alignItems: 'center',
    marginTop: 40,
  },
});
