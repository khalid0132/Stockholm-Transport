import { useParams } from 'react-router';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import vehicles from '../../Data/Data.json'
import GoogleMap from '../GoogleMap/GoogleMap';

const Destination = () => {
    const {id} = useParams();
    const [destination] = useState({from : '', to: '', date: ''});

    // const selectYourJourney = (e) =>{
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     const newLocation = {...location};
    //     newLocation[name] = value;
    //     setLocation(newLocation);
    // }

    // const showSearchPath = (e) =>{
    //     const data = fakeData.find(props => props.transport === transport);
    //     const newLocation = {...location};
    //     newLocation.image = data.image;
    //     newLocation.transport = data.transport;
    //     newLocation.price = data.price;
    //     newLocation.capacity = data.capacity;
    //     newLocation.isSearched = true;
    //     setLocation(newLocation);
    //     e.preventDefault();

    // }

    
    const handleBlur = (event) =>{

        console.log(event.target.name, event.target.value);

        if (event.target.name === 'from') {
            destination.from = event.target.value;
        }
        if (event.target.name === 'to') {
            destination.to = event.target.value;
        }
        if (event.target.name === 'date') {
            destination.date = event.target.value;
        }
        if (event.target.name === 'time') {
            destination.time = event.target.value;
        }

    };

    const [search, setSearch] = useState(false);
    const searchHandler = (event) =>{
        setSearch(!search);
        event.preventDefault();
    }
    const [vehicle, setVehicle] = useState([]);

    useEffect(() =>{
        // setVehicle(vehicles[id])
        const info = vehicles.filter((type)=>id == type.id)
        setVehicle(info[0]);
    },[id])

    return (
  
        <div className='container py-3'>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                <div className='col-lg-6'>
                    <div className='bg-dark p-3 rounded text-white text-center'>
                        <h2>{vehicle.transport} Ride</h2>
                    </div>
                    <br />
                    {!search ? (
                        <div className='bg-info p-3 rounded'>
                            <form onSubmit={searchHandler}>
                                <div className='form-group'>
                                    <label htmlFor='exampleInputEmail1'>Pick From</label>
                                    <input type='text' className='form-control' placeholder='From' name='from' onBlur={handleBlur} required/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='exampleInputPassword1'>Pick To</label>
                                    <input type='text' className='form-control' placeholder='To' name='to' onBlur={handleBlur} required/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='exampleInputPassword1'>Date</label>
                                    <input type='date' className='form-control' placeholder='To' name='date' onBlur={handleBlur} required/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='exampleInputPassword1'>Time</label>
                                    <input type='time' className='form-control' placeholder='To' name='time' onBlur={handleBlur} required/>
                                </div>
                                <input type='submit' className='btn btn-primary form-control' value='Search'/>
                            </form>
                        </div>
                    ) : (
                        <div className='bg-primary p-3 rounded'>
                                 {/* <div className = "d-flex align-items-center justify-content-center fw-bold pb-4 ">

                                    <div className='col-lg-3 border-p'>
                                      <p> From </p>
                                      <p >{destination.from}</p>
                                    </div>
                                    <div className='col-lg-3'>
                                      <p > To </p>
                                      <p>{destination.to}</p>
                                    </div>
                                    <div className='col-lg-4'>
                                      <p > Date</p>
                                      <p >{destination.date}</p>
                                    </div>
                                    <div className='col-lg-3'>
                                      <p > Time </p>
                                      <p >{destination.time}</p>
                                    </div>
                                
                                 </div>
                                   */}       
                           
                           
                            <table className='table table-bordered table-hover bg-white'>
                                <tbody>
                                    <tr>
                                        <th>From</th>
                                        <td>{destination.from}</td>
                                    </tr>
                                    <tr>
                                        <th>To</th>
                                        <td>{destination.to}</td>
                                    </tr>
                                    <tr>
                                        <th>Date</th>
                                        <td>{destination.date}</td>
                                    </tr>
                                    <tr>
                                        <th>Time</th>
                                        <td>{destination.time}</td>
                                    </tr>
                                </tbody>
                            </table> 
                            

                            <div className='card text-center p-2'>
                                <div className='row no-gutters d-flex align-items-center justify-content-center'>

                                    <div className='col-lg-3'>
                                        <img className='w-100' src={vehicle.image} alt='...'/>
                                    </div>
                                    <div className='col-lg-3'>
                                        <h5 className='card-title'>{vehicle.transport}</h5>
                                    </div>
                                    <div className='col-lg-3'>
                                        <h5 className='card-title'><FontAwesomeIcon icon={faUserFriends}/> Total: {vehicle.capacity}</h5>
                                    </div>
                                    <div className='col-lg-3'>
                                        <h5 className='card-title'>Price: ${vehicle.price}</h5>
                                    </div>
                                </div>
                            </div>
                         </div>
                    )}
                </div>
                <div className='col-lg-6'>
    
                    <GoogleMap/>
                </div>
            </div>
        </div>
    );
};

export default Destination;