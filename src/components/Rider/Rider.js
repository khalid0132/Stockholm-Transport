import React from 'react';
import { useHistory } from 'react-router';
import './Rider.css'

const Rider = ({ride}) => {
    console.log(ride)
    const {imgUrl, rideType} = ride;
    const history = useHistory()
    const handleBook = (rideType) => {
        history.push(`/book/${rideType}`);
    }
    // const handleBook = () =>{
    //     console.log('Riderrrr')
    // }
    return (
        <div onClick={handleBook} className="ride-design">
            {/* <h1>Rider is here</h1> */}
            <img src={imgUrl} alt=""/>
            <h3>{rideType}</h3>
            
        </div>
    );
};

export default Rider;