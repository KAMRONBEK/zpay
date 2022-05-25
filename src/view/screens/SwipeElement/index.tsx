import React, {Component, useCallback, useRef, useState} from 'react';
import {
  Animated,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {SafeAreaView} from 'react-navigation';
import ListItem from './component/ListItem';

const TITLES = [
  "Hurmatli RAXMANOV SHAXBOZ RASULDJON O`G`LI! Sizning 191400 so'mlik to'lovingiz muvaffaqiyatli o'tkazildi. Shartnoma bo’yicha qolgan qarzdorlik...",
  "Hurmatli RAXMANOV SHAXBOZ RASULDJON O`G`LI! Sizning 191400 so'mlik to'lovingiz muvaffaqiyatli o'tkazildi. Shartnoma bo’yicha qolgan qarzdorlik...",
  "Hurmatli RAXMANOV SHAXBOZ RASULDJON O`G`LI! Sizning 191400 so'mlik to'lovingiz muvaffaqiyatli o'tkazildi. Shartnoma bo’yicha qolgan qarzdorlik...",
  "Hurmatli RAXMANOV SHAXBOZ RASULDJON O`G`LI! Sizning 191400 so'mlik to'lovingiz muvaffaqiyatli o'tkazildi. Shartnoma bo’yicha qolgan qarzdorlik...",
];

interface TaskInterface {
  title: string;
  index: number;
}

const TASKS: TaskInterface[] = TITLES.map((title, index) => ({title, index}));

export default function SwipeElement() {
  const [tasks, setTasks] = useState(TASKS);

  const onDismiss = useCallback((task: TaskInterface) => {
    setTasks(tasks => tasks.filter(item => item.index !== task.index));
  }, []);

  const scrollRef = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={{flex: 1}}>
        {tasks.map(task => (
          <ListItem
            simultaneousHandlers={scrollRef}
            key={task.index}
            task={task}
            onDismiss={onDismiss}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  title: {
    color: 'black',
    fontSize: 60,
    marginVertical: 20,
    paddingLeft: '5%',
  },
});

export {TaskInterface};
