import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import TouchID from 'react-native-touch-id';
import {FingerPrint} from '../../assets/icons/icon';

export default function TouchId() {
  let {navigate} = useNavigation();
  const [supported, setSupported] = useState(null);
  const [nome, setNome] = useState('');

  useEffect(() => {
    TouchID.isSupported()
      .then(sucesso => {
        setSupported(true);
      })
      .catch(error => {
        console.log('ERROR tOUCH: ' + error);
        alert('Touch ID not supported/again');
      });
  }, []);

  function handleLogin() {
    const configs = {
      title: 'Touch ID Required',
      color: '#FF0000',
      sensorErrorDescription: 'Touch ID error',
    };
    TouchID.authenticate('', configs)
      .then(success => {
        console.log('success:)');
        // setNome('Touch ID');
        navigate('DrawerNavigator');
      })
      .catch(error => {
        console.log('FALSE AUTIFICATSIA' + error);
      });
  }
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={handleLogin}>
        <View>
          <FingerPrint />
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  touchid: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  enterar: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  btn: {},
});
