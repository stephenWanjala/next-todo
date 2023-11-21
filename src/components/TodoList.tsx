import React from 'react';
import Todo from './Todo';
import TodoItem from '@/models/TodoItem';

interface TodoListProps {
  todos: TodoItem[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  return (
    <ul className="list-group mb-0">
      {todos.map((item) => (
        <Todo
          key={item.id}
          id={item.id}
          text={item.text}
          completed={item.completed}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};

export default TodoList;
