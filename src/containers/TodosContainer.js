import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Todos from '../components/Todos';
import { changeInput, insert, toggle, remove } from '../modules/todos';

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(
  (state) => ({ input: state.todos.input, todos: state.todos.todos }),
  (dispatch) =>
    bindActionCreators({ changeInput, insert, toggle, remove }, dispatch),
)(TodosContainer);
