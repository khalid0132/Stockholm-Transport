import React from 'react';
import { FormLabel } from 'react-bootstrap';
import { useParams } from 'react-router';
import GoogleMap from '../GoogleMap/GoogleMap';
import './CheckOut.css'

const CheckOut = (props) => {
    const {price, imgUrl, rideType} = useParams();
    return (
        <div>
            <div className ="container">
            <div className="row mt-5">
                <div className="col-3 check-out">
                    <h3>
                        Welcome to your destination!!!  {rideType} {price} {imgUrl}
                    </h3>
                    <h3>Have a nice trip!</h3>
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