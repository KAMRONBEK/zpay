import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const buttonDimensions = SCREEN_HEIGHT * 0.14; // this is equivalent to 255 from a 393 device width
const buttonBorderWidth = SCREEN_WIDTH * 0.26; // this is equivalent to 2 from a 393 device width

interface ProductItemProps {
  title?: string;
  bgColor?: any;
  url?: any;
  icon?: any;
  style?: any;
}

const ProductItem = ({
  title,
  url,
  bgColor = '#4581FC',
  style,
}: ProductItemProps) => {
  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.url}>
        <Image source={url} style={style} />
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    height: buttonDimensions,
    width: buttonBorderWidth,
    borderRadius: 10,
    marginTop: 27,
    paddingHorizontal: 19,
    alignItems: 'center',
    paddingVertical: 15,
  },
  title: {
    alignItems: 'center',
    fontSize: 10,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  url: {
    marginTop: 7.4,
    alignItems: 'center',
    // marginLeft: 18,
  },
});
