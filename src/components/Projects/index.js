import React from 'react';

function Projects(props) {
    const{ projects = [] } = props
    return(
        <>
        <h1>Here are some of my Projects</h1>
        {projects.map((project) => (
            <div className="project-card">
                <div class="container">
                <h2>{project.title}</h2>
                <h3>{project.emoji}</h3>
                <a href={project.url}>Check out the Repo </a>
                <span>|| </span>
                <a href={project.deployed}>Check out the Deployed</a>
                <hr></hr>
                </div>
            </div>
        ))}
        </>
    );
}

export default Projects;