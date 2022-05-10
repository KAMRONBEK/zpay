import React, {memo, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, Alert} from 'react-native';

import TouchID from 'react-native-touch-id';
import * as keychain from 'react-native-keychain';
import {FaceidIcon} from '../../assets/icons/icon';

function DemoNativeAuth() {
  const [usename, setUsername] = useState();
  const [password, setPassword] = useState();

  const login = () => {
    (async () => {
      try {
        let message;
        const type = await TouchID.isSupported();

        const credentials = await keychain.getGenericPassword();
        const {username: storedUsername, password: storedPassword} =
          credentials;

        switch (type) {
          case 'TouchID':
            message = 'Login with touch id';
            break;

          case 'FaceID':
            message = 'Login with face id';
            break;
        }

        if (type) {
          //   TouchID.authenticate(message);

          // authenticated
          if (storedPassword && storedUsername) {
            Alert.alert('Login in', `${storedPassword} ${storedUsername}`);
          } else {
            keychain.setGenericPassword(username, password);
          }
        }
      } catch (e) {
        /* handle error */
        e;
      }
    })();
  };

  return (
    <View style={{flex: 1, padding: 40}}>
      <TouchableOpacity onPress={login}>
        <FaceidIcon />
      </TouchableOpacity>
    </View>
  );
}

export default memo(DemoNativeAuth);
