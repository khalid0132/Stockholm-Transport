import React, { useEffect, useState } from 'react';
// import photo from './Frame.png';
// import photo1 from './Frame-2.png';
// import photo2 from './Frame-1.png';
// import photo3 from './Group.png';
// import { Link } from 'react-router-dom';
// import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import vehicles from '../../Data/Data.json';
import Vehicle from '../Vehicle/Vehicle';

const Home = () => {
   
    const [ride, setRide] = useState([]);
    useEffect(() =>{
        setRide(vehicles)

    }, [])
    return (
        <div className = "custom-bg py-5 home">
        <div className='container'>
  
            <div className='row'>
                {ride.map((vehicle) => (
                    <Vehicle key={vehicle.id} vehicle={vehicle}></Vehicle>
                ))}
            </div>
        </div>
        </div>

    );
};

export default Home;