import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const styles = StyleSheet.create({
  root: {paddingHorizontal: 60},
  codeFieldRoot: {marginVertical: 20},
  cell: {
    width: 46,
    height: 46,
    borderRadius: 10,
    lineHeight: 46,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#00000030',
    textAlign: 'center',
    color: '#121F3E',
  },
  focusCell: {
    borderColor: '#3554D1',
    backgroundColor: '#F8FAFB',
  },
});

const CELL_COUNT = 4;

const VerifiyInput = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

export default VerifiyInput;
