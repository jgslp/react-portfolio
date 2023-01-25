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
      description: "The Guggenheim is a museum of modern and contemporary art designed by Canadian-American architect Frank Gehry, and is located in Bilbao, Basque Country, Spain. The museum was inaugurated on 18 October 1997 by King Juan Carlos I of Spain, with an exhibition of 250 contemporary works of art. Built alongside the Nervion River, which runs through the city of bilbao to the Cantabrian Sea, it is one of several museums bleonging to the Solomon R. Guggenheim Foundation and features permanennt and visiting exhibits of works by Spanish and international artists. It is one of the largest museums in Spain. (Source: Wikipedia)"
    },
    {
      id: 2,
      name: "El Mercado de la Ribera",
      url: "https://media.istockphoto.com/id/907888456/photo/view-of-ribera-market-at-morning-in-bilbao-spain.jpg?b=1&s=612x612&w=0&k=20&c=E7uq8DWwSWE4CqVLkw8YN8T6ZTDZ8sTdvRYOcJ7jG34=",
      alt: "Bilbao market and estuary",
      description: "The Ribera Market is an indoor market located in Bilbao, the capital of the Basque province of Biscay, in the north of Spain. It is located on the right bank of the Nervion river, next to the Old Town. It has a commercial surface area of 10,000 square meters which makes it the largest covered market in Europe. Inside, there are stalls selling different products, highlighting fresh foods. (Source: Wikipedia)"
    },
    {
      id: 3,
      name: "El Casco Viejo",
      url: "https://media.istockphoto.com/id/1396913634/photo/bilbao-old-town-aerial-drone-view.jpg?b=1&s=612x612&w=0&k=20&c=CIyM6wvaOw_cSGTsF2GrsKWcsCkW4uNmRNj0SjU4ItI=",
      alt: "Aerial view of Bilbao old town",
      description: "The Old Town, also known as The Seven Streets (Alde Zaharra or Zazpi Kaleak in Basique), is found on the right bank of the Nervion river in Bilbao and it is the original nucleus of the town of Bilbao. It is known as Seven Streets given to the first seven streets that formed the neighborhood: Somera, Artekale, Tendería, Belostikale, Carnicería Vieja, Barrenkale and Barrenkale Barrena. In the neighborhood there are also the churches of San Nicolás, San Antón and the Cathedral of Santiago. (Source: Wikipedia)"
    },
    {
      id: 4,
      name: "La Estación de la Concordia",
      url: "https://media.istockphoto.com/id/467203347/es/foto/terreno-vista-de-la-fachada-de-la-estaci%C3%B3n-de-ferrocarril-abando.jpg?s=612x612&w=0&k=20&c=hWyTSZzWFgMKl7Jbd8nrTqO4ox-NVv_AkJ0-Wy1WYSE=",
      alt: "Exterior view of train station",
      description: "The Concordia train station is a terminal railway station in the Biscayan capital, Bilbao, in the Basque Country (Spain). Inaugurated in 1898 as the eastern head of the railway from Bilbao to Santander, and completed in 1902, its unique modernist-style building is one of the architectural jewels of the town. Its façade and characteristic rose window are, along with the Arriaga Theater, landmarks in the Arenal area of ​​Bilbao, and it is considered one of the most genuine heritage sites of Bilbao in the Belle Époque. (Source: Wikipedia) "
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
        <h1>My Bilbao Portfolio</h1>
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
