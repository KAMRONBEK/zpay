import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  Arava,
  Briefcase,
  Cartholder,
  Circleplus,
  Home,
  Profil,
} from '../../assets/icons/icon';

const MycardScreen = () => {
  let {navigate} = useNavigation();
  const AddMyCard = () => {
    navigate('addmycard');
  };

  return (
    <View style={styles.container}>
      <View style={styles.kartu}>
        <Text style={styles.headtext}>Мои карты</Text>
      </View>
      <View style={styles.container1}>
        <View style={styles.headimage}>
          <Image
            source={require('../../assets/images/MyCardImg.png')}
            style={{height: 157, width: 169}}
          />
        </View>
        <View>
          <View style={styles.center}>
            <Text style={styles.centertext}>Пожалуйста </Text>
            <Text style={styles.centertext}>добавьте карту</Text>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.bottomtext}>Нет доступных карт</Text>
          </View>
          {/* <View style={styles.fone}> */}
          <View style={styles.headimage1}>
            <View style={styles.inbottom}>
              <View style={styles.inhead}>
                <Text style={styles.inheadtext}>Заказать карту ZPAY</Text>
              </View>
              <View style={styles.text}>
                <Text style={styles.inheadlittle}>
                  Совершайте новые покупки
                </Text>
                <Text style={styles.inheadlittle}>
                  у наших партнеров и получите
                </Text>
                <Text style={styles.inheadlittle}> Zcoin на ваш баланс</Text>
              </View>
            </View>
            <Image
              source={require('../../assets/images/CartIcon.png')}
              style={{height: 61, width: 61}}
            />
          </View>
          {/* </View> */}
          <TouchableOpacity onPress={AddMyCard}>
            <View style={styles.circle}>
              <Circleplus />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MycardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container1: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 24,
    paddingVertical: 13,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  kartu: {
    height: 109,
    width: '100%',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EAE9EE',
  },
  headtext: {
    color: '#3554D1',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 52,
  },
  headimage: {
    alignItems: 'center',
    marginTop: 50,
  },
  headimage1: {
    backgroundColor: '#3554D1',
    width: '100%',
    paddingVertical: 31,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 21,
    marginVertical: 23,
  },
  fone: {
    // marginVertical: 23,
    marginTop: 23,
    paddingVertical: 31,
    backgroundColor: 'red',
  },
  center: {
    alignItems: 'center',
    marginTop: -50,
  },
  centertext: {
    color: '#121F3E',
    fontSize: 28,
    fontWeight: '600',
  },
  bottom: {
    alignItems: 'center',
    marginTop: 15,
  },
  bottomtext: {
    color: '#96A0B5',
    fontSize: 16,
    fontWeight: '400',
  },
  circle: {
    alignItems: 'center',
    marginVertical: 17,
  },
  inhead: {
    // marginHorizontal:10
  },
  inheadtext: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  inheadlittle: {
    color: '#FFF',
    fontSize: 12,
  },

  inbottom: {
    // marginHorizontal: 2,
  },

  text: {
    marginVertical: 10,
  },
});
