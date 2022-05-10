import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import {ZpayIcon} from '../../assets/icons/icon';
import Instruction1 from '../Instruction1';

const Enter = () => {
  let navigation = useNavigation();
  const Instruction1 = () => {
    navigation.navigate('instruction1');
  };

  // const arr = ['first', 'second', 'third'];
  // const [animationText, setAnimationText] = useState(arr[0]);

  // for (var i = 1; i <= 10; i++) {
  //   (function (index) {
  //     setTimeout(() => {
  //       setAnimationText(arr[index - 1]);
  //     }, i * 2000);
  //   })(i);
  // }
  const names = ['Покупай', 'Инвестируй', 'Зарабатывай'];

  const [newName, setnewName] = useState('');

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 1000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <View>
          <Image
            source={require('../../assets/images/zpay.png')}
            style={styles.imgpng}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            color: '#FFF',
            fontSize: 16,
            fontWeight: '600',
          }}>
          Технология вдохновленная прозрачностью
        </Text>
      </View>
      <View style={[styles.container1, styles.horizontal]}>
        <ActivityIndicator size="large" color="#94A1F0" />
      </View>
      <TouchableOpacity onPress={Instruction1}>
        <View style={styles.headtext}>
          <Text style={styles.text}>{newName}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Enter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3554D1',
    paddingHorizontal: 50,
  },
  img: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 190,
  },
  imgpng: {
    height: 58.15,
    width: 143,
  },
  pay: {
    marginLeft: 14.54,
  },

  headtext: {
    marginTop: 179,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  container1: {
    marginTop: 198.8,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
