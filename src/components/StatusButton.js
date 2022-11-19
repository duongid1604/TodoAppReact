import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const StatusButton = ({children, styleStatusBtn, onPress}) => {
  return (
    <Pressable
      style={({pressed}) =>
        pressed
          ? [styles.press, styles.button, styleStatusBtn]
          : [styles.button, styleStatusBtn]
      }
      onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default StatusButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    width: 150,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  press: {
    opacity: 0.5,
  },
});
