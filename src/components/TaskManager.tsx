// src/components/TaskManager.tsx
import React, { useState } from 'react';
import { Task } from '../interface/task';
import TaskItem from './TaskItem';
import style from './tastManager.module.css'

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState('');

  const addTask = () => {
    if (taskTitle.trim() === '') return;

    const newTask: Task = {
      id: Date.now(),  
      title: taskTitle,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskTitle('');
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className={style.container}>
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <div className="mb-4">
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Enter task"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={addTask}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Add Task
        </button>
      </div>
      <div>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskManager;