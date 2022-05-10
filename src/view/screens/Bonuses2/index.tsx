import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  Back,
  Back2,
  Exit,
  SimIcon1,
  SimIcon2,
  SimIcon3,
  // SimIcon4,
  SimIcon5,
  SimIcon6,
  SimIcon7,
  Simkartu,
} from '../../assets/icons/icon';

const Bonuses2 = () => {
  let navigation = useNavigation();

  const image = require('../../assets/images/SimCardIcon1.png');

  const Bonuses3 = () => {
    navigation.navigate('bonuses3', image);
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.head2}>
          <View style={styles.headback}>
            <TouchableOpacity onPress={navigation.goBack}>
              <View style={styles.back}>
                <Back />
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.text}>Мобильная связь</Text>
          </View>
          <View style={styles.back}>
            <Simkartu />
          </View>
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.zcoin}>
          <View style={styles.zcointext}>
            <Text style={styles.textin}>560 000</Text>
            <Text style={styles.textin2}>ZCoin</Text>
          </View>
          <View style={styles.zcointext2}>
            <Text style={styles.textin3}>накопленые</Text>
            <Text style={styles.textin4}>бонусы</Text>
          </View>
        </View>
        <View style={styles.simkartus}>
          <Text style={styles.simkartutext}>Выберите компанию</Text>
        </View>
        <View style={styles.sims}>
          <TouchableOpacity onPress={Bonuses3}>
            <Image
              source={require('../../assets/images/SimCardIcon1.png')}
              style={{height: 71, width: 99}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={Bonuses3}>
            <Image
              source={require('../../assets/images/SimCardIcon2.png')}
              style={{height: 71, width: 99}}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={Bonuses3}>
            <SimIcon3 />
          </TouchableOpacity>
        </View>
        <View style={styles.sims2}>
          <TouchableOpacity onPress={Bonuses3}>
            <SimIcon6 />
          </TouchableOpacity>

          <TouchableOpacity onPress={Bonuses3}>
            <SimIcon5 />
          </TouchableOpacity>

          <TouchableOpacity onPress={Bonuses3}>
            <SimIcon7 />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Bonuses2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  head: {
    height: 109,
    width: '100%',
    backgroundColor: '#33409E',
    paddingHorizontal: 24,
    paddingVertical: 51,
  },
  back: {
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#EBF0FA',
  },
  headback: {
    justifyContent: 'center',
  },
  head2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop: 52,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  container2: {
    paddingHorizontal: 24,
    paddingVertical: 45,
  },
  zcoin: {
    // height: 101,
    width: '100%',
    backgroundColor: '#3554D1',
    borderRadius: 10,
    borderColor: '#1E3CA5',
    paddingHorizontal: 28,
    paddingVertical: 20,
  },
  zcointext: {
    flexDirection: 'row',
  },
  zcointext2: {
    flexDirection: 'row',
    marginTop: 10,
  },
  textin: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  textin2: {
    fontSize: 24,
    color: '#FFFFFF',
    marginLeft: 20,
  },
  textin3: {
    fontSize: 16,
    color: '#44E79F',
  },
  textin4: {
    fontSize: 16,
    color: '#44E79F',
    marginLeft: 15,
  },
  simkartus: {
    marginTop: 30,
  },
  simkartutext: {
    color: '#12154C',
    fontSize: 24,
    fontWeight: '600',
  },
  sims: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  sims2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },
});
