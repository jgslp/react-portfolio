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
      url: "https://images.pexels.com/photos/7195793/pexels-photo-7195793.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Exterior of Guggenheim modern art museum",
      description: "Modern art musem"
    },
    {
      id: 2,
      name: "Mercado de la Ribera",
      url: "https://media.istockphoto.com/id/907888456/photo/view-of-ribera-market-at-morning-in-bilbao-spain.jpg?b=1&s=612x612&w=0&k=20&c=E7uq8DWwSWE4CqVLkw8YN8T6ZTDZ8sTdvRYOcJ7jG34=",
      alt: "Bilbao market and estuary",
      description: "Historic marketplace"
    },
    {
      id: 3,
      name: "Casco Viejo",
      url: "https://media.istockphoto.com/id/1396913634/photo/bilbao-old-town-aerial-drone-view.jpg?b=1&s=612x612&w=0&k=20&c=CIyM6wvaOw_cSGTsF2GrsKWcsCkW4uNmRNj0SjU4ItI=",
      alt: "Aerial view of Bilbao old town",
      description: "An aerial view of the old town"
    },
    {
      id: 4,
      name: "Estación de la Concordia",
      url: "https://media.istockphoto.com/id/467203347/es/foto/terreno-vista-de-la-fachada-de-la-estaci%C3%B3n-de-ferrocarril-abando.jpg?s=612x612&w=0&k=20&c=hWyTSZzWFgMKl7Jbd8nrTqO4ox-NVv_AkJ0-Wy1WYSE=",
      alt: "Exterior view of train station",
      description: "Train station"
    },
  ]);
  const [id, setID] = useState(projects.length + 1);
  

  // created a function that increments id
  const handleIncrementId = () => {
    setID((prevID) => (prevID + 1));
  }

  const handleAddProject = (newProject) => {
    setProjects((state) => [...state, {...newProject, id}]);
    handleIncrementId()
    setIsAdmin(false);
  };

  const handleChangeView = (isAdmin) => {
    setIsAdmin(isAdmin);
  };
  
  return (
    <div>
      <nav>
        {/* used template literal to add multiple classes */}
        {/* could also do onClick={() => setIsAdmin(true)} */}
        {/* could also set className={isAdmin && "red" }*/}
        <button className={ `nav-button ${isAdmin ? "red" : null} `} onClick={() => handleChangeView(true)}>ADMIN</button>
        <button className={`nav-button ${!isAdmin ? "red" : null }`} onClick={() => handleChangeView(false)}>USER</button>
      </nav>
      <main>
        <h1>My Portfolio</h1>
        {isAdmin ? (
          <AdminView 
            addProject={(newProject) => handleAddProject(newProject)} /> 
        ) : (
            <UserView projectsArray={projects}/> // userView will expect prop with the value of {projects}
        )}
      </main>
    </div>
  );
}

export default App;
