import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const TodoButton = ({children, bgColor, onPress}) => {
  return (
    <Pressable
      style={({pressed}) =>
        pressed
          ? [styles.press, styles.button, {backgroundColor: bgColor}]
          : [styles.button, {backgroundColor: bgColor}]
      }
      onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default TodoButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    width: 100,
    height: 38,
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
