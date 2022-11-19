import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import TodoButton from '../components/TodoButton';
import {deleteColor, doneColor, textColor} from '../constants/Colors';
import {deleteBusinessTask} from '../redux/businessSlice';
import {deletePersonalTask} from '../redux/personalSlice';

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const {text, id} = route.params;

  const deleteHandler = () => {
    dispatch(deletePersonalTask({id: id}));

    dispatch(deleteBusinessTask({id: id}));

    navigation.goBack();
  };

  const doneHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.btnContainer}>
        <TodoButton bgColor={deleteColor} onPress={deleteHandler}>
          Delete
        </TodoButton>
        {/* <TodoButton bgColor={doneColor} onPress={doneHandler}>
          Done
        </TodoButton> */}
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  text: {
    fontSize: 20,
    color: textColor,
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
  },
  btnContainer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
