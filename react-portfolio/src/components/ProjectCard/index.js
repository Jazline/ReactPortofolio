import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import "./styles.css";
const ProjectCard = props => {
    console.log(props);
    return (
        <div>
            <ReactBootstrap.Card>
                <ReactBootstrap.Card.Header>{props.tittle}</ReactBootstrap.Card.Header>
                <ReactBootstrap.Card.Body>
                    <ReactBootstrap.Card.Title>{props.title}</ReactBootstrap.Card.Title>
                    <ReactBootstrap.Card.Text>
                       {props.description}
                    </ReactBootstrap.Card.Text>
                    <a href={props.githubLink} className="linkBtn"><ReactBootstrap.Button variant="primary">GitHub Link</ReactBootstrap.Button></a>
                    <a href={props.deployedLink} className="linkBtn"><ReactBootstrap.Button variant="primary">Deployed Link</ReactBootstrap.Button></a>
                    
                </ReactBootstrap.Card.Body>
            </ReactBootstrap.Card>
        </div>
    );
};


export default ProjectCard;