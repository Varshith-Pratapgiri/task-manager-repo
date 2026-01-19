import "../../styles.css";
import { useState, useEffect } from "react";

export default function Tasks({ tasks, setTasks, removeTask }) {

    const [showMsg, setShowMsg] = useState(false);

    const [editTaskId, setEditTaskId] = useState(null);
    const [editInp, setEditInp] = useState("");

    useEffect(() => {
        if (!showMsg) return;
        const timer = setTimeout(() => {
            setShowMsg(false);
        }, 1500)
        return () => clearTimeout(timer);
    }, [showMsg]);

    if (!tasks || tasks.length === 0) {
        return <h1>no tasks yet</h1>
    } 

    const startEdit = (task) => {
        setEditTaskId(task.id);
        setEditInp(task.text);
    };

    const onClickEditSubmit = (e) => {
        e.preventDefault();
        if (editInp.trim() === "") return;
        setTasks((prevTasks) => 
        prevTasks.map((task) => 
        task.id === editTaskId
        ? { ...task, text:editInp.trim()}
        :task
    )
);
        setEditTaskId(null);
        setEditInp("");
    };

    return(
        <div>
            <h1>Your tasks</h1>
            {showMsg && <p>Task removed</p>}

            <div className="tasks">
                {tasks.map((task) => (
                <div key={task.id} className="tasks-item">
                    <p>{task.text}</p>

                    <div className="task-actions">
                    <button onClick={() => startEdit(task)}>edit</button>

                    {editTaskId === task.id && (
                        <form onSubmit={onClickEditSubmit} className="edit-form">
                        <input 
                        type="text"
                        value={editInp}
                        onChange={(e) => setEditInp(e.target.value)}
                        placeholder="enter your task..."/>
                        <button type="submit">submit</button>
                        </form>
                        )}
                        
                    <button onClick={() => {removeTask(task.id); setShowMsg(true);}}>remove</button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}