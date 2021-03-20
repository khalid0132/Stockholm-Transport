import React from 'react';
import photo from './Frame.png';
import photo1 from './Frame-2.png';
import photo2 from './Frame-1.png';
import photo3 from './Group.png';
// import { Link } from 'react-router-dom';
// import { Container, Row, Col } from 'react-bootstrap';
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
            imgUrl: photo,
            seat: 2,
            rideType: 'MOTORCYKEL',
            price: 50
        },
        {
            title: 'Car',
            description: 'Car ride',
            imgUrl: photo1,
            bed: 1,
            seat: 4,
            rideType: 'BIL',
            price: 100
        },
        {
            title: 'Bus',
            description: ' Bus ride',
            imgUrl: photo2,
            bed: 2,
            seat: 34,
            rideType: 'BUSS',
            price: 60
        },
        {
            title: 'Train',
            description: ' Train Ride',
            imgUrl: photo3,
            bed: 2,
            seat: 240,
            rideType: 'TÅG',
            price: 80
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
          
        </div>
    );
};

export default Home;