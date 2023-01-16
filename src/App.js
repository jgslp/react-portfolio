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
      <button onClick={() => handleChangeView(true)}>ADMIN</button>
      <button onClick={() => handleChangeView(false)}>USER</button>
      <AdminView addProject={(newProject) => handleAddProject(newProject)} />
    </div>
  );
}

export default App;
