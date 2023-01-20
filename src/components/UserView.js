import React from "react";
import "./UserView.css";

function UserView({projectsArray}) {
  console.log(projectsArray)

  return (
    <div id="container-grid">
        <div id="grid">
            {projectsArray.map((project, index) => (
              <div key={index}>
                <img src={project.url} alt={project.alt}/>
              </div>
            ))}
        </div>
    </div>
  )
}

export default UserView;
