import React, {useState} from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import TodoItem from '../components/TodoItem';
import {doneColor, personalColor} from '../constants/Colors';
import {addPersonalTask} from '../redux/personalSlice';
const Personal = () => {
  const tasks = useSelector(state => state.personalTasks);

  const [enteredGoalsText, setEnteredGoalsText] = useState('');
  const dispatch = useDispatch();

  const submitHandler = () => {
    if (enteredGoalsText.trim().length === 0) {
      Alert.alert('Enter a task before adding !!');
      setEnteredGoalsText('');
      return;
    }
    dispatch(
      addPersonalTask({
        personalTask: enteredGoalsText,
      }),
    );
    setEnteredGoalsText('');
  };

  const inputHandler = enteredText => {
    setEnteredGoalsText(enteredText);
  };

  return (
    <View style={[styles.todoContainer, styles.PersonalScreen]}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="E.g. Coding somethings..."
          placeholderTextColor="#fff"
          onChangeText={inputHandler}
          value={enteredGoalsText}
        />

        <View style={styles.btnContainer}>
          <Pressable
            style={({pressed}) =>
              pressed ? [styles.press, styles.submitBtn] : [styles.submitBtn]
            }
            onPress={submitHandler}>
            <Text style={styles.submitBtnText}>Submit</Text>
          </Pressable>
        </View>
      </View>

      <ScrollView style={styles.todoContainer}>
        {tasks.map(task => (
          <TodoItem key={task.id} text={task.name} id={task.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Personal;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderRadius: 16,
    marginVertical: 24,
    marginRight: 14,
    padding: 10,
    fontSize: 18,
    color: '#fff',
    borderColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtn: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: doneColor,
  },
  submitBtnText: {
    color: '#fff',
    fontSize: 20,
  },
  press: {
    opacity: 0.5,
  },
  todoContainer: {
    flex: 1,
    padding: 10,
  },
  PersonalScreen: {
    backgroundColor: personalColor,
  },
});
