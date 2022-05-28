import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../view/constants/Homescreen';
import AgreementScreen from '../view/constants/Agreementscreen';
import MycardScreen from '../view/constants/Mycardscreen';
import ProfileScreen from '../view/constants/Profilescreen';
import { strings } from '../view/locales/strings';

const windowHeight = Dimensions.get('window').height;

// const tabBarHeight = SCREEN_HEIGHT * 0.08;

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          bottom: 0,
          paddingVertical: 10

        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'red',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {
                <Image
                  source={require('../view/assets/images/HomeNavigation.png')}
                  style={{
                    height: 24,
                    width: 24,
                    tintColor: focused ? '#3554D1' : '#717394',
                  }}
                />
              }
              <Text
                style={{
                  color: focused ? '#3554D1' : '#717394',
                  fontSize: 12,
                  top: 2,
                }}>
                {strings.Главная}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Agreement"
        component={AgreementScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../view/assets/images/BriefcaseNavigation.png')}
                style={{
                  height: 26,
                  width: 28,
                  tintColor: focused ? '#3554D1' : '#717394',
                }}
              />
              <Text
                style={{ color: focused ? '#3554D1' : '#717394', fontSize: 12 }}>
                {strings.Договора}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Mycard"
        component={MycardScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../view/assets/images/CardholderNavigation.png')}
                style={{
                  height: 28,
                  width: 28,
                  tintColor: focused ? '#3554D1' : '#717394',
                }}
              />
              <Text
                style={{ color: focused ? '#3554D1' : '#717394', fontSize: 12 }}>
                Мои карты
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../view/assets/images/ProfileNavigation.png')}
                style={{
                  height: 26,
                  width: 24,
                  tintColor: focused ? '#3554D1' : '#717394',
                }}
              />

              <Text
                style={{ color: focused ? '#3554D1' : '#717394', fontSize: 12 }}>
                {strings.Профиль}
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  text: {
    color: 'grey',
  },
});
