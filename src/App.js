import React, { useState } from "react";
import AdminView from "./components/AdminView";
import UserView from "./components/UserView";
import "./App.css";

function App() {
  const [isAdmin, setIsAdmin] = useState(true);
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Guggenheim",
      img: "https://images.pexels.com/photos/7195793/pexels-photo-7195793.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Modern art musem"
    },
    {
      id: 2,
      name: "Mercado de la Ribera",
      img: "https://media.istockphoto.com/id/907888456/photo/view-of-ribera-market-at-morning-in-bilbao-spain.jpg?b=1&s=612x612&w=0&k=20&c=E7uq8DWwSWE4CqVLkw8YN8T6ZTDZ8sTdvRYOcJ7jG34=",
      description: "Historic marketplace"
    },
    {
      id: 3,
      name: "Casco Viejo",
      img: "https://media.istockphoto.com/id/1396913634/photo/bilbao-old-town-aerial-drone-view.jpg?b=1&s=612x612&w=0&k=20&c=CIyM6wvaOw_cSGTsF2GrsKWcsCkW4uNmRNj0SjU4ItI=",
      description: "An aerial view of the old town"
    },
    {
      id: 4,
      name: "Estación de la Concordia",
      img: "https://media.istockphoto.com/id/467203347/es/foto/terreno-vista-de-la-fachada-de-la-estaci%C3%B3n-de-ferrocarril-abando.jpg?s=612x612&w=0&k=20&c=hWyTSZzWFgMKl7Jbd8nrTqO4ox-NVv_AkJ0-Wy1WYSE=",
      description: "Train station"
    },
  ]);

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
        <h1>My Portfolio</h1>
        {isAdmin ? <AdminView addProject={(newProject) => handleAddProject(newProject)} /> : <UserView projectsArray={projects}/>}
      </main>
    </div>
  );
}

export default App;
