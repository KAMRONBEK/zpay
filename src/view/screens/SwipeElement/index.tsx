import React, {Component} from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

class SwipeElement extends Component {
  renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 10],
    });
    return (
      // <TouchableOpacity>
      <RectButton style={styles.leftAction} onPress={this.close}>
        {/* <TouchableOpacity
          onPress={() => {
            DeleteContact(i);
          }}> */}
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{translateX: trans}],
            },
          ]}>
          Delete
        </Animated.Text>
        {/* </TouchableOpacity> */}
      </RectButton>
      // </TouchableOpacity>
    );
  };
  render() {
    return (
      <View>
        <Swipeable renderLeftActions={this.renderLeftActions}>
          <View style={styles.container3}>
            <View style={styles.row2}>
              <Text style={styles.headtext}>Начислен Бонус</Text>
              <Image source={require('../../assets/images/orange.png')} />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingVertical: 5,
                paddingHorizontal: 15,
                // backgroundColor: 'red',
              }}>
              <Image
                source={require('../../assets/images/ZCoinBlueIcon.png')}
                style={{height: 36, width: 36}}
              />
              <View style={{marginHorizontal: 25}}>
                <Text style={styles.notificationText}>
                  Hurmatli RAXMANOV SHAXBOZ RASULDJON O`G`LI! Sizning 191400
                  so'mlik to'lovingiz muvaffaqiyatli o'tkazildi. Shartnoma
                  bo’yicha qolgan qarzdorlik...
                </Text>
              </View>
            </View>
            <View style={styles.data}>
              <Text style={styles.datatext}>03.17.2022, 14:04</Text>
            </View>
          </View>
        </Swipeable>
        <Swipeable renderLeftActions={this.renderLeftActions}>
          <View style={styles.container5}>
            <View style={styles.row2}>
              <Text style={styles.headtext}>Списание</Text>
              <Image source={require('../../assets/images/orange.png')} />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingVertical: 5,
                paddingHorizontal: 15,
                // backgroundColor: 'red',
              }}>
              <Image
                source={require('../../assets/images/ZCoinBlueIcon.png')}
                style={{height: 36, width: 36}}
              />
              <View style={{marginHorizontal: 25}}>
                <Text style={styles.notificationText}>
                  Hurmatli RAXMANOV SHAXBOZ RASULDJON O`G`LI! Sizning 191400
                  so'mlik to'lovingiz muvaffaqiyatli o'tkazildi. Shartnoma
                  bo’yicha qolgan qarzdorlik...
                </Text>
              </View>
            </View>
            <View style={styles.data}>
              <Text style={styles.datatext}>03.17.2022, 14:04</Text>
            </View>
          </View>
        </Swipeable>
      </View>
    );
  }
}

export default SwipeElement;

const styles = StyleSheet.create({
  leftAction: {
    // backgroundColor: 'red',
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    color: 'black',
    fontSize: 22,
    textAlign: 'center',
  },
  container3: {
    // height: 126,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    marginTop: 20,
    borderLeftWidth: 6,
    borderLeftColor: '#F3F2F4',
    paddingHorizontal: 10,
    paddingVertical: 13,
    borderWidth: 0.2,
    borderColor: '#878B9A',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container5: {
    // height: 126,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    marginTop: 20,
    borderLeftWidth: 6,
    borderLeftColor: '#32B179',
    borderWidth: 0.2,
    borderColor: '#878B9A',
    paddingHorizontal: 10,
    paddingVertical: 13,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container4: {
    // height: 126,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    marginTop: 20,
    borderLeftWidth: 6,
    borderLeftColor: '#32B179',
    borderWidth: 0.2,
    borderColor: '#878B9A',
    paddingHorizontal: 14,
    paddingVertical: 13,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  back: {
    borderRadius: 10,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 0.9,
    borderColor: '#EBF0FA',
    marginTop: 52,
    // position: 'absolute',
  },
  back1: {
    borderRadius: 10,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 52,
  },
  bonus: {
    marginTop: 62,
  },
  headback: {},
  head2: {
    flexDirection: 'row',
    // alignItems: 'center',
    height: 109,
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    borderWidth: 0.3,
    borderColor: '#878B9A',
  },
  text: {
    fontSize: 18,
    color: '#12154C',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  rowtext: {
    fontSize: 14,
    color: '#878B9A',
  },
  flex: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-between',
  },
  data: {
    marginTop: 10,
    marginLeft: 60,
    // justifyContent: 'flex-end',
  },
  data1: {
    marginTop: 8,
    marginLeft: 55,
  },
  datatext: {
    fontSize: 12,
    color: '#878B9A',
  },
  headtext: {
    fontSize: 16,
    color: '#12154C',
    // paddingVertical: 5,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text2: {
    marginLeft: 10,
    paddingHorizontal: 30,
  },
  notificationText: {
    color: '#12154C',
    fontSize: 12,
    // marginHorizontal: 20,
  },
});
