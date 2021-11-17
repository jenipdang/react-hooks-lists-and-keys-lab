import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technologiesList = technologies.map((technogy) => (
    <span key={technogy}>{technogy}</span>
  ))

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologiesList}
      </div>
    </div>
  );
}

export default ProjectItem;
