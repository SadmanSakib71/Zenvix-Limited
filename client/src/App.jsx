import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <main>
      <h1>Task Manager</h1>
      <TaskList />
      <p>Start here</p>
    </main>
  );
}
