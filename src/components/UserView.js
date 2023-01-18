import React from "react";
import "./UserView.css";

function UserView({projectsArray}) {
  console.log(projectsArray)

  return (
    <div id="container-grid">
        <div id="grid">
            {projectsArray.map((project) => (
              <div key={project.id}>
                <img src={project.img}/>
              </div>
            ))}
        </div>
    </div>
  )
}

export default UserView;
