import { Routes, Route, useLocation } from "react-router-dom";

import HomePage from "./Components/pages/HomePage";
import ProfilePage from "./Components/pages/ProfilePage";
import Tasks from "./Components/sidebar/Tasks";
import Settings from "./Components/sidebar/Settings";

export default function AppRouter({ tasks, setTasks, removeTask }) {
  const location = useLocation();
  const state = location.state;


  return (
    <>
    <Routes location={state?.backgroundLocation || location}>
      <Route
        path="/"
        element={<HomePage tasks={tasks} setTasks={setTasks} />}
      />
      <Route path="/tasks" element={<Tasks tasks={tasks} setTasks={setTasks} removeTask={removeTask} />}/>
      <Route path="/settings" element={<Settings />}/>
      <Route path="/profile" element={<ProfilePage />}/>
      </Routes>

      {state?.backgroundLocation && (
      <Routes>
      <Route path="/profile" element={<ProfilePage />}/>
    </Routes>
      )}
    </>
  );
}