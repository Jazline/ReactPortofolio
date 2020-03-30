import React, { Component } from 'react';
import projectData from '../../data.json';
import ProjectCard from '../ProjectCard';
class Projects extends Component {
    render() {
        console.log(projectData)
        return (
            <div>
                <h2>Projects</h2>
                {projectData.map(item => (
                    <ProjectCard
                        key={item.id}
                        tittle={item.title}
                        githubLink ={item.githubLink}
                        deployedLink={item.deployedLink}
                        description={item.description}
                    />

                ))}

            </div>
        );
    }
}

export default Projects;
