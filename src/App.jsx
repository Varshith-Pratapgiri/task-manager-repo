import { useState, useEffect, useRef } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AppRouter from "./AppRouter";
import "./styles.css";

export default function App() {
  const isFirstRender = useRef(true)

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
  });
  

  const addTask = (text) => {
    if (!text.trim()) return;

    setTasks(prev => [
      ...prev,
      { id: Date.now(), text: text.trim() }
    ]);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])


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