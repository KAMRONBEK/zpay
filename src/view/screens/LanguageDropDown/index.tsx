import {hideVisually} from 'polished';
import React from 'react';
import {View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const language = ['RU', 'UZ'];

const LanguageDropDown = () => {
  return (
    <View style={{}}>
      <View style={{}}>
        <SelectDropdown
          data={language}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonStyle={{
            // position: 'absolute',
            backgroundColor: '#ffff',
            borderWidth: 1,
            borderColor: '#EAE9EE',
            borderRadius: 10,
            height: 41,
            width: 56,
            right: 0,
          }}
          dropdownStyle={{
            backgroundColor: '#ffff',
            borderWidth: 1,
            borderColor: '#EAE9EE',
            borderRadius: 10,
            width: 58,
          }}
          //   dropdownOverlayColor={'inherit'}
          rowTextStyle={{color: '#33409E', fontWeight: '500'}}
          rowStyle={{height: 45, borderRadius: 10}}
          buttonTextStyle={{color: '#33409E', fontWeight: '500', fontSize: 16}}
          defaultButtonText={'RU'}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
      </View>
    </View>
  );
};

export default LanguageDropDown;
