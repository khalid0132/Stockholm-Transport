import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Rider.css'

const Rider = ({ride}) => {
    console.log(ride)
    const {imgUrl, rideType} = ride;
    const history = useHistory()
    const handleBook = (ride) => {
        history.push(`/book/${rideType}`);
    }
    // const handleBook = () =>{
    //     console.log('Riderrrr')
    // }
    return (
        <div onClick={handleBook} className="ride-design">
            {/* <Card className="card-design">
                <Card.Img variant="top" src={imgUrl} />
                    <Card.Body>
                        <Card.Title>{rideType}</Card.Title>
                        <Card.Text>${ride.price}</Card.Text>
                    </Card.Body>
            </Card> */}

            <img src={imgUrl} alt=""/>
            <h3>{rideType}</h3>
            <p>SEK.{ride.price} /pers</p>
            
        </div>
    );
};

export default Rider;