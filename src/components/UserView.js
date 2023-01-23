import React from "react";
import { useState} from "react";
import "./UserView.css";

function UserView({projectsArray}) {
  //console.log(projectsArray)
  const [featured, setFeatured] = useState({});

function handleClick(id) {
  let featured = projectsArray.find((project) => project.id === id);
  setFeatured(featured);
}

  return (
    <div>
      <div id="featured">
          <img id="featured-img" src={featured.url}/>
          <p id="featured-name">{featured.name}</p>
          <p id="featured-desc">{featured.description}</p>
      </div>
      <div id="container-grid">
          <div id="grid">
              {projectsArray.map((project) => (
                <div key={project.id}>
                  <img className="grid-img" src={project.url} alt={project.alt} onClick={() => handleClick(project.id)}/>
                </div>
              ))}
         </div>
     </div>
    </div>
  )
}

export default UserView;
