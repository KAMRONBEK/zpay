import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Back} from '../../assets/icons/icon';
import SwipeElement from '../SwipeElement';

const Notifications = () => {
  let navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.head2}>
        <TouchableOpacity onPress={navigation.goBack}>
          <View style={styles.back}>
            <Back />
          </View>
        </TouchableOpacity>
        <View style={styles.bonus}>
          <Text style={styles.text}>Уведомления</Text>
        </View>
        <View style={styles.back1}></View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#FFF', flex: 1}}>
        <View style={styles.container2}>
          <View style={styles.row}>
            <Text style={styles.rowtext}>Показать все</Text>
            <Text style={styles.rowtext}>Отметить как прочитано</Text>
          </View>
        </View>
        <SwipeElement />
      </ScrollView>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container2: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 6.5,
  },
  container3: {
    // height: 126,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    marginTop: 20,
    borderLeftWidth: 6,
    borderLeftColor: '#F3F2F4',
    paddingHorizontal: 10,
    paddingVertical: 13,
    borderWidth: 0.2,
    borderColor: '#878B9A',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container5: {
    // height: 126,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    marginTop: 20,
    borderLeftWidth: 6,
    borderLeftColor: '#32B179',
    borderWidth: 0.2,
    borderColor: '#878B9A',
    paddingHorizontal: 10,
    paddingVertical: 13,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container4: {
    // height: 126,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    marginTop: 20,
    borderLeftWidth: 6,
    borderLeftColor: '#32B179',
    borderWidth: 0.2,
    borderColor: '#878B9A',
    paddingHorizontal: 14,
    paddingVertical: 13,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  back: {
    borderRadius: 10,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 0.9,
    borderColor: '#EBF0FA',
    marginTop: 52,
    // position: 'absolute',
  },
  back1: {
    borderRadius: 10,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 52,
  },
  bonus: {
    marginTop: 62,
  },
  headback: {},
  head2: {
    flexDirection: 'row',
    // alignItems: 'center',
    height: 109,
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    borderWidth: 0.3,
    borderColor: '#878B9A',
  },
  text: {
    fontSize: 18,
    color: '#12154C',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  rowtext: {
    fontSize: 14,
    color: '#878B9A',
  },
  flex: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-between',
  },
  data: {
    marginTop: 10,
    marginLeft: 60,
    // justifyContent: 'flex-end',
  },
  data1: {
    marginTop: 8,
    marginLeft: 55,
  },
  datatext: {
    fontSize: 12,
    color: '#878B9A',
  },
  headtext: {
    fontSize: 16,
    color: '#12154C',
    // paddingVertical: 5,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text2: {
    marginLeft: 10,
    paddingHorizontal: 30,
  },
  notificationText: {
    color: '#12154C',
    fontSize: 12,
    // marginHorizontal: 20,
  },
});
