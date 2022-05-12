import {useNavigation} from '@react-navigation/native';
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
import {EnterIcon} from '../../assets/icons/icon';
// const {width: {height} = Dimensions.get('window')};
// import carouselItem from '../../assets/carousel.json';
import Button from '../../components/card';
import {storeDATA} from './data';

const viewConfigRef = {viewAreaCoveragePercentThreshold: 95};

interface CarouselItems {
  title: string;
  url: string;
  promo: string;
  backgroundColor: any;
  icon: any;
}
export default function CaruselStore() {
  const {navigate} = useNavigation();
  const AboutProduct = () => {
    navigate('aboutproduct');
  };
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
        <View
          style={[styles.container3, {backgroundColor: item.backgroundColor}]}>
          <View>
            <Image source={item.url} />
            <View style={styles.dolcevita}>
              <Text style={styles.dolcevitatext}>{item.productName}</Text>
            </View>
            <View style={styles.narx}>
              <Text style={styles.narxtext}>{item.productCost}</Text>
            </View>
            <TouchableOpacity onPress={AboutProduct}>
              <View style={styles.icon}>
                <EnterIcon />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: -5}}>
            <Image source={item.url2} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <FlatList
        data={storeDATA}
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
        {storeDATA.map(({}, index: number) => (
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
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotview: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  carousel: {},
  container3: {
    height: 150,
    width: 327,
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingVertical: 20,
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  dolcevita: {
    marginTop: 6,
  },
  dolcevitatext: {
    color: '#926C4B',
    fontSize: 14,
  },
  narx: {
    marginTop: 6,
  },
  narxtext: {
    color: '#878B9A',
    fontSize: 12,
  },
  icon: {
    marginTop: 13,
  },
  circle: {
    height: 3,
    width: 3,
    backgroundColor: 'grey',
    borderRadius: 50,
    marginHorizontal: 3,
    // marginTop: 20,
  },
});
