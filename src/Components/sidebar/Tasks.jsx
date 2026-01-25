import "../../styles.css";
import { useState, useEffect, useMemo, useCallback } from "react";

export default function Tasks({ tasks, setTasks, removeTask }) {

    const [showMsg, setShowMsg] = useState(false);
    const [search, setSearch] = useState("");

    const [editTaskId, setEditTaskId] = useState(null);
    const [editInp, setEditInp] = useState("");

    useEffect(() => {
        if (!showMsg) return;
        const timer = setTimeout(() => {
            setShowMsg(false);
        }, 1500)
        return () => clearTimeout(timer);
    }, [showMsg]);

    const startEdit = useCallback((task) => {
        setEditTaskId(task.id);
        setEditInp(task.text || "");
    }, []);

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

    const toggleTaskComplete = useCallback((id) => {
        setTasks(prevTasks => 
            prevTasks.map(task => 
                task.id === id
                ? { ...task, isCompleted: !task.isCompleted }
                : task
            )
        );
    },[setTasks]);

    const filteredTasks = useMemo(() => {
        if (!tasks) return [];
        return tasks.filter(task => 
            task.text?.toLowerCase().includes(search.toLowerCase())
        )
    }, [tasks, search]);

    if (!tasks || tasks.length === 0) {
        return <h1>no tasks yet</h1>
    } 

    return(
        <div>
            <div className="tasks-header">
                <h1>Your tasks</h1>

            <input 
            className="filter-input"
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label = "search tasks..."
            placeholder="search task..."/>
            </div>

            {showMsg && <p className="task-message">Task removed</p>}

            <div className="tasks">
                {filteredTasks.length === 0 && <p>No matching tasks for {search}</p>}
                {filteredTasks.map((task) => (
                <div key={task.id} className="tasks-item">
                    <p>{task.text || ""}</p>

                    <div className="task-actions">
                        {editTaskId !== task.id && (
                            <button onClick={() => startEdit(task)}>edit</button>
                        )}

                    {editTaskId === task.id && (
                        <form onSubmit={onClickEditSubmit} className="edit-form">
                        <input 
                        type="text"
                        value={editInp}
                        onChange={(e) => setEditInp(e.target.value)}
                        placeholder="enter your task..."/>
                        <button type="submit" disabled={editInp.trim() === ""}>submit</button>
                        </form>
                        )}

                    <button onClick={() => {removeTask(task.id); setShowMsg(true);}}>remove</button>   
                    <input 
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={() => toggleTaskComplete(task.id)}/>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}