import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';
class Home extends Component {
    render() {
        return (
       <Grid>
           <Jumbotron>
               <h2>Welcome</h2>
               <p>This is a basic website layout using react, react-bootstrap, and react router.</p>
               <Link to="/tutorial">
                 <Button class="btn" > Followed Tutorial </Button>
            </Link>
            </Jumbotron>
        </Grid>
        );
    }
}

export default Home;
