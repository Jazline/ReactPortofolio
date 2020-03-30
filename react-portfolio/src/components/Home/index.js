import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
class Home extends Component {
    render() {
        return (
            <div>
                <ReactBootstrap.Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
  </p>
                    <p>
                        <ReactBootstrap.Button variant="primary">Learn more</ReactBootstrap.Button>
                    </p>
                </ReactBootstrap.Jumbotron>
            
            </div>
        );
    }
}

export default Home;