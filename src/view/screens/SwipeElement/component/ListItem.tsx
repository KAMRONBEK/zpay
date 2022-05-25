import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {TaskInterface} from '..';

const windowHeight = Dimensions.get('window').height;

interface ListItemProps
  extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  task: TaskInterface;
  onDismiss?: (task: TaskInterface) => void;
}

const LIST_ITEM_HEIGHT = windowHeight / 6.9;
const {width: SCREEN_WIDTH} = Dimensions.get('window');
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.3;

const ListItem: React.FC<ListItemProps> = ({
  task,
  onDismiss,
  simultaneousHandlers,
}) => {
  const translateX = useSharedValue(0);
  const itemHeigt = useSharedValue(LIST_ITEM_HEIGHT);
  const marginVertical = useSharedValue(15);
  const opacity = useSharedValue(1);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: event => {
      translateX.value = event.translationX;
      console.log(translateX.value);
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
      if (shouldBeDismissed) {
        translateX.value = withTiming(-SCREEN_WIDTH);
        itemHeigt.value = withTiming(0);
        marginVertical.value = withTiming(0);
        opacity.value = withTiming(0, undefined, isFinished => {
          if (isFinished && onDismiss) {
            runOnJS(onDismiss)(task);
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  const rIconContainerStyle = useAnimatedStyle(() => {
    const opacity = translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0;
    return {opacity};
  });

  const rTaskContainerStyle = useAnimatedStyle(() => {
    return {
      height: itemHeigt.value,
      marginVertical: marginVertical.value,
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={[styles.taskContainer, rTaskContainerStyle]}>
      <Animated.View style={[styles.iconContainer, rIconContainerStyle]}>
        <Text style={styles.iconContainerText}>delete</Text>
      </Animated.View>
      <PanGestureHandler
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={panGesture}>
        <Animated.View style={[styles.task, rStyle]}>
          <View style={styles.iconRow}>
            <Text style={styles.headText}>Начислен Бонус</Text>
            <Image
              source={require('../../../assets/images/orange.png')}
              style={{position: 'absolute', right: 0}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Image
              source={require('../../../assets/images/ZCoinBlueIcon.png')}
              style={{height: 36, width: 36}}
            />
            <View
              style={{
                paddingHorizontal: 20,
                width: '90%',
              }}>
              <Text style={styles.taskTitle}>{task.title}</Text>
            </View>
          </View>
          <View style={styles.data}>
            <Text style={styles.datatext}>03.17.2022, 14:04</Text>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    alignItems: 'center',
    width: '100%',
  },
  task: {
    width: '90%',
    height: LIST_ITEM_HEIGHT,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderLeftWidth: 5,
    borderLeftColor: '#32B179',
    paddingLeft: 14,
    paddingRight: 5,
    paddingVertical: 10,
    shadowOpacity: 0.08,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    elevation: 5,
  },
  taskTitle: {
    color: '#12154C',
    fontSize: 12,
  },
  iconContainer: {
    height: LIST_ITEM_HEIGHT,
    width: LIST_ITEM_HEIGHT,
    // backgroundColor: 'red',
    position: 'absolute',
    right: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainerText: {
    color: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headText: {
    fontSize: 16,
    color: '#12154C',
  },
  data: {
    marginTop: 10,
    marginLeft: '15%',
  },

  datatext: {
    fontSize: 12,
    color: '#878B9A',
  },
});

export default ListItem;
