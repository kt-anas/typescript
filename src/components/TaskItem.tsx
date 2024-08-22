// src/components/TaskItem.tsx
import React from 'react';
import { Task } from '../interface/task';
import styles from './TaskItem.module.css';

interface TaskItemProps {
  task: Task;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className={styles.taskItem}>
      <div className={styles.taskDetails}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className={styles.taskCheckbox}
        />
        <span className={`${styles.taskTitle} ${task.completed ? styles.completed : ''}`}>
          {task.title}
        </span>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className={styles.deleteButton}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
