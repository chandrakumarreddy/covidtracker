import React, {useRef, useState, useEffect} from 'react';
import {
  PanResponder,
  Animated,
  LayoutAnimation,
  StyleSheet,
  Dimensions,
  UIManager,
  View,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

export default function Deck({
  data,
  renderNoMoreCards,
  renderCard,
  onSwipeLeft,
  onSwipeRight,
}) {
  const [index, setIndex] = useState(0);
  console.log(index);
  const position = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({
          x: gesture.dx,
          y: gesture.dy,
        });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          forceSwipe('left');
        } else {
          resetPosition();
        }
      },
    }),
  ).current;
  // useEffect(() => {
  //   UIManager.setLayoutAnimationEnabledExperimental?.(true);
  //   LayoutAnimation.spring();
  // }, [index]);
  const resetPosition = () => {
    Animated.spring(position, {
      useNativeDriver: false,
      toValue: {x: 0, y: 0},
    }).start();
  };
  const forceSwipe = (direction) => {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(position, {
      useNativeDriver: false,
      toValue: {x, y: 0},
      duration: SWIPE_OUT_DURATION,
    }).start(() => {
      onSwipeComplete(direction);
    });
  };
  const onSwipeComplete = (direction) => {
    const item = data[index];
    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
    position.setValue({x: 0, y: 0});
    setIndex((index) => index + 1);
  };
  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg'],
    });
    return {
      ...position.getLayout(),
      transform: [{rotate}],
    };
  };
  const callback = () => {
    setIndex(0);
  };
  const renderCards = () => {
    if (index >= data.length) {
      return renderNoMoreCards(callback);
    }
    return (
      <View style={styles.container}>
        {data.map((card, i) => {
          if (i < index) return null;
          if (i === index) {
            return (
              <Animated.View
                style={[getCardStyle(), styles.cardStyle, {zIndex: 99}]}
                key={card.id}
                {...panResponder.panHandlers}>
                {renderCard(card)}
              </Animated.View>
            );
          }
          return (
            <Animated.View key={card.id} style={styles.cardStyle}>
              {renderCard(card)}
            </Animated.View>
          );
        })}
      </View>
    );
  };
  return <View>{renderCards()}</View>;
}

Deck.defaultProps = {
  onSwipeRight: () => {},
  onSwipeLeft: () => {},
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 200,
  },
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH,
  },
});
