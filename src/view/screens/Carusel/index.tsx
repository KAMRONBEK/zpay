import React, {useState, useRef} from 'react';
import {
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
// const {width: {height} = Dimensions.get('window')};
// import carouselItem from '../../assets/carousel.json';
import Button from '../../components/card';
import {cartDATA} from './data';

const viewConfigRef = {viewAreaCoveragePercentThreshold: 95};

interface CarouselItems {
  title: string;
  url: string;
  promo: string;
  backgroundColor: any;
}
export default function Carusel() {
  let flatlistRef = useRef<FlatList<CarouselItems> | null>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewRef = useRef(({changed}: {changed: any}) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });

  const scrollToIndex = (index: number) => {
    flatlistRef.current?.scrollToIndex({animated: true, index: index});
  };

  const renderItems: React.FC<{item: CarouselItems}> = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => console.log('clicked')}
        activeOpacity={1}>
        <View style={styles.head}>
          <View style={styles.karta}>
            <View
              style={[styles.kartu, {backgroundColor: item.backgroundColor}]}>
              <View style={styles.zback}>
                <Image source={item.url4} style={{height: 206, width: 278}} />
              </View>
              <View style={styles.text}>
                <Text style={styles.headtext}>{item.cartName}</Text>
              </View>
              <View style={styles.number}>
                <Text style={styles.numbertext}>{item.cartNumber}</Text>
              </View>
              <View style={styles.card2}>
                <View style={styles.card}>
                  <Text style={styles.cardtext2}>
                    {item.instractionCartholderName}
                  </Text>
                </View>
                <View style={styles.card3}>
                  <Text style={styles.cardtext2}>
                    {item.instractionCartExpiryDate}
                  </Text>
                </View>
              </View>
              <View style={styles.two}>
                <View style={styles.name}>
                  <Text style={styles.textname}>{item.cartholderName}</Text>
                </View>
                <View style={styles.data}>
                  <Text style={styles.datatext}>{item.cartExpiryDate}</Text>
                </View>
              </View>
              <View style={styles.ugl2}>
                <Image source={item.url3} style={{height: 109, width: 143}} />
              </View>
              <View style={styles.humoCircle}>
                <Image source={item.url5} style={{height: 54, width: 166}} />
              </View>
              <View style={styles.ugl}>
                <Image source={item.url2} style={{height: 109, width: 143}} />
              </View>
              <View style={styles.zpay}>
                <Image source={item.url} style={{height: 42, width: 48}} />
              </View>
              <View style={styles.humoTocka}>
                <Image source={item.url6} style={{height: 58, width: 58}} />
              </View>
              <View style={styles.humoCircle2}>
                <Image source={item.url7} style={{height: 184, width: 202}} />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <FlatList
        data={cartDATA}
        renderItem={renderItems}
        keyExtractor={(item, index) => item.toString()}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={ref => {
          flatlistRef.current = ref;
        }}
        style={styles.carousel}
        viewabilityConfig={viewConfigRef}
        onViewableItemsChanged={onViewRef.current}
      />
      <View style={styles.dotview}>
        {cartDATA.map(({}, index: number) => (
          <TouchableOpacity
            key={index.toString()}
            style={[
              styles.circle,
              {backgroundColor: index == currentIndex ? 'black' : 'grey'},
            ]}
            onPress={() => scrollToIndex(index)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 39,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginTop: 150,
    // marginLeft: 20,
  },
  humoCircle2: {
    position: 'absolute',
    marginLeft: 126,
    marginTop: 86,
  },
  image: {
    height: 206,
    width: 327,
    marginHorizontal: 15,
    // resizeMode: 'cover',
    borderRadius: 14.23,
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
    height: 206.19,
    width: 327,
    backgroundColor: '#4A6AB3',
    marginTop: 39,
    borderRadius: 11.71,
    paddingHorizontal: 21.19,
    paddingVertical: 21.15,
  },

  ugl: {
    marginLeft: 184,
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
    marginTop: 72,
  },
  numbertext: {
    fontSize: 23.29,
    color: '#FFF',
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
    marginLeft: 67,
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
    marginLeft: 80,
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
    // justifyContent: 'space-between',
    marginHorizontal: 13,
  },
  zpay: {
    position: 'absolute',
    marginLeft: 250,
    marginTop: 20,
  },
  headtext: {
    fontSize: 15,
    color: '#FFF',
  },
});
