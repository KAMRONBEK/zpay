import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../view/constants/Homescreen';
import AgreementScreen from '../view/constants/Agreementscreen';
import MycardScreen from '../view/constants/Mycardscreen';
import ProfileScreen from '../view/constants/Profilescreen';
import {Briefcase, Cartholder, Home, Profil} from '../view/assets/icons/icon';
import Intro from '../view/screens/Intro';
import Register from '../view/screens/Register';
import Verification from '../view/screens/Verification';
import Id from '../view/screens/Id';
import Scaner from '../view/screens/Scaner';
import ScanerFace from '../view/screens/ScanerFace';
import Scanerojidaniya from '../view/screens/Scanerojidaniya';
import Scanerfinish from '../view/screens/Scanerfinish';
import Id3 from '../view/screens/Id3';
import Entrance from '../view/screens/Entrance';
import VerificationNumber from '../view/screens/VerificationNumber';
import AddCart from '../view/screens/AddCart';
import AddMyCard from '../view/screens/AddMyCard';
import AddCardFinish from '../view/screens/AddCardFinish';
import Bonuses1 from '../view/screens/Bonuses1';
import Bonuses2 from '../view/screens/Bonuses2';
import Bonuses3 from '../view/screens/Bonuses3';
import TabNavigation from '../navigationtap';
import DrawerNavigator from '../view/constants/Drawer';
import CustomDrawer from '../view/constants/CustomDrawer';
import {Routes} from '../routes/routes';
import Question from '../view/screens/Questions';
import PartnerStore from '../view/screens/PartnerStore';
import AboutProduct from '../view/screens/AboutProduct';
import ZCoin from '../view/screens/ZCoin';
import Pincode from '../view/screens/SetPin';
import SetPin from '../view/screens/SetPin';
import SetPin2 from '../view/screens/SetPin2';
import Notifications from '../view/screens/Notifications';
import Enter from '../view/screens/Enter';
import Contractss from '../view/screens/Contractss';
import MoneyPayment from '../view/screens/MoneyPayment';
import TouchId from '../view/screens/TouchId';
import Button from '../view/components/card';
import Memo from '../view/screens/FaceId';
import FlatlistTitle from '../view/screens/FlatList';
import FaceDetection from '../view/screens/FaceDetection';
import ProductItem from '../view/screens/ProductItem';
import App from '../view/screens/ImagePickerr';
import Appp from '../view/screens/Appp';
import VerifiyInput from '../view/screens/TextInput';
import ActiveButton from '../view/screens/ActivColor';
import Search from '../view/screens/Search';
import TorchLight from '../view/screens/BottomSheet';
import {StoreCarousel} from '../view/screens/StoreCarousel';
import {InstructionCarousel} from '../view/screens/InstructionCarousel';
import {RegisterCarousel} from '../view/screens/RegisterCarousel';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={Enter} name={'enter'} />
        <Stack.Screen component={DrawerNavigator} name={'DrawerNavigator'} />
        <Stack.Screen component={TabNavigation} name="TabNavigation" />
        <Stack.Screen component={StoreCarousel} name="storecarousel" />
        <Stack.Screen component={RegisterCarousel} name="registercarousel" />
        <Stack.Screen
          component={InstructionCarousel}
          name="instructioncarousel"
        />
        <Stack.Screen component={TorchLight} name="torch" />
        {/* <Stack.Screen component={Search} name="search" /> */}
        <Stack.Screen component={VerifiyInput} name="verifiyinput" />
        {/* <Stack.Screen component={ActiveButton} name="instruction3" /> */}
        <Stack.Screen component={Appp} name="appp" />
        <Stack.Screen component={SetPin} name="setpin" />
        <Stack.Screen component={SetPin2} name="setpin2" />
        <Stack.Screen component={Intro} name="intro" />
        <Stack.Screen component={FaceDetection} name="facedetection" />
        <Stack.Screen component={Contractss} name="contractss" />
        <Stack.Screen component={MoneyPayment} name="moneypayment" />
        <Stack.Screen component={Question} name="question" />
        <Stack.Screen component={Notifications} name="notifications" />
        <Stack.Screen component={TouchId} name="touchid" />
        <Stack.Screen component={Register} name="register" />
        <Stack.Screen component={PartnerStore} name="partnerstore" />
        <Stack.Screen component={AboutProduct} name="aboutproduct" />
        <Stack.Screen component={Verification} name="verification" />
        <Stack.Screen component={Id} name="id" />
        <Stack.Screen component={Id3} name="id3" />
        <Stack.Screen component={Scaner} name="scaner" />
        <Stack.Screen component={ScanerFace} name="scanerface" />
        <Stack.Screen component={Scanerojidaniya} name="scanerojidaniya" />
        <Stack.Screen component={Scanerfinish} name="scanerfinish" />
        <Stack.Screen component={Entrance} name="entrance" />
        <Stack.Screen component={ZCoin} name="zcoin" />
        <Stack.Screen component={App} name="app" />
        <Stack.Screen
          component={VerificationNumber}
          name="verificationnumber"
        />
        <Stack.Screen component={AddMyCard} name="addmycard" />
        <Stack.Screen component={AddCardFinish} name="addcardfinish" />
        <Stack.Screen component={Bonuses1} name="bonuses1" />
        <Stack.Screen component={Bonuses2} name="bonuses2" />
        <Stack.Screen component={Bonuses3} name="bonuses3" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
