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
import {EnterIcon} from '../../assets/icons/icon';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const imgHeight = SCREEN_HEIGHT * 0.04;
const imgWidth = SCREEN_WIDTH * 0.21;

const img2Height = SCREEN_HEIGHT * 0.12;
const img2Width = SCREEN_WIDTH * 0.27;

const containerHeight = SCREEN_HEIGHT * 0.17;
const containerWidth = SCREEN_WIDTH * 0.86;

const instructionBarWidth = SCREEN_HEIGHT * 0.2;

const data = [
  {
    title: 'Подвеска DolceVita',
    label: '136 000 сум/мес',
    img: require('../../assets/images/jewerlies.png'),
    url: require('../../assets/images/StoreBrand.png'),
  },
  {
    title: 'Подвеска DolceVita',
    label: '136 000 сум/мес',
    img: require('../../assets/images/jewerlies.png'),
    url: require('../../assets/images/StoreBrand.png'),
  },
  {
    title: 'Подвеска DolceVita',
    label: '136 000 сум/мес',
    img: require('../../assets/images/jewerlies.png'),
    url: require('../../assets/images/StoreBrand.png'),
  },
  {
    title: 'Подвеска DolceVita',
    label: '136 000 сум/мес',
    img: require('../../assets/images/jewerlies.png'),
    url: require('../../assets/images/StoreBrand.png'),
  },
];

export const StoreCarousel: React.FC = () => {
  const {navigate} = useNavigation();
  const AboutProduct = () => {
    navigate('aboutproduct');
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
          alignItems: 'center',
          //   justifyContent: 'flex-end',
        }}>
        <Carousel
          onSnapToItem={index => setActiveSlide(index)}
          data={data}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          pagingEnabled
          ref={carouselRef}
          renderItem={({item: {img, title, label, url}}) => (
            <View style={{alignItems: 'center', marginTop: 25}}>
              <View
                style={{
                  height: containerHeight,
                  width: containerWidth,
                  backgroundColor: '#FFF',
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: '#E5EBF0',
                }}>
                <View>
                  <Image style={styles.image} source={url} />
                  <Text
                    style={{
                      color: '#926C4B',
                      fontSize: 14,
                      marginTop: 6,
                    }}>
                    {title}
                  </Text>
                  <Text
                    style={{
                      color: '#878B9A',
                      fontSize: 12,
                      marginTop: 6,
                    }}>
                    {label}
                  </Text>
                  <TouchableOpacity onPress={AboutProduct}>
                    <EnterIcon style={{marginTop: 6}} />
                  </TouchableOpacity>
                </View>
                <Image style={styles.image2} source={img} />
              </View>
            </View>
          )}
        />

        <View
          style={{
            alignItems: 'center',
          }}>
          <Pagination
            dotColor="#3554D1"
            dotsLength={4}
            dotContainerStyle={{
              paddingHorizontal: 0,
              marginHorizontal: 5.5,
            }}
            inactiveDotScale={0.5}
            inactiveDotOpacity={0.4}
            activeDotIndex={activeSlide}
            inactiveDotColor="#EAE9EE"
            dotStyle={{
              width: 7,
              height: 7,
              borderRadius: 5,
              marginHorizontal: -5,
              backgroundColor: '#3554D1',
            }}
            inactiveDotStyle={{
              backgroundColor: '#878B9A',
              width: 8,
              height: 8,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height: 200,
  },
  image: {
    height: imgHeight,
    width: imgWidth,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    backgroundColor: '#FFF',
  },
  image2: {
    height: img2Height,
    width: img2Width,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    backgroundColor: '#FFF',
  },
  dotContainer: {
    paddingHorizontal: 0,
    marginHorizontal: 5.5,
  },
});
