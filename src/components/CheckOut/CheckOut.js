import React from 'react';
import { FormLabel } from 'react-bootstrap';
import GoogleMap from '../GoogleMap/GoogleMap';

const CheckOut = (props) => {
    return (
        <div>
            <div className ="container">
            <div className="row mt-5">
                <div className="col-3 ">
                <form action="" className="book-destination">
                        <FormLabel>Stockholm: </FormLabel>
                        <p ><input className="text-center" type="text" placeholder="Stockholm central"/></p>
                        <p>Pick To</p>
                        <p><input className="text-center" type="text" placeholder="Södertälje"/></p>
                        <button className="d-grid col-8 mx-auto btn btn-primary">Search</button>
                    </form>
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