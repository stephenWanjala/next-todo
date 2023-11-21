'use client'
import AddTodo from '@/components/AddTodo';
import TodoList from '@/components/TodoList';
import TodoItem from '@/models/TodoItem';
import { useState } from 'react';

export default function Home() {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

  const handleToggle = (id: number) => {
    setTodoItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setTodoItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleAddTodo = (text: string) => {
    const newItem: TodoItem = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodoItems([...todoItems, newItem]);
  };

  return (
    <section className="min-h-screen bg-gray-200">
    <div className="container py-5 min-h-full">
      <div className="flex justify-center items-center min-h-full">
        <div className="xl:col-10">

          <div className="bg-white-800 shadow-lg rounded-lg p-4" style={{ borderRadius: '15px' }}>
            <div className="text-2xl font-bold mb-2 p-5">

              <h6 className="mb-3">Next Todos</h6>

              <AddTodo onAdd={handleAddTodo} />

              <TodoList todos={todoItems} onToggle={handleToggle} onRemove={handleRemove} />

            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
  )
}
