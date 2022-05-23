import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import {Back} from '../../../assets/icons/icon';

interface Props {
  children: string;
}

export function DemoTitle({children}: Props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigation.goBack}>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 10,
            borderWidth: 1,
            backgroundColor: '#FFF',
            borderColor: '#E5EBF0',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 15,
          }}>
          <Back />
        </View>
      </TouchableOpacity>
      <Text style={styles.text}>{children}</Text>
      <View
        style={{
          height: 40,
          width: 40,
          // borderColor: 'EAEFF3',
          // alignItems: 'center',
          // justifyContent: 'center',
          backgroundColor: '#FFF',
          marginTop: 15,
        }}></View>
    </View>
  );
}

interface Styles {
  container: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    height: 109,
    width: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: '#E5EBF0',
  },
  text: {
    fontSize: 24,
    color: '#12154C',
    marginRight: 15,
    marginTop: 15,
  },
});
