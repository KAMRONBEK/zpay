import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import 'react-native-gesture-handler';
import CustomDrawer from './src/view/constants/CustomDrawer';

const App = () => {
  return (
    <>
      <AppNavigator />
      <StatusBar translucent backgroundColor={'transparent'} />
    </>
  );
  // return <CustomDrawer/>
};

export default App;
