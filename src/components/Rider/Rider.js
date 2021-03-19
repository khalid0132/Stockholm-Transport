import React from 'react';
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
            
            <img src={imgUrl} alt=""/>
            <h3>{rideType}</h3>
            
        </div>
    );
};

export default Rider;