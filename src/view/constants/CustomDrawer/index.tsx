import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Switch,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Modal from 'react-native-modal';

import { useNavigation } from '@react-navigation/native';
import {
  CheckIcon,
  CheckIcon3,
  ExitIcon,
  ExitIcons,
  Jingle,
  NauwniIcon,
  NotificationIcon,
  OfertaIcon,
  QuestionIcon,
  SettingsIcon,
  SlujbaIcon,
  SmsIcon,
} from '../../assets/icons/icon';

//@ts-ignore
const CustomDrawer = (props, index) => {
  let navigation = useNavigation();
  const Questions = () => {
    navigation.navigate('question');
  };
  const Notification = () => {
    navigation.navigate('notifications');
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isVisible, setIsVisible] = useState(false);

  const onMyDetails = () => {
    //@ts-ignore
    navigation.navigate(Routes.MY_DETAILS);
  };
  const onLogin = () => {
    //@ts-ignore
    navigation.navigate(Routes.LOGIN);
  };

  const [active, setActive] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.head}>
          <Text style={styles.headtext}>Somanta</Text>
          <Text style={styles.headtext}>Clark</Text>
        </View>
        <View style={styles.verify}>
          <Text style={styles.verifytext}>Верифицирован</Text>
          <View style={styles.checkicon}>
            <CheckIcon3 />
          </View>
        </View>
        <View style={styles.id}>
          <Text style={styles.idnumber}>ID: 233256</Text>
        </View>
        <View style={styles.container2}>
          <View style={styles.incontainer}>
            <TouchableOpacity onPress={() => setActive(true)}>
              <View
                style={[
                  styles.standart,
                  { backgroundColor: active === true ? '#FFF' : '#EAE9EE' },
                ]}>
                <Text style={styles.incontainertext1}>Статус</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActive(false)}>
              <View
                style={[
                  styles.standart,
                  { backgroundColor: active === false ? '#FFF' : '#EAE9EE' },
                ]}>
                <Text style={styles.incontainertext2}>Стандарт</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.draw}>
            <View style={styles.nauwni}>
              {active === false ? <NauwniIcon /> : <SlujbaIcon />}
            </View>
            <View style={styles.drawer}>
              <Text style={styles.drawertext1}>Служба поддержки</Text>
            </View>
          </View>
          <View style={styles.number}>
            <Text style={styles.number1}>+99871 207 71 10</Text>
          </View>
        </View>
        <TouchableOpacity onPress={Questions}>
          <View style={styles.bottom}>
            <View style={styles.draw}>
              <View style={styles.nauwni}>
                {active === false ? <SmsIcon /> : <QuestionIcon />}
              </View>
              <View style={styles.drawer}>
                <Text style={styles.drawertext1}>Часто задаваемые вопросы</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.bottom}>
          <View style={styles.draw}>
            <View style={styles.nauwni}>
              <OfertaIcon />
            </View>
            <View style={styles.drawer}>
              <Text style={styles.drawertext1}>Публичная оферта</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={Notification}>
          <View style={styles.bottom}>
            <View style={styles.draw}>
              <View style={styles.nauwni}>
                {active === false ? <Jingle /> : <NotificationIcon />}
              </View>
              <View style={styles.drawer}>
                <Text style={styles.drawertext1}>Уведомления</Text>
              </View>
              {/* <View style={styles.switch}>
                <Switch
                  trackColor={{false: '#EAE9EE', true: '#767577'}}
                  thumbColor={isEnabled ? '#3554D1' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View> */}
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.bottom}>
          <View style={styles.draw}>
            <View style={styles.nauwni}>
              <SettingsIcon />
            </View>
            <View style={styles.drawer}>
              <Text style={styles.drawertext1}>Настройки</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bottom1}>
        <View style={styles.draw1}>
          <TouchableOpacity onPress={navigation.goBack}>
            <View style={styles.drawer1}>
              {active === false ? <ExitIcon /> : <ExitIcons />}
              <View style={styles.text}>
                <Text style={styles.drawertext1}>Выйти</Text>
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.drawertext2}>Версия 1.0.1</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 54,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  head: {
    marginTop: 5,
  },
  headtext: {
    color: '#12154C',
    fontSize: 32,
  },
  verify: {
    flexDirection: 'row',
    marginTop: 5,
  },
  verifytext: {
    color: '#878B9A',
    fontSize: 16,
  },
  checkicon: {
    marginLeft: 11,
  },
  id: {
    marginTop: 5,
  },
  idnumber: {
    color: '#32B179',
    fontSize: 16,
  },
  container2: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#EAE9EE',
    borderRadius: 15,
    backgroundColor: '#EAE9EE',
    marginTop: 26,
    paddingHorizontal: 30,
    // alignItems:'center',
    justifyContent: 'center',
  },
  incontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  incontainertext1: {
    color: '#12154C',
    fontSize: 16,
    fontWeight: '600',
  },
  incontainertext2: {
    color: '#32B179',
    fontSize: 12,
    fontWeight: '600',
  },
  standart: {
    height: 33,
    width: 102,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nauwni: {
    height: 36,
    width: 36,
    borderRadius: 10,
    backgroundColor: '#EAE9EE',
    marginVertical: 13,

    alignItems: 'center',
    justifyContent: 'center',
  },
  draw: {
    flexDirection: 'row',
    // marginTop: 31,
    alignItems: 'center',
  },
  drawer: {
    marginLeft: 12,
  },
  drawertext: {
    color: '#121F3E',
    fontSize: 16,
    fontWeight: 'bold',
  },
  number: {
    marginLeft: 56,
    marginTop: -10,
    marginVertical: 10,
  },
  number1: {
    color: '#121F3E',
    fontSize: 16,
  },
  bottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#EAEFF3',
    marginTop: 12,
  },
  draw1: {
    flexDirection: 'row',
    // marginTop: 31,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  drawer1: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  drawertext1: {
    color: '#121F3E',
    fontSize: 16,
    fontWeight: '600',
  },
  bottom1: {},
  drawertext2: {
    color: '#878B9A',
    fontSize: 14,
  },
  text: {
    marginLeft: 14,
  },
  switch: {
    marginLeft: 67,
  },
});
