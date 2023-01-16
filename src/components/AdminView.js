import React, { useState } from "react";

function AdminView() {
  const [project, setProject] = useState({
    url: "",
    title: "",
    description: "",
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
    console.log("form button clicked!");
    // pass data back up to parent using props.addProject();
    // don't forget to accept the props in the arguments of the function AdminView
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
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AdminView;
