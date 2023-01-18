import { propsToAttrMap } from "@vue/shared";
import React, { useState } from "react";

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
      <form onSubmit={handleSubmit}>
        <label>
          Project Title
          <input
            name="title"
            value={project.title}
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <label>
          Image URL
          <input
            name="url"
            value={project.url}
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <label>
          Project Description
          <input
            name="description"
            value={project.description}
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AdminView;
