import React, { useState } from "react";
import AdminView from "./components/AdminView";
import UserView from "./components/UserView";
import "./App.css";

function App() {
  const [isAdmin, setIsAdmin] = useState(true);
  const [projects, setProjects] = useState([]);

  const handleAddProject = (newProject) => {
    setProjects((state) => [...state, newProject]);
  };

  const handleChangeView = (isAdmin) => {
    setIsAdmin(isAdmin);
  };

  return (
    <div>
      <button className={isAdmin ? "red" : null } onClick={() => handleChangeView(true)}>ADMIN</button>
      <button className={!isAdmin ? "red" : null } onClick={() => handleChangeView(false)}>USER</button>
      {isAdmin ? <AdminView addProject={(newProject) => handleAddProject(newProject)} /> : <UserView projectArray={projects}/>}
    </div>
  );
}

export default App;
