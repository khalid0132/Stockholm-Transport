import React from 'react';
import photo from './Frame.png';
import photo1 from './Frame-2.png';
import photo2 from './Frame-1.png';
import photo3 from './Group.png';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import Rider from '../Rider/Rider';
const Home = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }
    const riders = [
        {
            title: 'Bike',
            description: 'Bike ride.',
            imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61FMbYqZVxL._SL1080_.jpg',
            // bed: 1,
            capacity: 1,
            rideType: 'bike',
            avatar: 'S',
            price: 50
        },
        {
            title: 'Car',
            description: 'Car ride',
            imgUrl: 'https://2sleepylagoonter.info/sites/autocar.co.uk/files/styles/body-image/public/1-corvette-stingray-c8-2019-fd-hr-hero-front_0.jpg?itok=SEYe_vLy',
            bed: 1,
            capacity: 2,
            rideType: 'car',
            avatar: 'D',
            price: 149
        },
        {
            title: 'Bus',
            description: ' Bus ride',
            imgUrl: 'https://staff.ki.se/sites/default/files/styles/article_full_width/public/qbank/bild_westin_buss_002-custom.jpg?itok=2gUjfGDG',
            bed: 2,
            capacity: 4,
            rideType: 'bus',
            avatar: 'F',
            price: 199
        },
        {
            title: 'Train',
            description: ' Train Ride',
            imgUrl: 'https://lp-cms-production.imgix.net/2021-01/Egypt%20high%20speed%20train.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850',
            // imgUrl: {photo3},
            bed: 2,
            capacity: 4,
            rideType: 'train',
            avatar: 'F',
            price: 199
        }
    ]
    return (
        <div className="header-top">
            <p><img src="imgUrl" alt=""/></p>
             <div style={style}>
            {
                riders.map(ride => <Rider key={ride.rideType} ride={ride}></Rider>)
            }
        </div>
            {/* <Container className="rider">
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
        </Container> */}
        </div>
    );
};

export default Home;