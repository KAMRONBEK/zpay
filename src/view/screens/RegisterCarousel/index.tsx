import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import {Back, EnterIcon, RU} from '../../assets/icons/icon';
import VerifiyInput from '../TextInput';
import Register from '../Register';
import Id from '../Id';
import Verification from '../Verification';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const containerHeight = SCREEN_HEIGHT * 0.36;

const data = [
  {
    page: <Register />,
  },
  {
    page: <Verification />,
  },
  {
    page: <Id />,
  },
];

export const RegisterCarousel: React.FC = () => {
  let navigation = useNavigation();
  const Scaner = () => {
    navigation.navigate('scaner');
  };
  const [activeSlide, setActiveSlide] = useState(0);
  const windowWidth = Dimensions.get('window').width;

  const carouselRef = useRef<Carousel<typeof data[0]>>(null);

  const onNextPress = () => {
    if (!carouselRef.current?.snapToNext) return;
    carouselRef.current?.snapToNext();

    if (activeSlide === data.length - 1) {
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFF',
          //   alignItems: 'center',
          //   paddingHorizontal: 24,
          paddingVertical: 52,
        }}>
        <View style={styles.headbar}>
          <TouchableOpacity onPress={navigation.goBack}>
            <View style={styles.headback}>
              <Back />
            </View>
          </TouchableOpacity>
          <View style={styles.headback}>
            <RU />
          </View>
        </View>
        <Carousel
          onSnapToItem={index => setActiveSlide(index)}
          data={data}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          pagingEnabled
          ref={carouselRef}
          scrollEnabled={false}
          renderItem={({item: {page}}) => (
            <View style={{height: 100}}>
              <View
                style={{
                  height: containerHeight,
                }}>
                {page}
              </View>
            </View>
          )}
        />

        <View
          style={{
            backgroundColor: '#FFF',
            alignItems: 'center',
            paddingHorizontal: 24,
          }}>
          <TouchableOpacity
            style={
              activeSlide === data.length - 1
                ? {
                    width: '100%',
                    backgroundColor: '#427CF8',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 15,
                  }
                : {
                    width: '100%',
                    backgroundColor: '#427CF8',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 15,
                  }
            }
            onPress={activeSlide === data.length - 1 ? Scaner : onNextPress}>
            <Text>
              {activeSlide === data.length - 1 ||
              activeSlide === data.length - 2
                ? 'Потвердить'
                : 'Продолжить'}
            </Text>
          </TouchableOpacity>

          <Pagination
            dotColor="#3554D1"
            dotsLength={3}
            dotContainerStyle={{
              paddingHorizontal: 0,
              marginHorizontal: 5.5,
            }}
            inactiveDotScale={0.6}
            inactiveDotOpacity={0.4}
            activeDotIndex={activeSlide}
            inactiveDotColor="#EAE9EE"
            dotStyle={{
              width: 9,
              height: 9,
              borderRadius: 5,
              marginHorizontal: -5,
              backgroundColor: '#3554D1',
            }}
            inactiveDotStyle={{
              backgroundColor: '#878B9A',
              width: 9,
              height: 9,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  dotContainer: {
    paddingHorizontal: 0,
    marginHorizontal: 5.5,
  },
  headback: {
    backgroundColor: '#ffff',
    borderWidth: 0.5,
    borderColor: '#EAEFF3',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  headbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    paddingHorizontal: 24,
  },
});
