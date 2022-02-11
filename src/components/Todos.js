import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

const TodoList = React.memo(function({ todos, onToggle, onRemove }) {
  console.log('rendering...');
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
});

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onInsert(input);
          onChangeInput('');
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => onChangeInput(e.target.value)}
        ></input>
        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </div>
  );
};

export default Todos;
