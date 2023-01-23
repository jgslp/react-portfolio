import React, { useState } from "react";
import "./AdminView.css";


function AdminView(props) {
  const [project, setProject] = useState({
    url: "",
    title: "",
    description: "",
  });

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

   // console.log({value, name})

    setProject((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //setProject((project) => ({...project, id:props.length}));
    (project.url === "") 
    ? (alert ("Please enter a URL"))
    : (props.addProject(project));
   
    //console.log(project);
    //console.log(props);
    // pass data back up to parent using props.addProject(); 
    // don't forget to accept the props in the arguments of the function AdminView 
  };

  return (
    <div>
      <p>Add Project</p>
      <form onSubmit={handleSubmit}>
        <div id="wrapper">
          <div className="inputs">
            <label>Project Title:</label>
            <input name="title"
                value={project.title}
                onChange={(e) => handleInputChange(e)}
             />
          </div>
          <div className="inputs">
            <label>Image URL:</label>
             <input
               name="url"
               value={project.url}
               onChange={(e) => handleInputChange(e)}
             />
          </div>
        </div>
        <label className="textarea">
          Project Description:
          <textarea
            rows="4"
            cols="50"
            name="description"
            value={project.description}
            onChange={(e) => handleInputChange(e)}
            placeholder="Enter brief description here"
          />
        </label>
        <div id="submit">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AdminView;
