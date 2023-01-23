import React from "react";
import "./UserView.css";

function UserView({projectsArray}) {
  console.log(projectsArray)
  //const [featured, setFeatured] = useState({});

function handleClick(id) {
  let selected = projectsArray.find((item) => item.id === id);
  //setFeatured(selected);
}

  return (
    <div>
      <div id="featured">

      </div>
      <div id="container-grid">
          <div id="grid">
              {projectsArray.map((project) => (
                <div key={project.id}>
                  <img className="grid-img" src={project.url} alt={project.alt}/>
                </div>
              ))}
         </div>
     </div>
    </div>
  )
}

export default UserView;
