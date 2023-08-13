import React from 'react';
import './Projects.css';
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';

const Projects = () => {
    return (
        <div className="projects">
            <h1>My Projects</h1>
            <div className="project-list">
                <div className="project">
                    <img src={project1} alt="Project 1"/>
                    <h2>Project 1</h2>
                    <p>Description of Project 1</p>
                </div>
                <div className="project">
                    <img src={project2} alt="Project 2"/>
                    <h2>Project 2</h2>
                    <p>Description of Project 2</p>
                </div>
                <div className="project">
                    <img src={project3} alt="Project 3"/>
                    <h2>Project 3</h2>
                    <p>Description of Project 3</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;