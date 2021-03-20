import React from 'react';
import { FormLabel } from 'react-bootstrap';
import { useParams } from 'react-router';
import GoogleMap from '../GoogleMap/GoogleMap';
import './CheckOut.css'

const CheckOut = () => {
    const {ride} = useParams();
    const {rideType, price, imgUrl} = {ride};
    return (
        <div>
            <div className ="container">
            <div className="row mt-5">
                <div className="col-3 check-out">
                    <h3>
                    Välkommen till din destination!!!  {rideType} {price} {imgUrl}
                    </h3>
                    <h3>Ha en trevlig resa!!</h3>
                {/* <form action="" className="book-destination">
                        <FormLabel>Stockholm:{price} </FormLabel>
                        <p ><input className="text-center" type="text" placeholder="Stockholm central"/></p>
                        <p>Pick To {imgUrl}</p>
                        <p><input className="text-center" type="text" placeholder="Södertälje"/></p>
                        <button className="d-grid col-8 mx-auto btn btn-primary">Search</button>
                    </form> */}
                </div>
                <div className="col-9">
                    <GoogleMap></GoogleMap>
                    
                </div>
            </div>
         </div>
        </div>
    );
};

export default CheckOut;