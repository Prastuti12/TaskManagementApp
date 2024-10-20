

import { useState, useEffect } from "react";
import TaskModal from "../components/TaskModal";
import TaskListing from "../components/TaskListing";
import styles from "./styles.module.css";

export default function Task({ allTasks }) {
  const [tasks, setTasks] = useState(allTasks);
  const [editingTask, setEditingTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  
  const sortTasks = (tasksToSort) => {
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    return tasksToSort
      .slice()
      .sort((a, b) => {
        
        if (a.completed !== b.completed) {
          return a.completed ? 1 : -1;
        }
      
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      });
  };

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );


  useEffect(() => {
    setTasks(sortTasks(tasks));
  }, [tasks]);

  const addOrUpdateTask = (task) => {
    if (editingTask) {
     
      setTasks(
        tasks.map((t) => (t.id === editingTask.id ? { ...t, ...task } : t))
      );
      setEditingTask(null);
    } else {
      const newTask = {
        id: Date.now(),
        ...task,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
    closeModal(); 
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (task) => {
    setEditingTask(task);
    setIsModalOpen(true); 
  };

  const openAddTaskModal = () => {
    setEditingTask(null); 
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false); 
    setEditingTask(null); 
  };

  return (
    <div className={styles.main}>
      <div className={styles.navbarSection}>
        <h1>All Tasks</h1>
        <div className={styles.addTaskSection}>

        <input
          className={styles.searchBar}
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={openAddTaskModal} className={styles.addTaskButton}>
          Add Task
        </button>
        </div>
      </div>
      <div className={styles.listing}>
        <TaskListing
          tasks={filteredTasks}
          onDelete={deleteTask}
          onToggleComplete={toggleComplete}
          onEdit={editTask}
        />
        {isModalOpen && (
          <TaskModal
            task={editingTask}
            onClose={closeModal}
            onSubmit={addOrUpdateTask}
          />
        )}
      </div>
    </div>
  );
}
