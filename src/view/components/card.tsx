import React from 'react';
import {ImageProps} from 'react-native';
import {
  Image,
  StyleSheet,
  TextStyle,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

export interface ButtonProps {
  onPress?: () => void;
  containerStyle?: any;
}

const Button = ({onPress, containerStyle}: ButtonProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.karta}>
        <View style={styles.kartu}>
          <View style={styles.text}>
            <Text style={styles.headtext}>Рабочая</Text>
          </View>
          <View style={styles.number}>
            <Text style={styles.numbertext}>8600 9877 5423 2100</Text>
          </View>
          <View style={styles.card2}>
            <View style={styles.card}>
              <Text style={styles.cardtext2}>Имя владельца карты</Text>
            </View>
            <View style={styles.card3}>
              <Text style={styles.cardtext2}>Expiry date</Text>
            </View>
          </View>
          <View style={styles.two}>
            <View style={styles.name}>
              <Text style={styles.textname}>Daniel Austin</Text>
            </View>
            <View style={styles.data}>
              <Text style={styles.datatext}>02/30</Text>
            </View>
          </View>
          <View style={styles.ugl2}>
            <Image source={require('../assets/images/ugl2.png')} />
          </View>
          <View style={styles.ugl}>
            <Image source={require('../assets/images/ugl.png')} />
          </View>
          <View style={styles.zpay}>
            <Image source={require('../assets/images/uzcard.png')} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    // height: 69,
    // width: '90%',
    // borderRadius: 10,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    // marginHorizontal: 20,
    // marginVertical: 20,
    // flex: 1,
  },

  kartu: {
    height: 206.19,
    width: 327,
    backgroundColor: '#4A6AB3',
    marginTop: 39,
    borderRadius: 11.71,
    paddingHorizontal: 21.19,
    paddingVertical: 21.15,
  },

  ugl: {
    marginLeft: 184,
    bottom: 0,
    position: 'absolute',
  },
  ugl2: {
    position: 'absolute',
    marginTop: 1,
    marginLeft: 1,
  },
  text: {
    zIndex: 99,
  },
  text2: {
    zIndex: 99,
    marginTop: 27,
  },
  number: {
    zIndex: 99,
    marginTop: 37.4,
  },
  numbertext: {
    fontSize: 19.41,
    color: '#FFF',
  },

  card: {
    marginTop: 27,
  },

  cardtext: {
    fontSize: 6.39,
  },

  textname: {
    fontSize: 10.64,
    color: '#FFF',
  },
  name: {
    marginTop: 6.39,
  },
  data: {
    marginTop: 6.39,
    marginLeft: 80,
  },
  datatext: {
    fontSize: 10.64,
    color: '#FFF',
  },
  two: {
    flexDirection: 'row',
  },
  karta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card3: {
    marginTop: 27,
    marginLeft: 67,
  },

  cardtext2: {
    fontSize: 7.76,
    color: '#FFF',
  },
  card2: {
    flexDirection: 'row',
  },
  headtext: {
    fontSize: 15,
    color: '#FFF',
  },
  zpay: {
    position: 'absolute',
    marginLeft: 250,
    marginTop: 20,
  },
});
