import React from 'react';
import { Link } from 'react-router-dom';

const Vehicle = ({vehicle}) => {
    const {id, transport, image} = vehicle;
    return (
        <div className='col-md-3 col-sm-6 p-2'>
        <Link to={`/destination/${id}`}>
            <div style = {{height: '100%'}} className='card text-center bg-success custom-card'>
                <img
                    className='card-img-top p-5'
                    src={image}
                    alt={transport}
                />
                <div className='card-title'>
                    <h5 className='text-dark text-uppercase text-mod'>{transport}</h5>
                </div>
            </div>
        </Link>
    </div>
    );
};

export default Vehicle;