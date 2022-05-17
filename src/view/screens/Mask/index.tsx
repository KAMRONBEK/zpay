import React from 'react';
import {View} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';

export function Mask() {
  const [value, setValue] = React.useState('');

  return (
    <View
      style={{
        backgroundColor: '#FFF',
        flex: 1,
        paddingVertical: 50,
        paddingHorizontal: 20,
      }}>
      {/* <TextInputMask
        onChangeText={(formatted, extracted) => {
          console.log(formatted); // +1 (123) 456-78-90
          console.log(extracted); // 1234567890
        }}
        mask={'+1 ([000]) [000] [00] [00]'}
      /> */}
    </View>
  );
}
