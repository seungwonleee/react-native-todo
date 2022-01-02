import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const AddTodo = () => {
  return (
    <View style={styles.block}>
      <TextInput placeholder="할 일을 입력하세요." style={styles.input} />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
  },
});
