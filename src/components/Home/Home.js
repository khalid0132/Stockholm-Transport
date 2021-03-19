import React from 'react';
import photo from './Frame.png';
import photo1 from './Frame-2.png';
import photo2 from './Frame-1.png';
import photo3 from './Group.png';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';
const Home = () => {
    return (
        <div className="header-top">
           
            <Container className="rider">
            <Row>
                <Col md-4 className ="bike">
                    <div >
                    <img src={photo} alt="" />
                    <h2 className ="mt-5">Bike</h2>
                    </div>
                </Col>
                <Col md-4 className ="bike">
                    <div >
                    <img src={photo1} alt="" />
                    <h2 className ="mt-5">Car</h2>
                    </div>
                </Col>
                <Col md-4 className ="bike">
                    <div >
                    <img src={photo2} alt="" />
                    <h2 className ="mt-5">Bus</h2>
                    </div>
                </Col>
                <Col md-4 className ="bike">
                    <div >
                    <img src={photo3} alt="" />
                    <h2 className ="mt-5">Train</h2>
                    </div>
                </Col>
               
            </Row>
        
        
        </Container>
        </div>
    );
};

export default Home;