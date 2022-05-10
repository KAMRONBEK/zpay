import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from 'react-native-paper';

const ActiveButton = () => {
  let navigation = useNavigation();
  // const useStyles = ({
  //   variant,
  //   disabled,
  //   pressed,
  // }: Pick<ActiveButton, 'disabled' | 'variant'> & { pressed: boolean }) => {
  //   return makeStyles(theme => {
  //     let backgroundColor;
  //     let color;

  //     if (variant === 'primary') {
  //       backgroundColor = theme.colors.primary;
  //       color = theme.colors.white;
  //       if (pressed) {
  //         backgroundColor = theme.colors.gray6;
  //       }
  //       if (disabled) {
  //         backgroundColor = '#F8F8F8';
  //         color = theme.colors.gray3;
  //       }
  //     }

  //     if (variant === 'white') {
  //       backgroundColor = theme.colors.white;
  //       color = theme.colors.primary;
  //       if (pressed) {
  //         backgroundColor = theme.colors.gray1;
  //       }
  //       if (disabled) {
  //         backgroundColor = theme.colors.black1;
  //         color = theme.colors.gray3;
  //       }
  //     }
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TextInput />
      </View>
      <View style={styles.button}>
        <TextInput />
      </View>
      <Button
        style={{
          backgroundColor: 'red',
          paddingVertical: 7,
          paddingHorizontal: 10,
          marginTop: 50,
          borderRadius: 10,
        }}
        onPress={navigation.goBack}>
        <Text>button</Text>
      </Button>
    </View>
  );
};

export default ActiveButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingVertical: 100,
    paddingHorizontal: 24,
  },
  button: {
    backgroundColor: 'black',
    // paddingVertical: 3,
    paddingHorizontal: 10,
    marginTop: 50,
    borderRadius: 10,
  },
});
