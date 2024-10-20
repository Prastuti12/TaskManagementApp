// components/TaskListing.js
import styles from "./styles.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function TaskListing({
  tasks,
  onDelete,
  onToggleComplete,
  onEdit,
}) {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className={styles.listCard}>
      {tasks?.map((task) => (
        <div key={task.id} className={styles.taskCard}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p className={styles[task.priority]}>Priority: {task.priority}</p>
          <div className={styles.functionalities}>
            <div>
              <div className={styles.toggleSwitchWrapper}>
                <span className={styles.statusText}>
                  {task.completed ? "Completed" : "Pending"}
                </span>
                <label className={styles.toggleSwitch}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggleComplete(task.id)}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>
            <div className={styles.taskActions}>
              <i
                className={`fas fa-pencil-alt ${styles.editIcon}`}
                onClick={() => onEdit(task)}
                title="Edit"
              ></i>
              <i
                className={`fas fa-trash ${styles.deleteIcon}`}
                onClick={() => onDelete(task.id)}
                title="Delete"
              ></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
