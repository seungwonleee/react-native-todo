import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';

const AddTodo = ({onInsert}) => {
  const [text, setText] = useState('');

  const button = (
    <View style={styles.button}>
      <Image source={require('../assets/icons/add_white/add_white.png')} />
    </View>
  );

  const onPress = () => {
    onInsert(text);
    setText('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="할 일을 입력하세요."
        style={styles.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={onPress}
        returnKeyType="done"
      />
      {Platform.select({
        ios: (
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            {button}
          </TouchableOpacity>
        ),
        android: (
          <View style={styles.circleWrapper}>
            <TouchableNativeFeedback onPress={onPress}>
              {button}
            </TouchableNativeFeedback>
          </View>
        ),
      })}
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#ffffff',
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#03a9f4',
    borderRadius: 24,
  },
  circleWrapper: {
    overflow: 'hidden',
    borderRadius: 25,
  },
});
