import { propsToAttrMap } from "@vue/shared";
import React, { useState } from "react";
import "./AdminView.css";


function AdminView(props) {
  const [project, setProject] = useState({
    url: "",
    title: "",
    description: "",
    id: 0
  });

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setProject((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    project.id++;
    console.log(project);
    props.addProject();
    // pass data back up to parent using props.addProject(); added line 26?
    // don't forget to accept the props in the arguments of the function AdminView added line 4?
  };

  return (
    <div>
      <p>Add Project</p>
      <form onSubmit={handleSubmit}>
        <div id="wrapper">
          <div class="inputs">
            <label>Project Title:</label>
            <input name="title"
                value={project.title}
                onChange={(e) => handleInputChange(e)}
             />
          </div>
          <div class="inputs">
            <label>Image URL:</label>
             <input
               name="url"
               value={project.url}
               onChange={(e) => handleInputChange(e)}
             />
          </div>
        </div>
        <label class="textarea">
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
          <button >Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AdminView;
