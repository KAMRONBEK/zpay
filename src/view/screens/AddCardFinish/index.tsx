import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CheckIconthree} from '../../assets/icons/icon';

const AddCardFinish = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.backimg}>
          <Image
            source={require('../../assets/images/AddedCardImg.png')}
            style={{height: 139, width: 202}}
          />
        </View>

        <View style={styles.add}>
          <Text style={styles.addtext}>Карта добавлена</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.text2}>Вы успешно </Text>
          <Text style={styles.text2}>добавили карту </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttontext}>Потвердить</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddCardFinish;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 24,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 78,
  },
  backimg: {
    alignItems: 'center',
    marginTop: 90,
  },

  add: {
    alignItems: 'center',
  },
  addtext: {
    fontSize: 24,
    color: '#12154C',
  },
  text: {
    marginTop: 15,
    alignItems: 'center',
  },
  text2: {
    fontSize: 16,
    color: '#96A0B5',
  },
  button: {
    // height: 50,
    width: '100%',
    borderRadius: 10,
    borderWidth: 0.9,
    backgroundColor: '#427CF8',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 270,
    borderColor: '#427CF8',
    paddingVertical: 15,
  },
  buttontext: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
