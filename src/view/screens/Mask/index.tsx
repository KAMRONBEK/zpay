import React from 'react';
import {Text, View} from 'react-native';
import MaskInput from 'react-native-mask-input';

const creditCardMask = [
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
];

const Mask = () => {
  const [creditCard, setCreditCard] = React.useState('');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFF',
      }}>
      <MaskInput
        value={creditCard}
        keyboardType="number-pad"
        mask={creditCardMask}
        showObfuscatedValue
        obfuscationCharacter="#"
        style={{color: '#12154C', marginTop: 1, width: '100%'}}
        onChangeText={(masked, unmasked, obfuscated) => {
          setCreditCard(unmasked);
          console.log(masked);
          console.log(unmasked);
          console.log(obfuscated);
        }}
      />
    </View>
  );
};

export default Mask;
