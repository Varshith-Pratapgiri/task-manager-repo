import { useEffect, useState } from "react";
import "../../styles.css";
import Tasks from "../sidebar/Tasks";

export default function HomePage({tasks, setTasks}) {

  const [inp, setInp] = useState("");
  const [msg, setMsg] = useState("");
  const [showMsg, setShowMsg] = useState(false)

  useEffect(() => {
    if (!showMsg || !msg) return; 

    const timer = setTimeout(() => {
      setShowMsg(false), 
      setMsg("")
    }, 1500);
    return () => clearTimeout(timer);
  }, [showMsg, msg]);

  const addTask = () => {
    if (inp.trim() === "") return
    if (tasks.some(task => task.text.toLowerCase() === inp.trim().toLowerCase())) {
      setShowMsg(true);
      setMsg("Task already added!")
      return;
    }
    const newTask = {
      id : Date.now(),
      text : inp.trim(),
      isCompleted : false
    };
    setTasks(prevTask => [...prevTask, newTask]);
    setInp("")
    setShowMsg(true)
    setMsg("task added successfully!")
  };
  

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
        if (e.key == "Enter") {
          addTask();
        }
      }}
      placeholder="enter..."/>
      <button onClick={addTask}>submit</button>
       {showMsg && <p>{msg}</p>}
        </div>
    );
}