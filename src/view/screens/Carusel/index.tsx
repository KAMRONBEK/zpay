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
    id: 1,
    cartNumber: '8600 9877 5423 2100',
    cartName: 'Рабочая',
    instractionCartholderName: 'Имя владельца карты',
    instractionCartExpiryDate: 'Срок истечения',
    cartholderName: 'Marina Volkova',
    cartExpiryDate: '07/24',
    url: require('../../assets/images/UzCard1.png'),
    url2: require('../../assets/images/Corner1.png'),
    url3: require('../../assets/images/Corner2.png'),
    backgroundColor: '#4A6AB3',
  },
  {
    id: 2,
    cartNumber: '560 000.00  сум',
    cartName: 'Кешбек Кошелек',
    url: require('../../assets/images/Wallet1.png'),
    url4: require('../../assets/images/ZImg.png'),
    backgroundColor: '#1E3CA5',
  },
  {
    id: 3,
    cartNumber: '9860 0124 2516 0000',
    cartName: 'Zmarket',
    url: require('../../assets/images/HumoCard1.png'),
    url5: require('../../assets/images/HumoCircle1.png'),
    url6: require('../../assets/images/Circles1.png'),
    url7: require('../../assets/images/HumoCircle2.png'),
    backgroundColor: '#455A64',
  },
];

export const Carusel: React.FC = () => {
  const navigation = useNavigation();

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
      <Carousel
        onSnapToItem={index => setActiveSlide(index)}
        data={data}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        pagingEnabled
        ref={carouselRef}
        renderItem={({
          item: {
            backgroundColor,
            instractionCartholderName,
            cartName,
            cartNumber,
            cartExpiryDate,
            cartholderName,
            url,
            url2,
            url3,
            url4,
            url5,
            url6,
            url7,
            instractionCartExpiryDate,
          },
        }) => (
          <View style={styles.karta}>
            <View style={[styles.kartu, {backgroundColor: backgroundColor}]}>
              <View style={styles.zback}>
                <Image source={url4} style={{height: 170, width: 225}} />
              </View>
              <View style={styles.text}>
                <Text style={styles.headtext}>{cartName}</Text>
              </View>
              <View style={styles.number}>
                <Text style={styles.numbertext}>{cartNumber}</Text>
              </View>
              <View style={styles.card2}>
                <View style={styles.card}>
                  <Text style={styles.cardtext2}>
                    {instractionCartholderName}
                  </Text>
                </View>
                <View style={styles.card3}>
                  <Text style={styles.cardtext2}>
                    {instractionCartExpiryDate}
                  </Text>
                </View>
              </View>
              <View style={styles.two}>
                <View style={styles.name}>
                  <Text style={styles.textname}>{cartholderName}</Text>
                </View>
                <View style={styles.data}>
                  <Text style={styles.datatext}>{cartExpiryDate}</Text>
                </View>
              </View>
              <View style={styles.ugl2}>
                <Image source={url3} style={{height: 99, width: 131}} />
              </View>
              <View style={styles.humoCircle}>
                <Image source={url5} style={{height: 42, width: 130}} />
              </View>
              <View style={styles.ugl}>
                <Image source={url2} style={{height: 99, width: 131}} />
              </View>
              <View style={styles.zpay}>
                <Image source={url} style={{height: 42, width: 48}} />
              </View>
              <View style={styles.humoTocka}>
                <Image source={url6} style={{height: 88, width: 68}} />
              </View>
              <View style={styles.humoCircle2}>
                <Image source={url7} style={{height: 104, width: 119}} />
              </View>
            </View>
          </View>
        )}
      />

      <Pagination
        dotColor="#3554D1"
        dotsLength={3}
        dotContainerStyle={{
          paddingHorizontal: 0,
        }}
        inactiveDotScale={0.5}
        inactiveDotOpacity={0.4}
        activeDotIndex={activeSlide}
        inactiveDotColor="#EAE9EE"
        containerStyle={{paddingVertical: 5}}
        dotStyle={{
          width: 7,
          height: 7,
          borderRadius: 5,
          marginHorizontal: -5,
          backgroundColor: '#3554D1',
        }}
        inactiveDotStyle={{
          backgroundColor: '#878B9A',
          width: 10,
          height: 10,
        }}
      />
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

  zback: {
    position: 'absolute',
    marginLeft: 29,
  },
  head: {
    // marginHorizontal: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carousel: {
    marginTop: -30,
  },
  humoCircle: {
    position: 'absolute',
    marginLeft: 58,
  },
  humoTocka: {
    position: 'absolute',
    marginTop: 120,
    // marginLeft: 20,
  },
  humoCircle2: {
    position: 'absolute',
    marginLeft: 150,
    marginTop: 66,
  },

  dotview: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  circle: {
    height: 6,
    width: 6,
    backgroundColor: 'grey',
    borderRadius: 50,
    marginHorizontal: 5,
    // marginTop: 20,
  },
  kartu: {
    height: 170,
    width: 270,
    backgroundColor: '#4A6AB3',
    borderRadius: 11.71,
    paddingHorizontal: 21.19,
    paddingVertical: 21.15,
  },

  ugl: {
    marginLeft: 140,
    bottom: 0,
    position: 'absolute',
  },
  ugl2: {
    position: 'absolute',
    marginTop: 1,
    marginLeft: 1,
  },
  text: {
    zIndex: 99,
  },
  text2: {
    zIndex: 99,
    marginTop: 27,
  },
  number: {
    zIndex: 99,
    marginTop: 37,
  },
  numbertext: {
    fontSize: 19,
    color: '#FFF',
    fontWeight: '700',
  },
  numbertext3: {
    fontSize: 24,
    color: '#FFF',
  },
  numbertext2: {
    fontSize: 24,
    color: '#FFF',
  },
  card: {
    marginTop: 27,
  },
  card3: {
    marginTop: 27,
    marginLeft: 53,
  },
  cardtext: {
    fontSize: 6.39,
  },
  cardtext2: {
    fontSize: 7.76,
    color: '#FFF',
  },
  card2: {
    flexDirection: 'row',
  },
  textname: {
    fontSize: 10.64,
    color: '#FFF',
  },
  name: {
    marginTop: 6.39,
  },
  data: {
    marginTop: 6.39,
    marginLeft: 60,
  },
  datatext: {
    fontSize: 10.64,
    color: '#FFF',
  },
  two: {
    flexDirection: 'row',
  },
  karta: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  zpay: {
    position: 'absolute',
    marginLeft: 200,
    marginTop: 20,
  },
  headtext: {
    fontSize: 15,
    color: '#FFF',
  },
});
