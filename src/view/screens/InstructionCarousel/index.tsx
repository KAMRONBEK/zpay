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

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const imgHeight = SCREEN_HEIGHT * 0.66;
const imgWidth = SCREEN_WIDTH * 0.72;

const instructionBarWidth = SCREEN_HEIGHT * 0.33;

const data = [
  {
    title: 'Приобретайте в рассрочку с ZPAY менее чем за 2 минуты',
    label:
      'Покупайте сейчас и платите равными частями в срок до 6 месяцев! Пройдите быструю регистрацию, имея только Паспорт и платежную карту ',
    img: require('../../assets/images/InstructionImg1.png'),
  },
  {
    title:
      'Откройте для себя множество  Партнерских магазинов с товарами именно для вас',
    label:
      'Откройте для себя множество Партнерских магазинов с товарами именно для васНаходите магазины по категориям, локациям и вдохновляйтесь на новые покупки!',
    img: require('../../assets/images/InstructionImg2.png'),
  },
  {
    title: 'AnНаслаждайтесь  вашей покупкой с приятными бонусами от ZPAY',
    label: 'Совершайте покупки у наших партнеров и с приятным кешбеком от ZPAY',
    img: require('../../assets/images/InstructionImg3.png'),
  },
  {
    title: 'Просматривайте и управляйте своими покупками!',
    label:
      'Просматривайте свои прошлые и текущие договора, и платежи. Управляйте своими данными в едином приложении',
    img: require('../../assets/images/InstructionImg4.png'),
  },
];

export const InstructionCarousel: React.FC = () => {
  const navigation = useNavigation();
  const Intro = () => {
    navigation.navigate('intro');
  };

  const [activeSlide, setActiveSlide] = useState(0);
  const windowWidth = Dimensions.get('window').width;

  const carouselRef = useRef<Carousel<typeof data[0]>>(null);

  const onNextPress = () => {
    if (!carouselRef.current?.snapToNext) return;
    carouselRef.current?.snapToNext();

    if (activeSlide === data.length - 1) {
      //   navigation.navigate(LOGIN);
    }
  };

  const renderTitle = () => {
    switch (activeSlide) {
      case data.length - 4:
        return 'Приобретайте в рассрочку с ZPAY менее чем за 2 минуты';
        break;

      case data.length - 3:
        return 'Откройте для себя множество Партнерских магазинов с товарами именно для вас';
        break;

      case data.length - 2:
        return 'Наслаждайтесь  вашей покупкой с приятными бонусами от ZPAY';
        break;

      case data.length - 1:
        return 'Просматривайте и управляйте своими покупками!';
        break;
      default:
        return '';
        break;
    }
  };

  const renderDescription = () => {
    switch (activeSlide) {
      case data.length - 4:
        return 'Покупайте сейчас и платите равными частями в срок до 6 месяцев! Пройдите быструю регистрацию, имея только Паспорт и платежную карту ';
        break;

      case data.length - 3:
        return 'Находите магазины по категориям, локациям и вдохновляйтесь на новые покупки!';
        break;

      case data.length - 2:
        return 'Совершайте покупки у наших партнеров и с приятным кешбеком от ZPAY';
        break;

      case data.length - 1:
        return 'Просматривайте свои прошлые и текущие договора, и платежи. Управляйте своими данными в едином приложении';
        break;
      default:
        return '';
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          paddingVertical: 60,
          backgroundColor: '#FFF',
          // paddingHorizontal: 24,
        }}>
        <TouchableOpacity onPress={Intro}>
          <Text
            style={{
              textAlign: 'right',
              color: '#3554D1',
              marginTop: 9,
              fontSize: 16,
              fontWeight: '600',
              textDecorationLine: 'underline',
              textDecorationStyle: 'solid',
              textDecorationColor: '#3554D1',
              paddingHorizontal: 24,
            }}>
            Пропустить
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
            backgroundColor: '#FFF',
            zIndex: 2,
          }}>
          <Carousel
            onSnapToItem={index => setActiveSlide(index)}
            data={data}
            sliderWidth={windowWidth}
            itemWidth={windowWidth}
            scrollEnabled={false}
            pagingEnabled
            ref={carouselRef}
            renderItem={({item: {img, title, label}}) => (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <ImageBackground
                  style={[
                    styles.image,
                    {
                      height: imgHeight,
                      width: imgWidth,
                      zIndex: 1,
                      justifyContent: 'flex-end',
                      marginTop: 38,
                    },
                  ]}
                  resizeMode="cover"
                  source={img}></ImageBackground>
              </View>
            )}
          />
          <LinearGradient
            colors={[
              '#ffffff00',
              '#ffffff00',
              'white',
              'white',
              'white',
              'white',
              'white',
              'white',
              'white',
              'white',
            ]}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1.2}}
            style={{
              height: instructionBarWidth,
              width: '100%',
              zIndex: 99,
              paddingHorizontal: 24,
              paddingVertical: 50,
              position: 'absolute',
              // backgroundColor: 'red',
            }}>
            <Text style={{color: '#000000', fontSize: 18, fontWeight: '700'}}>
              {renderTitle()}
            </Text>
            <Text
              style={{
                color: '#878B9A',
                fontSize: 14,
                marginTop: 10,
                fontWeight: '600',
              }}>
              {renderDescription()}
            </Text>
          </LinearGradient>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#FFF',
            alignItems: 'center',
            paddingHorizontal: 24,
            // height: 70,
          }}>
          {activeSlide === data.length - 1 ? null : (
            <Pagination
              dotColor="#3554D1"
              dotsLength={4}
              dotContainerStyle={{
                paddingHorizontal: 0,
                marginHorizontal: 5.5,
                display: 'flex',
              }}
              inactiveDotScale={0.5}
              inactiveDotOpacity={0.4}
              activeDotIndex={activeSlide}
              inactiveDotColor="#EAE9EE"
              dotStyle={{
                width: 30,
                height: 6,
                borderRadius: 5,
                marginHorizontal: -5,
                backgroundColor: '#3554D1',
              }}
              inactiveDotStyle={{
                backgroundColor: '#878B9A',
                width: 8,
                height: 8,
                display: 'flex',
              }}
            />
          )}
          <TouchableOpacity
            style={
              activeSlide === data.length - 1
                ? {
                    width: '100%',
                    backgroundColor: '#427CF8',
                    borderRadius: 10,
                    height: 46,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginVertical: 10,
                  }
                : {
                    height: 46,
                    width: 110,
                    backgroundColor: '#BAD0FF',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }
            }
            onPress={activeSlide === data.length - 1 ? Intro : onNextPress}>
            <Text>
              {activeSlide === data.length - 1
                ? 'Пройти регистрацию'
                : 'Дальше'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: imgHeight,
    width: imgWidth,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  dotContainer: {
    paddingHorizontal: 0,
    marginHorizontal: 5.5,
  },
  // dotStyle: {
  //   width: 6,
  //   height: 6,
  //   borderRadius: 5,
  //   paddingHorizontal: 2,
  //   backgroundColor: 'blue',
  // },
});
