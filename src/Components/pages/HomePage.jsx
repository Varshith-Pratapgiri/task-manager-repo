import { useEffect, useState } from "react";
import "../../styles.css";

export default function HomePage({tasks, setTasks}) {

  const [inp, setInp] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (!message) return; 

    const timer = setTimeout(() => {
      setMessage(null);
    }, 1500);
    return () => clearTimeout(timer);
  }, [message]);

  const addTask = () => {
    const trimmedInp = inp.trim();

    if (trimmedInp === "") return;

    const isDuplicate = tasks.some(task => task.text?.toLowerCase() === trimmedInp.toLowerCase());

    if (isDuplicate) {
      setMessage("Task already added!");
      return;
    }
    const newTask = {
      id: Date.now(),
      text: trimmedInp,
      isCompleted: false
    }
    setTasks(prevTasks => [...prevTasks, newTask]);
    setInp("");
    setMessage("task added successfully");

  }

    return(
        <div className="home-page">
            <h1>Notes</h1>
      <p>Enter your task</p>
      <input 
      type="text"
      name="task"
      value={inp}
      onChange={(e) => setInp(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          addTask();
        }
      }}
      placeholder="enter..."/>
      <button onClick={addTask}>submit</button>
       {message && <p>{message}</p>}
        </div>
    );
}