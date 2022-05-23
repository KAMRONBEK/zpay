import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Back2,
  CheckIcontwo,
  Exit,
  Gift,
  I,
  Littleprofile,
  QA,
} from '../../assets/icons/icon';

const windowHeight = Dimensions.get('window').height;

const ProfileScreen = () => {
  let {navigate} = useNavigation();
  const App = () => {
    navigate('app');
  };
  return (
    <ImageBackground
      source={require('../../assets/images/profilBackground.png')}
      style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity onPress={App}>
          <View style={styles.img}></View>
        </TouchableOpacity>
        <View style={styles.name}>
          <Text style={styles.text}>Marina Volkova</Text>
          <CheckIcontwo />
        </View>
        <View style={styles.id}>
          <Text style={styles.idtext}>ID: 233256</Text>
        </View>
        <View style={styles.limit}>
          <Text style={styles.limittext}>8 000 000.00 сум</Text>
        </View>
        <View style={styles.textlimit}>
          <Text style={styles.textlimitt}>Текущий лимит</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.border}>
            <View style={styles.width}>
              <Littleprofile />
              <Text style={styles.bordertext}>Личная информация</Text>
            </View>
            <Back2 />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.border}>
            <View style={styles.width}>
              <Gift />
              <Text style={styles.bordertext}>Потратить бонусы</Text>
            </View>
            <Back2 />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.border}>
            <View style={styles.width}>
              <QA />
              <Text style={styles.bordertext}>Частно задаваемые вопросы</Text>
            </View>
            <Back2 />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.border}>
            <View style={styles.width}>
              <I />
              <Text style={styles.bordertext}>О приложении</Text>
            </View>
            <Back2 />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.border}>
            <View style={styles.width}>
              <Exit />
              <Text style={styles.bordertext}>Выйти</Text>
            </View>
            <Back2 />
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  box: {
    height: windowHeight / 1.4,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#FFFFFF',
    position: 'relative',
    paddingHorizontal: 24,
  },
  img: {
    position: 'absolute',
    alignSelf: 'center',
    // justifyContent: 'center',
    marginTop: -50,
    height: windowHeight / 8.9,
    width: windowHeight / 8.9,
    borderRadius: 50,
    backgroundColor: '#33409E',
    borderWidth: 1,
    borderColor: '#FFF',
  },
  name: {
    marginTop: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#878B9A',
    fontSize: 24,
    marginHorizontal: 5,
  },
  id: {
    alignItems: 'center',
    marginTop: 4,
  },
  idtext: {
    color: '#32B179',
    fontSize: 16,
  },
  limit: {
    alignItems: 'center',
    marginTop: 8,
    paddingVertical: 5,
    paddingHorizontal: 3,
  },
  limittext: {
    fontSize: 24,
    color: '#12154C',
    fontWeight: '700',
  },
  textlimit: {
    alignItems: 'center',
    marginVertical: 5,
  },
  textlimitt: {
    fontSize: 24,
    color: '#12154C',
  },
  border: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#EAEFF3',
    alignItems: 'center',
  },

  bordertext: {
    fontSize: 16,
    color: '#121F3E',
    marginVertical: 19,
    marginHorizontal: 25.8,
    fontWeight: '600',
  },
  width: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
