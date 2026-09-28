import React, { useEffect, useState } from "react";

const TaskList = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    async function getData() {
      const url = "http://localhost:3001/api/tasks";

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error.message);
      }
    }

    getData();
  }, []);

  return (
    <div>
      <h1>All the tasks here</h1>
    </div>
  );
};

export default TaskList;
