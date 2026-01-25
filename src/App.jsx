import { useState, useEffect, useRef } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AppRouter from "./AppRouter";
import "./styles.css";

export default function App() {
  const isFirstRender = useRef(true)

  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("tasks");
      return savedTasks? JSON.parse(savedTasks): [];
    }
    catch (err) {
      console.error("Error loading tasks", err);
      return [];
    }
  });

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const timeoutId = setTimeout(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
  }, 500);
  return () => {
    clearTimeout(timeoutId);
  }
}, [tasks]);


  const removeTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="app-container">
      <Header />
      <main className="app-content">
        <AppRouter
        tasks={tasks}
        setTasks={setTasks}
        removeTask={removeTask}
      />
      </main>
      <Footer />
    </div>
  );
}