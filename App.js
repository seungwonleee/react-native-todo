import React, {useState} from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {id: 1, text: '1번 할 일', done: true},
    {id: 2, text: '2번 할 일', done: false},
    {id: 3, text: '3번 할 일', done: false},
  ]);

  const onInsert = text => {
    // 새로 등록할 항목의 id를 구합니다.
    // 등록된 항목 중에서 가장 큰 id를 구하고, 그 값에 1을 더합니다.
    // 만약 리스트가 비어있다면 1을 id로 사용합니다.
    console.log('test===>', Math.max(...todos.map(todo => todo.id)) + 1);
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };

    setTodos(todos.concat(todo));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding', android: undefined})}
          style={styles.avoid}>
          <DateHead />
          {todos.length > 1 ? <TodoList todos={todos} /> : <Empty />}
          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  avoid: {
    flex: 1,
  },
});

export default App;
