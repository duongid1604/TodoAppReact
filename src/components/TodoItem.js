import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {textColor} from '../constants/Colors';

const TodoItem = ({text, id}) => {
  const [done, setDone] = useState();

  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate('Details', {text: text, id: id});
  };

  const longPressHandler = () => {
    setDone('line-through');
  };

  return (
    <Pressable
      style={({pressed}) =>
        pressed ? [styles.press, styles.container] : [styles.container]
      }
      onPress={pressHandler}
      onLongPress={longPressHandler}>
      <Text numberOfLines={1} style={[styles.text, {textDecorationLine: done}]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bfaddf',
    width: '100%',
    padding: 16,
    marginVertical: 10,
    justifyContent: 'center',
    borderRadius: 16,
  },
  press: {
    opacity: 0.5,
  },
  text: {
    width: '100%',
    fontSize: 18,
    color: textColor,
    marginHorizontal: 16,
  },
});
