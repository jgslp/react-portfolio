import React from "react";
import { useState} from "react";
import "./UserView.css";

function UserView({projectsArray}) {
  //console.log(projectsArray)
  const [featured, setFeatured] = useState({});
  const [showFeatured, setShowFeatured] = useState(false);

function handleClick(id) {
  let featured = projectsArray.find((project) => project.id === id);
  setFeatured(featured);
  setShowFeatured(true);
}

  return (
    <div>
      {/* style set to hide featured section until img is clicked */}
      <div id="featured" style={{display: showFeatured ? "flex" : "none"}} > 
          <img id="featured-img" src={featured.url} className="center"/>
          <div id="featured-text">
            <p id="featured-name">{featured.name}</p>
            <p id="featured-desc">{featured.description}</p>
          </div>
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
