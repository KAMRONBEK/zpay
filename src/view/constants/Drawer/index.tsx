import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

// import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomDrawer from '../CustomDrawer';
import {CheckIcon, CheckIconthree} from '../../assets/icons/icon';
import TabNavigation from '../../../navigationtap';
import Bonuses1 from '../../screens/Bonuses1';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: 'red',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff',
        drawerStyle: {
          // alignItems: 'center',
          // justifyContent: 'center',
          width: 337,
          backgroundColor: '#FFFFFF',
        },
        drawerLabelStyle: {
          fontSize: 18,
          marginLeft: -25,
          fontWeight: '400',
        },
      }}>
      <Drawer.Screen
        component={TabNavigation}
        name="TabNavigation"
        options={
          {
            // drawerIcon: ({color}) => <CheckIcon />,
          }
        }
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
