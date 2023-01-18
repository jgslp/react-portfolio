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

  const isNavButton = true;
  
  return (
    <div>
      <nav>
        {/* used template literal to add multiple classes */}
        <button className={ `nav-button ${isAdmin ? "red" : null} `} onClick={() => handleChangeView(true)}>ADMIN</button>
        <button className={`nav-button ${!isAdmin ? "red" : null }`} onClick={() => handleChangeView(false)}>USER</button>
      </nav>
      <main>
        <h2>My Portfolio</h2>
        {isAdmin ? <AdminView addProject={(newProject) => handleAddProject(newProject)} /> : <UserView projectsArray={projects}/>}
      </main>
    </div>
  );
}

export default App;
