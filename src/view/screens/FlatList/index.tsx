import React, {useRef, useState} from 'react';
import {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';

const viewConfigRef = {viewAreaCoveragePercentThreshold: 95};

export default function FlatlistTitle() {
  const [title, setTitle] = useState([
    {
      id: 1,
      name: 'Авто',
      isChecked: true,
    },
    {
      id: 2,
      name: 'Акции',
      isChecked: false,
    },
    {
      id: 3,
      name: 'Мебель',
      isChecked: false,
    },
    {
      id: 4,
      name: 'Услуги',
      isChecked: false,
    },
    {
      id: 5,
      name: 'Одежда',
      isChecked: false,
    },
    {
      id: 6,
      name: 'Авто',
      isChecked: false,
    },
    {
      id: 7,
      name: 'Авто',
      isChecked: false,
    },
  ]);

  const handeClickTitle = (item: any) => {
    const newTitle = title.map(t =>
      t.id === item.id ? {...t, isChecked: true} : {...t, isChecked: false},
    );
    setTitle(newTitle);
  };
  const _flatlistRef = useRef().current;
  useEffect(() => {
    if (!_flatlistRef) return;
    _flatlistRef.scrollToIndex(
      title.filter(item => (item.isChecked ? item.id : 1)),
      true,
    );
  }, [title]);

  const TITLE_SIZE = 100;

  const animatedValue = useRef(new Animated.Value(0)).current;
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

  return (
    <View style={styles.container}>
      <AnimatedFlatList
        data={title}
        horizontal
        ref={_flatlistRef}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        // snapToOffset={TITLE_SIZE}
        snapToInterval={TITLE_SIZE}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                x: animatedValue,
              },
            },
          },
        ])}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          const inputRange = [-1, 0, index, index * TITLE_SIZE];

          let color = animatedValue.interpolate({
            inputRange: inputRange,
            outputRange: ['black', 'black', 'white', 'black'],
          });

          return (
            <View style={[styles.listItem, {width: TITLE_SIZE}]}>
              <TouchableOpacity onPress={() => handeClickTitle(item)}>
                <Animated.Text
                  style={{
                    fontSize: 16,
                    color: color,
                  }}>
                  {item.name}
                </Animated.Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  listItem: {},
});
