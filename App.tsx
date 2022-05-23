import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import 'react-native-gesture-handler';
import CustomDrawer from './src/view/constants/CustomDrawer';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AppNavigator />
      <StatusBar translucent backgroundColor={'transparent'} />
    </GestureHandlerRootView>
  );
  // return <CustomDrawer/>
};

export default App;
