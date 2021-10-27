import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({
  todos, handleChangeProps, deleteTodoProps, setUpdate,
}) => (

  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        list={todo}
        handleChangeProps={handleChangeProps}
        deleteTodoProps={deleteTodoProps}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
    },
  )).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};
export default TodosList;
