import { useEffect, useState } from "react";
import "../../styles.css";

export default function HomePage({tasks, setTasks}) {

  const [inp, setInp] = useState("");
  const [showMsg, setShowMsg] = useState(false)

  const addTask = () => {
    if (inp.trim() === "") return
    
    const newTask = {
      id : Date.now(),
      text : inp.trim()
    };
    setTasks(prevTask => [...prevTask, newTask]);
    setInp("")
    setShowMsg(true)
  };

  useEffect(() => {
    if (!showMsg) return 

    const timer = setTimeout(() => setShowMsg(false), 1500);
    return () => clearTimeout(timer);
  }, [showMsg])

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
       {showMsg && <p>task added</p>}
        </div>
    );
}