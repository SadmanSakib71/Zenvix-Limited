import React, { useEffect, useState } from "react";

const TaskList = () => {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("/api/tasks");
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        setTaskList(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  if (error) {
    return <p>Could not load tasks: {error}</p>;
  }

  return (
    <div>
      <h1>All the tasks here</h1>
      {taskList.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <ul>
          {taskList.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
